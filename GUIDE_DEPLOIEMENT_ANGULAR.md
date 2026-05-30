# Guide de Déploiement - SOFTMALI Angular

## 📋 Prérequis

### Installation des Outils

1. **Node.js et npm**
   - Télécharger depuis https://nodejs.org/
   - Version recommandée: 18.x ou supérieure
   - Vérifier l'installation:
     ```bash
     node --version
     npm --version
     ```

2. **Angular CLI**
   ```bash
   npm install -g @angular/cli
   ```

3. **Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

## 🔧 Configuration Initiale

### 1. Installation du Projet

```bash
cd c:\Users\cheic\Desktop\Doc_IIBS\SiteWeb
npm install
```

### 2. Configuration Firebase

1. **Créer un projet Firebase**
   - Aller sur https://console.firebase.google.com
   - Créer un nouveau projet ou utiliser un existant
   - Activer Firestore Database
   - Activer Hosting

2. **Récupérer les clés Firebase**
   - Dans la console Firebase: Project Settings > Your apps
   - Copier la configuration

3. **Mettre à jour les clés**
   - Modifier `src/environments/environment.ts`
   - Modifier `src/environments/environment.prod.ts`
   - Mettre à jour `.firebaserc` avec votre project ID

### 3. Configuration Firestore

**Créer les collections:**

Dans la console Firebase Firestore, créer:
- Collection `contacts`
- Collection `quotes`

**Règles de sécurité:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Messages de contact
    match /contacts/{document} {
      allow read: if request.auth != null; // Admin seulement
      allow write: if true; // Tout le monde peut envoyer
    }
    
    // Demandes de devis
    match /quotes/{document} {
      allow read: if request.auth != null; // Admin seulement
      allow write: if true; // Tout le monde peut envoyer
    }
  }
}
```

## 🚀 Déploiement sur Firebase Hosting

### Méthode 1: Déploiement Automatique

```bash
# 1. Build de production
npm run build:prod

# 2. Connexion à Firebase (première fois)
firebase login

# 3. Déploiement
npm run deploy
```

### Méthode 2: Déploiement Manuel

```bash
# 1. Build
ng build --configuration production

# 2. Tester localement
firebase serve

# 3. Déployer
firebase deploy --only hosting
```

### Méthode 3: CI/CD avec GitHub Actions

Créer `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build:prod
        
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-project-id
```

## 🌐 Déploiement sur d'autres plateformes

### Netlify

1. **Installation**
   ```bash
   npm install -g netlify-cli
   netlify login
   ```

2. **Configuration**
   Créer `netlify.toml`:
   ```toml
   [build]
     command = "npm run build:prod"
     publish = "dist/softmali"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Déploiement**
   ```bash
   netlify deploy --prod
   ```

### Vercel

1. **Installation**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Configuration**
   Créer `vercel.json`:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": {
           "distDir": "dist/softmali"
         }
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/index.html"
       }
     ]
   }
   ```

3. **Déploiement**
   ```bash
   vercel --prod
   ```

### GitHub Pages

1. **Installation**
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. **Build et déploiement**
   ```bash
   ng build --configuration production --base-href "https://username.github.io/repo-name/"
   npx angular-cli-ghpages --dir=dist/softmali
   ```

## 🔒 Configuration de la Sécurité

### Firebase Security Rules

**Firestore:**
```javascript
// Voir section Configuration Firestore ci-dessus
```

**Hosting Headers:**
```json
{
  "hosting": {
    "headers": [
      {
        "source": "**",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "DENY"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          }
        ]
      }
    ]
  }
}
```

## 📊 Monitoring et Analytics

### Firebase Analytics

Déjà configuré dans l'application. Pour voir les statistiques:
1. Console Firebase > Analytics
2. Voir les événements automatiques

### Google Search Console

1. Vérifier le site: https://search.google.com/search-console
2. Soumettre le sitemap: `https://votre-domaine.com/sitemap.xml`

### Performance Monitoring

```bash
npm install firebase
```

Dans `app.module.ts`:
```typescript
import { providePerformance, getPerformance } from '@angular/fire/performance';

// Ajouter dans imports
providePerformance(() => getPerformance())
```

## 🎯 Optimisation

### Build Optimization

Le fichier `angular.json` est déjà configuré pour:
- Minification
- Tree-shaking
- Lazy loading
- Code splitting

### Cache Strategy

Firebase Hosting est configuré pour:
- Cache long pour assets (images, fonts)
- Cache court pour HTML
- Voir `firebase.json`

## ✅ Checklist de Déploiement

- [ ] ✅ Tests locaux OK (`npm start`)
- [ ] ✅ Build de production OK (`npm run build:prod`)
- [ ] ✅ Vérifier le dist/softmali/
- [ ] ✅ Clés Firebase configurées
- [ ] ✅ Firestore rules configurées
- [ ] ✅ Firebase login OK
- [ ] ✅ Déploiement réussi
- [ ] ✅ Tests sur le site en ligne
- [ ] ✅ Formulaires fonctionnels
- [ ] ✅ Analytics configuré
- [ ] ✅ Domaine personnalisé (optionnel)
- [ ] ✅ SSL/HTTPS activé

## 🔧 Dépannage

### Erreur de build

```bash
# Nettoyer et réinstaller
rm -rf node_modules dist
npm install
npm run build:prod
```

### Erreur Firebase

```bash
# Vérifier la connexion
firebase login --reauth

# Vérifier le projet
firebase projects:list
firebase use your-project-id
```

### Erreur de routing

Vérifier `firebase.json` - la rewrite doit être présente:
```json
"rewrites": [
  {
    "source": "**",
    "destination": "/index.html"
  }
]
```

## 📞 Support

Pour toute question:
- Email: contact@softmali.com
- Documentation complète dans README_ANGULAR.md

## 🎉 Déploiement Réussi!

Votre site est maintenant en ligne:
- URL Firebase: `https://your-project.web.app`
- URL personnalisée: Configurable dans Firebase Console

Prochaines étapes:
1. Configurer un domaine personnalisé
2. Activer les backups Firestore
3. Configurer les alertes de monitoring
4. Mettre en place CI/CD
