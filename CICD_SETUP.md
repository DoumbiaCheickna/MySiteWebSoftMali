# 🚀 Configuration CI/CD - Déploiement Automatique

## ✅ Fichiers créés

- `.github/workflows/deploy.yml` - GitHub Actions
- `.gitlab-ci.yml` - GitLab CI/CD

---

## 📋 Configuration GitHub Actions

### 1. Ajouter les Secrets GitHub

Allez sur votre repository → **Settings** → **Secrets and variables** → **Actions**

Cliquez sur **New repository secret** et ajoutez :

| Secret Name | Description | Comment obtenir |
|------------|-------------|-----------------|
| `RENDER_DEPLOY_HOOK` | URL webhook Render | Render Dashboard → Service → Settings → Deploy Hook |
| `DOCKER_USERNAME` | Nom d'utilisateur Docker Hub | Votre username sur hub.docker.com |
| `DOCKER_TOKEN` | Token d'accès Docker Hub | Docker Hub → Account Settings → Security → New Access Token |

> Note : si ces secrets ne sont pas configurés, les jobs `deploy-render` et `deploy-docker` seront automatiquement ignorés par GitHub Actions.

> Si `curl` échoue avec « no URL specified », vérifiez que `RENDER_DEPLOY_HOOK` est bien défini et non vide.
> Si `docker/login-action` échoue avec « Username and password required », vérifiez `DOCKER_USERNAME` et `DOCKER_TOKEN`.

### 2. Configuration Render Deploy Hook

1. Allez sur [dashboard.render.com](https://dashboard.render.com)
2. Sélectionnez votre service **SOFTMALI**
3. Allez dans **Settings** → **Build & Deploy**
4. Trouvez **Deploy Hook** et cliquez **Create Deploy Hook**
5. Copiez l'URL (format: `https://api.render.com/deploy/srv-xxx?key=xxx`)
6. Ajoutez-la comme secret GitHub `RENDER_DEPLOY_HOOK`

### 3. Activer GitHub Actions

Les workflows GitHub Actions se déclenchent automatiquement après le premier push.

---

## 📋 Configuration GitLab CI/CD

### 1. Ajouter les Variables GitLab

Allez sur votre projet GitLab → **Settings** → **CI/CD** → **Variables**

Cliquez sur **Add variable** et ajoutez :

| Variable Name | Value | Protected | Masked |
|--------------|-------|-----------|--------|
| `RENDER_DEPLOY_HOOK` | URL webhook Render | ✅ | ✅ |
| `DOCKER_USERNAME` | Votre username Docker Hub | ✅ | ❌ |
| `DOCKER_TOKEN` | Token Docker Hub | ✅ | ✅ |

### 2. Activer GitLab CI/CD

Le fichier `.gitlab-ci.yml` sera détecté automatiquement au prochain push.

---

## 🔄 Workflow Automatique

### Déclencheurs

**Le déploiement se lance automatiquement quand vous faites :**

```bash
git add .
git commit -m "Nouvelle fonctionnalité"
git push origin main
```

### Pipeline

```
Push sur Git
    ↓
┌─────────────────┐
│   Build Job     │
│ - npm install   │
│ - npm build     │
└────────┬────────┘
         ↓
    ┌────┴────┐
    ↓         ↓
┌────────┐  ┌──────────┐
│ Render │  │  Docker  │
│ Deploy │  │   Push   │
└────────┘  └──────────┘
    ↓            ↓
  ✅ Live     ✅ Hub
```

### Temps de déploiement

- **Build** : ~5 minutes
- **Render Deploy** : ~5-7 minutes
- **Docker Push** : ~2 minutes
- **Total** : ~10-12 minutes

---

## 🎯 Vérification

### GitHub Actions

1. Allez sur votre repository GitHub
2. Cliquez sur l'onglet **Actions**
3. Vous verrez vos workflows et leur statut :
   - ✅ Build successful
   - ✅ Deploy to Render
   - ✅ Push to Docker Hub

### GitLab CI/CD

1. Allez sur votre projet GitLab
2. Menu **CI/CD** → **Pipelines**
3. Cliquez sur le pipeline pour voir les détails

### Notifications

Les deux plateformes envoient des notifications :
- ✅ Succès : Email + Badge vert
- ❌ Échec : Email + Badge rouge

---

## 🔧 Personnalisation

### Déployer seulement sur Render

Commentez la section `deploy-docker` dans le workflow.

### Déployer sur une autre branche

Modifiez dans `.github/workflows/deploy.yml` :

```yaml
on:
  push:
    branches: [ main, develop, production ]
```

### Ajouter des tests

Ajoutez avant le build :

```yaml
- name: Run tests
  run: npm test
```

### Déploiement manuel

GitHub : Ajoutez `workflow_dispatch` :

```yaml
on:
  push:
    branches: [ main ]
  workflow_dispatch:  # Permet déclenchement manuel
```

Puis : Actions → Workflow → Run workflow

---

## 📊 Monitoring

### Status Badges

Ajoutez au README.md :

**GitHub Actions :**
```markdown
![CI/CD](https://github.com/USERNAME/REPO/actions/workflows/deploy.yml/badge.svg)
```

**GitLab CI :**
```markdown
![Pipeline](https://gitlab.com/USERNAME/REPO/badges/main/pipeline.svg)
```

### Logs

**GitHub Actions :**
- Repository → Actions → Sélectionner un workflow → Voir les logs

**GitLab CI :**
- Projet → CI/CD → Pipelines → Jobs → Logs

---

## 🛠️ Dépannage

### Erreur : "Secret not found"

**Solution :**
- Vérifiez que les secrets sont bien ajoutés
- Nom exact avec MAJUSCULES
- Secrets disponibles uniquement sur branches protégées (main/master)

### Erreur : "Build failed"

**Solution :**
```bash
# Testez localement d'abord
npm ci
npm run build:prod

# Si ça marche localement, vérifiez les versions Node.js
```

### Erreur : "Docker push denied"

**Solution :**
- Vérifiez Docker Hub username/token
- Token doit avoir les permissions "Read, Write, Delete"

### Render ne se déploie pas

**Solution :**
- Vérifiez que le Deploy Hook est correct
- Format : `https://api.render.com/deploy/srv-xxx?key=xxx`
- Testez manuellement : `curl -X POST "votre-hook-url"`

### Pipeline bloqué sur "Waiting for approval"

**Solution (GitLab) :**
- Settings → CI/CD → Protected branches
- Ajoutez votre branche main

---

## 🎉 C'est fait !

Maintenant, **chaque push sur Git déclenche automatiquement** :

1. ✅ Build de l'application
2. ✅ Déploiement sur Render
3. ✅ Push de l'image Docker sur Docker Hub

Plus besoin de déployer manuellement ! 🚀

### Test rapide

```bash
# Faites un petit changement
echo "# Test CI/CD" >> README.md

# Commitez et pushez
git add .
git commit -m "Test déploiement automatique"
git push origin main

# Surveillez GitHub Actions ou GitLab CI
# Votre site se mettra à jour automatiquement !
```

---

## 📝 Checklist Finale

- [ ] Secrets GitHub/GitLab ajoutés
- [ ] Deploy Hook Render configuré
- [ ] Token Docker Hub créé
- [ ] Premier push effectué
- [ ] Pipeline vert (toutes les étapes passent)
- [ ] Site mis à jour sur Render
- [ ] Image Docker disponible sur Hub
- [ ] Badges de statut ajoutés au README

**Votre pipeline CI/CD est opérationnel ! 🎊**
