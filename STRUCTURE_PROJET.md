# 📂 Structure du Projet Angular SOFTMALI

## Arborescence Complète

```
SiteWeb/
│
├── 📄 Configuration Racine
│   ├── package.json                    # Dépendances npm
│   ├── angular.json                    # Configuration Angular
│   ├── tsconfig.json                   # Configuration TypeScript
│   ├── tsconfig.app.json              # Config TypeScript pour l'app
│   ├── tsconfig.spec.json             # Config TypeScript pour les tests
│   ├── firebase.json                   # Configuration Firebase Hosting
│   ├── .firebaserc                    # Projet Firebase
│   └── .gitignore                     # Fichiers à ignorer par Git
│
├── 📚 Documentation
│   ├── COMMENCER_ICI.md              ⭐ Démarrage rapide
│   ├── PROJET_ANGULAR.md             ⭐ Guide complet du projet
│   ├── README_ANGULAR.md              Documentation technique
│   └── GUIDE_DEPLOIEMENT_ANGULAR.md   Guide de déploiement
│
├── 🛠️ Scripts PowerShell
│   ├── start.ps1                      Script de démarrage
│   ├── deploy.ps1                     Script de déploiement
│   └── check.ps1                      Script de vérification
│
└── 📁 src/                            CODE SOURCE
    │
    ├── 📄 Fichiers Principaux
    │   ├── index.html                 Template HTML principal
    │   ├── main.ts                    Point d'entrée TypeScript
    │   ├── styles.css                 Styles globaux (CSS migré)
    │   ├── favicon.ico                Icône du site
    │   ├── robots.txt                 Configuration SEO
    │   └── sitemap.xml                Plan du site
    │
    ├── 🎨 assets/                     RESSOURCES
    │   ├── images/                    Images du site
    │   └── ...                        Autres ressources
    │
    ├── ⚙️ environments/               CONFIGURATION
    │   ├── environment.ts             Config développement
    │   └── environment.prod.ts        Config production
    │
    └── 📱 app/                        APPLICATION ANGULAR
        │
        ├── 📄 Fichiers Racine
        │   ├── app.module.ts          Module principal
        │   ├── app-routing.module.ts  Configuration des routes
        │   └── app.component.ts       Composant racine
        │
        ├── 📑 pages/                  PAGES DU SITE
        │   │
        │   ├── 🏠 home/               Page d'accueil
        │   │   ├── home.component.ts
        │   │   ├── home.component.html
        │   │   ├── home.component.css
        │   │   └── home.module.ts
        │   │
        │   ├── 💼 services/           Page services
        │   │   ├── services.component.ts
        │   │   ├── services.component.html
        │   │   ├── services.component.css
        │   │   └── services.module.ts
        │   │
        │   ├── 👤 about/              Page à propos
        │   │   ├── about.component.ts
        │   │   ├── about.component.html
        │   │   ├── about.component.css
        │   │   └── about.module.ts
        │   │
        │   └── 📧 contact/            Page contact
        │       ├── contact.component.ts     (Formulaire + Firebase)
        │       ├── contact.component.html
        │       ├── contact.component.css
        │       └── contact.module.ts
        │
        ├── 🔧 services/               SERVICES ANGULAR
        │   └── contact.service.ts     Service Firebase (Firestore)
        │
        └── 🎯 shared/                 COMPOSANTS PARTAGÉS
            ├── shared.module.ts       Module partagé
            └── components/
                │
                ├── 🧭 navbar/         Navigation
                │   ├── navbar.component.ts
                │   ├── navbar.component.html
                │   └── navbar.component.css
                │
                └── 📊 footer/         Pied de page
                    ├── footer.component.ts
                    ├── footer.component.html
                    └── footer.component.css
```

---

## 📋 Description des Dossiers et Fichiers

### 🔧 Configuration Racine

**package.json**
- Dépendances npm (Angular, Firebase, etc.)
- Scripts de build et déploiement

**angular.json**
- Configuration du projet Angular
- Options de build et serve
- Chemins des assets

**tsconfig.json**
- Configuration TypeScript
- Options du compilateur

**firebase.json**
- Configuration Firebase Hosting
- Règles de cache
- Redirections pour SPA

**.firebaserc**
- ID du projet Firebase
- À mettre à jour avec votre projet

---

### 📚 Documentation

**COMMENCER_ICI.md** ⭐
- Point de départ
- Instructions rapides
- Checklist essentielle

**PROJET_ANGULAR.md** ⭐
- Guide complet du projet
- Toutes les fonctionnalités
- Configuration détaillée
- Déploiement complet

**README_ANGULAR.md**
- Documentation technique
- Structure détaillée
- Scripts disponibles

**GUIDE_DEPLOIEMENT_ANGULAR.md**
- Guide de déploiement pas à pas
- Firebase, Netlify, Vercel
- Configuration de sécurité

---

### 📁 src/ - Code Source

#### Fichiers Principaux

**index.html**
- Template HTML principal
- Balise `<app-root>`
- Liens vers Google Fonts et Font Awesome

**main.ts**
- Point d'entrée de l'application
- Bootstrap du module principal

**styles.css**
- Styles globaux (votre CSS original migré)
- Variables CSS
- Styles de base

---

### 🎨 assets/

Contient toutes les ressources statiques:
- Images
- Polices (si locales)
- Fichiers JSON de config
- Autres assets

---

### ⚙️ environments/

**environment.ts** (Développement)
```typescript
export const environment = {
  production: false,
  firebase: { ... }
};
```

**environment.prod.ts** (Production)
```typescript
export const environment = {
  production: true,
  firebase: { ... }
};
```

**À CONFIGURER**: Remplacez les clés Firebase par les vôtres!

---

### 📱 app/ - Application Angular

#### Modules Principaux

**app.module.ts**
- Module racine
- Imports: BrowserModule, Router, Firebase, etc.
- Déclaration du AppComponent

**app-routing.module.ts**
- Configuration des routes
- Lazy loading des pages
- Redirections

**app.component.ts**
- Composant racine
- Structure: Navbar + Router Outlet + Footer

---

#### 📑 pages/ - Pages du Site

Chaque page a sa propre structure modulaire:

**home/**
- Hero section
- Expertises
- Statistiques animées
- Processus
- CTA

**services/**
- Liste des services
- Détails et tarifs
- Formulaire de demande

**about/**
- Histoire de l'entreprise
- Valeurs
- Fondateur
- Compétences

**contact/**
- Formulaire de contact
- Calculateur de devis
- Intégration Firebase Firestore
- Validation en temps réel

Chaque page utilise le **lazy loading** pour optimiser les performances.

---

#### 🔧 services/ - Services Angular

**contact.service.ts**
- Intégration avec Firestore
- Méthodes pour envoyer messages et devis
- Gestion des timestamps
- Gestion des erreurs

Utilisé par le composant Contact pour sauvegarder les données dans Firebase.

---

#### 🎯 shared/ - Composants Partagés

**navbar/**
- Navigation responsive
- Menu mobile
- Gestion du scroll
- Liens actifs

**footer/**
- Liens du site
- Réseaux sociaux
- Informations de contact
- Bouton "Retour en haut"

Ces composants sont importés dans tous les modules via `SharedModule`.

---

## 🔄 Flux de l'Application

```
1. main.ts
   ↓
2. app.module.ts
   ↓
3. app.component.ts
   ├── app-navbar (shared)
   ├── router-outlet
   │   └── Page active (lazy loaded)
   │       ├── home
   │       ├── services
   │       ├── about
   │       └── contact
   └── app-footer (shared)
```

---

## 📦 Modules et Lazy Loading

```typescript
Routes:
'/'          → HomeModule      (lazy)
'/services'  → ServicesModule  (lazy)
'/about'     → AboutModule     (lazy)
'/contact'   → ContactModule   (lazy)
```

Avantages:
- Chargement plus rapide au démarrage
- Code splitting automatique
- Meilleure performance

---

## 🔥 Intégration Firebase

### Collections Firestore

**contacts/**
- Messages du formulaire de contact
- Champs: name, email, phone, subject, message, timestamp, status

**quotes/**
- Demandes de devis
- Champs: name, email, phone, company, service, budget, description, timestamp

### Services

**contact.service.ts**
- `sendContactMessage(data)` → Sauvegarde dans `contacts`
- `sendQuoteRequest(data)` → Sauvegarde dans `quotes`

---

## 🎨 Styles

### Architecture CSS

```
styles.css (global)
├── Variables CSS (:root)
├── Reset et base
├── Navigation (.navbar)
├── Hero section (.hero)
├── Sections (.section-padding)
├── Cards (.card, .expertise-card)
├── Formulaires (.form-group)
├── Boutons (.btn)
├── Footer (.footer)
└── Responsive (@media)
```

Les composants peuvent avoir leurs propres styles locaux, mais la majorité des styles est dans `styles.css` pour cohérence.

---

## 🛠️ Build et Déploiement

### Dossier de Build

```
npm run build:prod
↓
dist/
└── softmali/
    ├── index.html
    ├── main.{hash}.js
    ├── polyfills.{hash}.js
    ├── styles.{hash}.css
    └── assets/
```

Ce dossier `dist/softmali` est déployé sur Firebase Hosting.

---

## ✅ Points Clés

1. **Modularité**: Chaque page est un module séparé
2. **Lazy Loading**: Optimisation des performances
3. **Firebase**: Backend serverless intégré
4. **Responsive**: Design mobile-first
5. **SEO**: Optimisé pour le référencement
6. **TypeScript**: Code typé et sûr

---

## 🚀 Pour Commencer

1. Lisez **COMMENCER_ICI.md**
2. Consultez **PROJET_ANGULAR.md** pour le guide complet
3. Exécutez `npm install`
4. Exécutez `npm start`
5. Développez! 🎉

---

## 📖 Ressources

- Documentation Angular: https://angular.io/docs
- Documentation Firebase: https://firebase.google.com/docs
- TypeScript: https://www.typescriptlang.org/docs

---

**Structure créée le:** 16 janvier 2026
**Version Angular:** 17.x
**Prêt pour le déploiement!** ✅
