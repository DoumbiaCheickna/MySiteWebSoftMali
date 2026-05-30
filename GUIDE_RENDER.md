# 🚀 Guide de Déploiement sur Render

## Vue d'ensemble
Ce guide vous accompagne pour déployer votre application Angular SOFTMALI sur Render.com.

---

## 📋 Prérequis

### 1. Compte Render
- Créez un compte gratuit sur [render.com](https://render.com)
- Connectez votre compte GitHub

### 2. Repository Git
- Votre projet doit être sur GitHub/GitLab/Bitbucket
- Si ce n'est pas encore fait :
```bash
git init
git add .
git commit -m "Initial commit - SOFTMALI Angular App"
git remote add origin <votre-repo-url>
git push -u origin main
```

### 3. Configuration Firebase (Important)
Avant de déployer, configurez vos clés Firebase dans :
- `src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  firebase: {
    apiKey: "VOTRE_API_KEY",
    authDomain: "votre-projet.firebaseapp.com",
    projectId: "votre-projet-id",
    storageBucket: "votre-projet.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
  }
};
```

---

## 🎯 Étapes de Déploiement

### Étape 1 : Préparation du Projet

Le projet est déjà configuré avec :
- ✅ `server.js` - Serveur Express pour servir l'application
- ✅ `render.yaml` - Configuration Render
- ✅ Scripts de build dans `package.json`

Installez Express (si pas déjà fait) :
```bash
npm install express --save
```

### Étape 2 : Connexion à Render

1. Allez sur [dashboard.render.com](https://dashboard.render.com)
2. Cliquez sur **"New +"** → **"Web Service"**
3. Connectez votre repository Git

### Étape 3 : Configuration du Service

Render détectera automatiquement le fichier `render.yaml`, mais vérifiez :

**Configuration manuelle (si nécessaire) :**
- **Name:** `softmali` (ou votre nom préféré)
- **Region:** Frankfurt (ou le plus proche)
- **Branch:** `main`
- **Root Directory:** (laisser vide)
- **Environment:** `Node`
- **Build Command:** 
  ```
  npm install && npm run build:prod
  ```
- **Start Command:** 
  ```
  node server.js
  ```

### Étape 4 : Variables d'Environnement

Dans l'onglet **Environment** de votre service Render, ajoutez :

| Key | Value |
|-----|-------|
| `NODE_VERSION` | `18.17.0` |
| `NPM_VERSION` | `9.6.7` |

**Important :** Ne mettez PAS les clés Firebase ici. Elles sont compilées dans le build Angular depuis `environment.prod.ts`.

### Étape 5 : Déploiement

1. Cliquez sur **"Create Web Service"**
2. Render va :
   - Cloner votre repository
   - Installer les dépendances (`npm install`)
   - Builder l'application (`npm run build:prod`)
   - Démarrer le serveur (`node server.js`)

Le déploiement prend environ **5-10 minutes**.

### Étape 6 : Vérification

Une fois déployé, vous recevrez une URL :
```
https://softmali.onrender.com
```

Testez votre application :
- ✅ Page d'accueil
- ✅ Navigation entre les pages
- ✅ Formulaire de contact
- ✅ Responsive design

---

## 🔄 Déploiements Automatiques

Render redéploie automatiquement à chaque push sur la branche `main` :

```bash
# Faire des modifications
git add .
git commit -m "Mise à jour du design"
git push origin main
# → Render redéploie automatiquement
```

---

## 🛠️ Dépannage

### Erreur : "Application failed to respond"
**Cause :** Le serveur ne démarre pas correctement
**Solution :**
```bash
# Vérifiez les logs dans le dashboard Render
# Assurez-vous que le build s'est terminé avec succès
```

### Erreur : "Cannot find module 'express'"
**Cause :** Express n'est pas installé
**Solution :**
```bash
npm install express --save
git add package.json package-lock.json
git commit -m "Add express dependency"
git push origin main
```

### Page blanche après déploiement
**Cause :** Problème de routing ou de configuration Firebase
**Solutions :**
1. Vérifiez que `render.yaml` contient le bon `startCommand`
2. Vérifiez les clés Firebase dans `environment.prod.ts`
3. Consultez les logs Render pour les erreurs

### Build échoue
**Cause :** Erreurs TypeScript ou dépendances manquantes
**Solution :**
```bash
# Testez localement d'abord
npm run build:prod

# Si ça fonctionne localement, vérifiez la version Node sur Render
# Elle doit correspondre à celle de votre machine
```

---

## 📊 Monitoring

### Logs en Temps Réel
Dans le dashboard Render → Votre service → **Logs**

### Métriques
Render Free Tier inclut :
- 750 heures/mois
- Auto-sleep après 15 min d'inactivité
- Premier démarrage peut prendre 30s (cold start)

### Améliorer les Performances
Pour éviter le cold start (plan payant requis) :
- Passez au plan Starter ($7/mois)
- Pas de sleep automatique

---

## 🔐 Sécurité

### Clés Firebase
- ❌ Ne JAMAIS commiter les vraies clés dans le code public
- ✅ Utilisez des fichiers d'environnement
- ✅ Configurez les règles Firestore pour limiter l'accès

### HTTPS
- ✅ Render fournit automatiquement un certificat SSL
- Votre site sera accessible en `https://`

---

## 📈 Optimisations

### 1. Compression Gzip
Ajoutez dans `server.js` :
```javascript
const compression = require('compression');
app.use(compression());
```

Puis installez :
```bash
npm install compression --save
```

### 2. Cache des Assets
Render met automatiquement en cache les fichiers statiques.

### 3. Lazy Loading
Déjà configuré dans le routing Angular.

---

## 💰 Coûts

### Plan Free
- **Prix :** $0/mois
- **Limites :**
  - 750 heures/mois
  - Auto-sleep après 15 min d'inactivité
  - 100 GB bandwidth/mois
- **Idéal pour :** Sites vitrines, portfolios, projets perso

### Plan Starter
- **Prix :** $7/mois
- **Avantages :**
  - Pas de sleep
  - Domaine personnalisé
  - Plus de ressources

---

## 🌐 Domaine Personnalisé

### Ajouter votre domaine

1. Dans Render → Votre service → **Settings**
2. Scroll vers **Custom Domains**
3. Cliquez **"Add Custom Domain"**
4. Entrez votre domaine : `www.softmali.com`
5. Configurez les DNS chez votre registrar :

```
Type: CNAME
Name: www
Value: softmali.onrender.com
```

---

## 📝 Checklist Finale

Avant de passer en production :

- [ ] Clés Firebase configurées dans `environment.prod.ts`
- [ ] Logo SOFTMALI ajouté dans `assets/images/`
- [ ] Numéros de téléphone corrects (+221 77 443 57 52)
- [ ] Email correct (contact@softmali.com)
- [ ] Tests locaux réussis (`npm run build:prod`)
- [ ] Repository Git à jour
- [ ] Règles Firestore configurées
- [ ] Collections Firestore créées (`contacts`, `quotes`)
- [ ] Tests sur mobile/tablette
- [ ] SEO configuré (meta tags, sitemap)

---

## 🎉 Vous êtes prêt !

Votre application SOFTMALI est maintenant déployée sur Render. 

**URL de production :** `https://softmali.onrender.com`

Pour toute question :
- Documentation Render : [render.com/docs](https://render.com/docs)
- Support Render : [render.com/support](https://render.com/support)

---

**Bon déploiement ! 🚀**
