# SOFTMALI - Application Angular

## 🚀 Guide de Démarrage Rapide

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn
- Angular CLI (`npm install -g @angular/cli`)
- Compte Firebase (pour le déploiement)

### Installation

1. **Installer les dépendances**
```bash
npm install
```

2. **Lancer le serveur de développement**
```bash
npm start
# ou
ng serve
```

L'application sera accessible sur `http://localhost:4200`

### Scripts Disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Build de production
- `npm run build:prod` - Build optimisé pour production
- `npm run deploy` - Déploie sur Firebase Hosting
- `npm test` - Lance les tests unitaires
- `npm run watch` - Build en mode watch

## 📁 Structure du Projet

```
SiteWeb/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/          # Page d'accueil
│   │   │   ├── services/      # Page services
│   │   │   ├── about/         # Page à propos
│   │   │   └── contact/       # Page contact
│   │   ├── shared/
│   │   │   └── components/
│   │   │       ├── navbar/    # Navigation
│   │   │       └── footer/    # Pied de page
│   │   ├── services/          # Services Angular
│   │   ├── app.module.ts      # Module principal
│   │   └── app-routing.module.ts
│   ├── assets/                # Images, fonts, etc.
│   ├── environments/          # Configuration environnements
│   ├── styles.css            # Styles globaux
│   └── index.html
├── angular.json              # Configuration Angular
├── package.json
├── tsconfig.json
├── firebase.json             # Configuration Firebase
└── .firebaserc

```

## 🔥 Configuration Firebase

### Initialisation

1. **Installer Firebase Tools**
```bash
npm install -g firebase-tools
```

2. **Se connecter à Firebase**
```bash
firebase login
```

3. **Initialiser le projet (déjà configuré)**
Le projet est déjà configuré avec Firebase. Vérifiez `.firebaserc` et `firebase.json`.

### Configuration

Les clés Firebase sont dans `src/environments/`:
- `environment.ts` - Développement
- `environment.prod.ts` - Production

⚠️ **Important**: Remplacez les clés Firebase par les vôtres si nécessaire.

## 🚀 Déploiement

### 1. Build de Production

```bash
npm run build:prod
```

Le build sera généré dans `dist/softmali/`

### 2. Déploiement sur Firebase Hosting

```bash
# Déployer automatiquement
npm run deploy

# Ou manuellement
firebase deploy --only hosting
```

### 3. Déploiement sur d'autres plateformes

#### Netlify
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Build
npm run build:prod

# Déployer
netlify deploy --prod --dir=dist/softmali
```

#### Vercel
```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel --prod
```

## ⚙️ Configuration

### Environnements

Modifiez les fichiers dans `src/environments/` pour configurer:
- Clés API Firebase
- URLs d'API
- Variables d'environnement

### Routing

Le routing est configuré avec lazy loading pour optimiser les performances:
- `/` - Page d'accueil
- `/services` - Services
- `/about` - À propos
- `/contact` - Contact

### Firebase Collections

L'application utilise ces collections Firestore:
- `contacts` - Messages de contact
- `quotes` - Demandes de devis

## 🎨 Personnalisation

### Styles
Les styles globaux sont dans `src/styles.css`. Modifiez les variables CSS pour personnaliser:
- Couleurs
- Typographie
- Espacements

### Contenu
Modifiez le contenu dans les fichiers de composants (`.component.ts` et `.component.html`)

## 📱 Responsive Design

L'application est entièrement responsive et optimisée pour:
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🔒 Sécurité

### Règles Firebase Security
Configurez les règles de sécurité Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow read: if request.auth != null;
      allow write: if true;
    }
    match /quotes/{document} {
      allow read: if request.auth != null;
      allow write: if true;
    }
  }
}
```

## 📊 Analytics

Google Analytics est intégré via Firebase Analytics. Les événements sont trackés automatiquement.

## 🐛 Débogage

### Mode Développement
```bash
ng serve --open
```

### Logs Firebase
```bash
firebase functions:log
```

### Tests
```bash
npm test
```

## 📝 TODO

- [ ] Ajouter tests unitaires complets
- [ ] Configurer CI/CD (GitHub Actions)
- [ ] Ajouter PWA support
- [ ] Optimiser les images
- [ ] Ajouter i18n (internationalisation)

## 🤝 Support

Pour toute question ou problème:
- Email: contact@softmali.com
- Documentation: Consultez les fichiers GUIDE_*.md

## 📄 Licence

© 2026 SOFTMALI. Tous droits réservés.
