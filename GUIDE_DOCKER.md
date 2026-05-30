# 🐳 Guide Docker & Nginx - SOFTMALI

## Vue d'ensemble

Ce projet utilise Docker avec une configuration multi-stage :
- **Stage 1** : Build de l'application Angular avec Node.js
- **Stage 2** : Service de l'application avec Nginx (léger et performant)

---

## 📋 Prérequis

### Installation Docker

**Windows :**
- Téléchargez [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop)
- Suivez l'installateur
- Redémarrez votre ordinateur

**Linux (Ubuntu/Debian) :**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

**macOS :**
- Téléchargez [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop)
- Installez et lancez l'application

### Vérification
```bash
docker --version
docker-compose --version
```

---

## 🚀 Démarrage Rapide

### Option 1 : Docker Compose (Recommandé)

```bash
# Construire et démarrer
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter
docker-compose down
```

**L'application sera accessible sur :** `http://localhost:8080`

### Option 2 : Docker CLI

```bash
# Construire l'image
docker build -t softmali:latest .

# Lancer le conteneur
docker run -d -p 8080:80 --name softmali-app softmali:latest

# Voir les logs
docker logs -f softmali-app

# Arrêter et supprimer
docker stop softmali-app
docker rm softmali-app
```

---

## 📁 Structure des Fichiers

### Dockerfile
```dockerfile
# Stage 1: Build Angular (Node.js)
FROM node:18-alpine AS build
# ... build l'application ...

# Stage 2: Servir avec Nginx
FROM nginx:alpine
# ... copie les fichiers buildés ...
```

**Avantages du multi-stage :**
- Image finale très légère (~25 MB)
- Aucun outil de build dans l'image de production
- Sécurité renforcée

### nginx.conf
Configuration optimisée pour Angular :
- **Routing SPA** : `try_files $uri $uri/ /index.html`
- **Compression Gzip** : Réduction de 70% de la taille
- **Cache optimisé** : Assets (1 an), index.html (no-cache)
- **Headers de sécurité** : XSS, Frame, Content-Type

### .dockerignore
Exclut les fichiers inutiles du build :
- `node_modules/`
- `dist/`
- Documentation
- Fichiers de configuration locale

---

## 🔧 Commandes Utiles

### Gestion des Conteneurs

```bash
# Lister les conteneurs actifs
docker ps

# Lister tous les conteneurs
docker ps -a

# Voir les logs en temps réel
docker logs -f softmali-app

# Accéder au shell du conteneur
docker exec -it softmali-app sh

# Redémarrer le conteneur
docker restart softmali-app

# Statistiques d'utilisation
docker stats softmali-app
```

### Gestion des Images

```bash
# Lister les images
docker images

# Supprimer une image
docker rmi softmali:latest

# Nettoyer les images inutilisées
docker image prune -a

# Voir la taille des couches
docker history softmali:latest
```

### Docker Compose

```bash
# Démarrer en mode détaché
docker-compose up -d

# Reconstruire les images
docker-compose build

# Voir les logs d'un service spécifique
docker-compose logs -f softmali-web

# Arrêter et supprimer tout
docker-compose down -v

# Redémarrer un service
docker-compose restart softmali-web
```

---

## 🔍 Tests et Vérification

### Test Local

1. **Construire l'image :**
```bash
docker build -t softmali:test .
```

2. **Lancer le conteneur :**
```bash
docker run -p 8080:80 softmali:test
```

3. **Tester dans le navigateur :**
- Accueil : `http://localhost:8080`
- Services : `http://localhost:8080/services`
- Contact : `http://localhost:8080/contact`
- Recharger la page (F5) sur chaque route

4. **Vérifier les performances :**
```bash
# Taille de l'image
docker images softmali:test

# Doit être environ 25-30 MB
```

### Vérification Nginx

```bash
# Accéder au conteneur
docker exec -it softmali-app sh

# Vérifier la config Nginx
nginx -t

# Voir les fichiers servis
ls -la /usr/share/nginx/html

# Tester la compression
curl -H "Accept-Encoding: gzip" -I http://localhost
```

---

## 🌐 Déploiement

### Docker Hub

1. **Tag l'image :**
```bash
docker tag softmali:latest votre-username/softmali:latest
```

2. **Push sur Docker Hub :**
```bash
docker login
docker push votre-username/softmali:latest
```

3. **Pull sur le serveur de production :**
```bash
docker pull votre-username/softmali:latest
docker run -d -p 80:80 votre-username/softmali:latest
```

### Render avec Docker

Créez un fichier `render.dockerfile.yaml` :
```yaml
services:
  - type: web
    name: softmali
    env: docker
    dockerfilePath: ./Dockerfile
    dockerContext: .
    plan: free
```

### AWS ECS / Google Cloud Run

Les fichiers Docker sont compatibles avec :
- AWS Elastic Container Service (ECS)
- Google Cloud Run
- Azure Container Instances
- DigitalOcean App Platform

---

## ⚙️ Personnalisation

### Changer le Port

**Docker Compose :**
```yaml
ports:
  - "3000:80"  # Port hôte:Port conteneur
```

**Docker CLI :**
```bash
docker run -p 3000:80 softmali:latest
```

### Variables d'Environnement

Pour Firebase ou autres configs, modifiez avant le build :
```bash
# Éditez src/environments/environment.prod.ts
docker build -t softmali:prod .
```

### Nginx Personnalisé

Modifiez `nginx.conf` pour :
- Changer le port d'écoute
- Ajouter des headers custom
- Configurer HTTPS (avec certificats)
- Ajuster la compression

---

## 🛠️ Dépannage

### Problème : Le conteneur ne démarre pas

```bash
# Voir les logs d'erreur
docker logs softmali-app

# Vérifier si le port est déjà utilisé
netstat -an | findstr :8080  # Windows
lsof -i :8080                 # Linux/Mac
```

### Problème : Page 404 sur les routes

**Cause :** Nginx ne renvoie pas vers index.html

**Solution :**
- Vérifiez que `nginx.conf` contient `try_files $uri $uri/ /index.html`
- Reconstruisez l'image : `docker-compose build`

### Problème : Build échoue

```bash
# Build avec logs détaillés
docker build --no-cache --progress=plain -t softmali:debug .

# Vérifier les dépendances
docker run -it node:18-alpine sh
npm --version
```

### Problème : Image trop volumineuse

**Solutions :**
- Utilisez `.dockerignore` (déjà configuré)
- Multi-stage build (déjà utilisé)
- Vérifiez : `docker images softmali:latest`

### Problème : Lenteur du build

```bash
# Utiliser le cache npm
RUN npm ci --cache .npm

# Builder en parallèle
docker build --build-arg JOBS=4 .
```

---

## 📊 Optimisations

### Performance Nginx

La config actuelle inclut :
- ✅ Gzip compression (70% réduction)
- ✅ Cache navigateur (1 an pour assets)
- ✅ Headers de sécurité
- ✅ Logs structurés

### Taille de l'Image

```bash
# Image actuelle
node:18-alpine     → 40 MB (build stage)
nginx:alpine       → 25 MB (production)
softmali:latest    → ~25 MB (finale)
```

**Comparaison :**
- Avec Node.js/Express : ~120 MB
- Avec Nginx : ~25 MB
- **Gain : 80% de réduction**

### Sécurité

Headers déjà configurés :
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

---

## 🔐 Production Best Practices

### 1. HTTPS avec Let's Encrypt

Ajoutez à `docker-compose.yml` :
```yaml
services:
  softmali-web:
    # ...
    volumes:
      - ./certs:/etc/nginx/ssl
```

Modifiez `nginx.conf` :
```nginx
server {
    listen 443 ssl http2;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    # ...
}
```

### 2. Monitoring

```bash
# Logs persistants
docker run -v ./logs:/var/log/nginx softmali:latest

# Métriques avec Prometheus
# Ajoutez nginx-prometheus-exporter
```

### 3. Health Checks

Dans `docker-compose.yml` :
```yaml
healthcheck:
  test: ["CMD", "wget", "-q", "-O", "-", "http://localhost/"]
  interval: 30s
  timeout: 10s
  retries: 3
```

---

## 📝 Checklist Déploiement

Avant de déployer en production :

- [ ] Firebase configuré dans `environment.prod.ts`
- [ ] Build local réussi : `docker build -t softmali:prod .`
- [ ] Test conteneur : `docker run -p 8080:80 softmali:prod`
- [ ] Vérifier toutes les routes Angular
- [ ] Tester le formulaire de contact
- [ ] Vérifier la compression : `curl -I http://localhost:8080`
- [ ] Logo présent dans l'image
- [ ] Règles Firestore configurées
- [ ] HTTPS configuré (production)
- [ ] Domaine personnalisé configuré
- [ ] Backup de l'image : `docker save > softmali-backup.tar`

---

## 🎉 Résumé

**Configuration actuelle :**
- ✅ Dockerfile multi-stage optimisé
- ✅ Nginx configuré pour Angular SPA
- ✅ Docker Compose pour démarrage facile
- ✅ Image légère (~25 MB)
- ✅ Compression et cache optimisés
- ✅ Headers de sécurité

**Commandes essentielles :**
```bash
# Développement local
docker-compose up -d

# Production
docker build -t softmali:v1.0 .
docker run -d -p 80:80 --name softmali softmali:v1.0
```

**Votre application est maintenant conteneurisée ! 🐳🚀**
