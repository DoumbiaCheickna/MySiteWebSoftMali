# 🚀 SOFTMALI - Application Angular

> **⚠️ IMPORTANT:** Ce projet a été transformé en application Angular moderne!

## 🎯 Description

Application web professionnelle pour SOFTMALI, entreprise spécialisée dans le développement logiciel et les solutions IT sur mesure en Afrique.

**Technologie:** Angular 17 + Firebase + TypeScript

---

## 📖 DOCUMENTATION

### 🌟 Commencez ici:
1. **[COMMENCER_ICI.md](COMMENCER_ICI.md)** ⭐ - Démarrage rapide
2. **[PROJET_ANGULAR.md](PROJET_ANGULAR.md)** ⭐ - Guide complet

### Documentation détaillée:
- [STRUCTURE_PROJET.md](STRUCTURE_PROJET.md) - Architecture du projet
- [README_ANGULAR.md](README_ANGULAR.md) - Documentation technique
- [GUIDE_DEPLOIEMENT_ANGULAR.md](GUIDE_DEPLOIEMENT_ANGULAR.md) - Guide de déploiement

---

## 🚀 Démarrage Rapide

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
```

L'application sera accessible sur http://localhost:4200

### Scripts PowerShell (Windows)

```powershell
# Démarrage avec script
.\start.ps1

# Déploiement avec script
.\deploy.ps1
```

---

## 🌟 Fonctionnalités

### Pages Principales
- **Accueil** : Hero section, expertises, chiffres clés, processus, CTA
- **Services** : Description détaillée de tous les services avec tarifs
- **À propos** : Histoire, valeurs, équipe, fondateur
- **Contact** : Formulaire intelligent avec Firebase, calculateur de devis

### Fonctionnalités Angular
- ✅ Routing avec lazy loading
- ✅ Composants réutilisables
- ✅ Reactive Forms avec validation
- ✅ Intégration Firebase (Firestore + Analytics)
- ✅ Design responsive (mobile-first)
- ✅ Animations fluides
- ✅ Optimisation SEO
- ✅ Build optimisé pour production

---

## 📁 Structure du Projet

```
SiteWeb/
├── src/                    # Code source Angular
│   ├── app/
│   │   ├── pages/         # Pages (home, services, about, contact)
│   │   ├── shared/        # Composants partagés (navbar, footer)
│   │   └── services/      # Services Angular (Firebase)
│   ├── assets/            # Images et ressources
│   ├── environments/      # Configuration Firebase
│   └── styles.css        # Styles globaux
├── angular.json           # Configuration Angular
├── package.json          # Dépendances
├── firebase.json         # Configuration Firebase Hosting
└── Documentation/        # Guides complets
```

Voir [STRUCTURE_PROJET.md](STRUCTURE_PROJET.md) pour l'arborescence complète.

---

## 🔥 Configuration Firebase

### 1. Mettre à jour les clés

Éditez `src/environments/environment.ts` et `environment.prod.ts`:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "VOTRE_API_KEY",
    authDomain: "VOTRE_PROJECT.firebaseapp.com",
    projectId: "VOTRE_PROJECT_ID",
    // ...
  }
};
```

### 2. Mettre à jour le Project ID

Éditez `.firebaserc`:

```json
{
  "projects": {
    "default": "votre-project-id"
  }
}
```

### 3. Créer les collections Firestore

Dans la console Firebase:
- Collection `contacts` - Messages de contact
- Collection `quotes` - Demandes de devis

---

## 📦 Déploiement

### Firebase Hosting (Recommandé)

```bash
# Build de production
npm run build:prod

# Connexion à Firebase (première fois)
firebase login

# Déploiement
firebase deploy --only hosting
```

### Ou avec le script PowerShell:

```powershell
.\deploy.ps1
```

### Autres plateformes

- **Netlify**: `netlify deploy --prod --dir=dist/softmali`
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Voir [GUIDE_DEPLOIEMENT_ANGULAR.md](GUIDE_DEPLOIEMENT_ANGULAR.md)

---

## 📝 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | Serveur de développement (port 4200) |
| `npm run build` | Build de développement |
| `npm run build:prod` | Build de production optimisé |
| `npm run deploy` | Déployer sur Firebase |
| `npm test` | Lancer les tests |

---

## ✅ Checklist de Déploiement

- [ ] `npm install` ✓
- [ ] `npm start` fonctionne ✓
- [ ] Clés Firebase configurées dans `src/environments/`
- [ ] Project ID mis à jour dans `.firebaserc`
- [ ] Collections Firestore créées
- [ ] Règles Firestore configurées
- [ ] `npm run build:prod` réussi
- [ ] `firebase login` effectué
- [ ] `firebase deploy` réussi
- [ ] Site testé en ligne
- [ ] Formulaires fonctionnels

---

## 🔍 Développement

### Mode développement

```bash
npm start
```

Le serveur démarre sur http://localhost:4200 avec hot-reload.

### Tests

```bash
npm test
```

### Build local

```bash
npm run build:prod
```

Fichiers générés dans `dist/softmali/`

---

## 🎨 Personnalisation

### Contenu

- Pages: `src/app/pages/`
- Navigation: `src/app/shared/components/navbar/`
- Footer: `src/app/shared/components/footer/`

### Styles

- Styles globaux: `src/styles.css`
- Variables CSS: Modifier les `:root` dans `styles.css`

### Routes

- Configuration: `src/app/app-routing.module.ts`

---

## 📚 Documentation Complète

Pour toutes les informations détaillées:

1. **[COMMENCER_ICI.md](COMMENCER_ICI.md)** - Instructions de démarrage rapide
2. **[PROJET_ANGULAR.md](PROJET_ANGULAR.md)** - Guide complet du projet
3. **[STRUCTURE_PROJET.md](STRUCTURE_PROJET.md)** - Architecture détaillée
4. **[README_ANGULAR.md](README_ANGULAR.md)** - Documentation technique
5. **[GUIDE_DEPLOIEMENT_ANGULAR.md](GUIDE_DEPLOIEMENT_ANGULAR.md)** - Déploiement pas à pas

---

## 🐛 Résolution de Problèmes

### Erreur d'installation

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erreur de build

```bash
rm -rf .angular dist
npm run build:prod
```

### Port déjà utilisé

```bash
ng serve --port 4201
```

Voir [PROJET_ANGULAR.md](PROJET_ANGULAR.md) pour plus de solutions.

---

## 🆘 Support

- **Documentation**: Consultez les fichiers `.md` dans ce dossier
- **Angular**: https://angular.io/docs
- **Firebase**: https://firebase.google.com/docs
- **Email**: contact@softmali.com

---

## 📄 Licence

© 2026 SOFTMALI. Tous droits réservés.

---

## 🎊 Prochaines Étapes

1. ✅ Installation: `npm install`
2. ✅ Démarrage: `npm start`
3. ⚙️ Configuration Firebase (voir [PROJET_ANGULAR.md](PROJET_ANGULAR.md))
4. 🚀 Déploiement (voir [GUIDE_DEPLOIEMENT_ANGULAR.md](GUIDE_DEPLOIEMENT_ANGULAR.md))

**Bon développement! 🚀**

   
   # Avec Node.js (http-server)
   npx http-server
   ```

### Déploiement Production

#### Option 1 : Hébergement Classique
- Uploader tous les fichiers via FTP
- Configurer le domaine
- Activer SSL/HTTPS

#### Option 2 : Netlify (Recommandé)
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Déployer
netlify deploy --prod
```

#### Option 3 : Vercel
```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel --prod
```

#### Option 4 : GitHub Pages
1. Push sur GitHub
2. Settings → Pages
3. Sélectionner la branche main
4. Enregistrer

## 🎨 Personnalisation

### Couleurs (dans `css/style.css`)
```css
:root {
    --primary-color: #2563eb;      /* Bleu principal */
    --secondary-color: #10b981;    /* Vert secondaire */
    --accent-color: #f59e0b;       /* Orange accent */
}
```

### Contenu
- Modifier le texte directement dans les fichiers HTML
- Remplacer les images dans le dossier `images/`
- Ajuster les informations de contact

### Logo
Remplacer l'emoji 💻 dans la classe `.logo-icon` par votre propre logo :
```html
<img src="images/logo.png" alt="SOFTMALI Logo">
```

## 📧 Configuration du Formulaire de Contact

### Option 1 : Formspree (Simple)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2 : EmailJS (Gratuit)
```javascript
// Dans js/main.js
emailjs.send("service_id", "template_id", formData)
    .then(() => console.log("Envoyé !"));
```

### Option 3 : Backend personnalisé
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 🔧 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec Grid & Flexbox
- **JavaScript Vanilla** : Interactivité sans dépendances
- **Font Awesome** : Icônes
- **Google Fonts (Inter)** : Typographie moderne

## 📱 Responsive Design

Le site est optimisé pour :
- 📱 Mobile : < 768px
- 📱 Tablette : 768px - 1024px
- 💻 Desktop : > 1024px

## ⚡ Optimisation Performance

- Images optimisées (WebP recommandé)
- CSS minifié en production
- JavaScript chargé de manière asynchrone
- Lazy loading des images
- Cache browser activé

### Checklist Performance
```bash
# Minifier CSS
npx clean-css-cli -o css/style.min.css css/style.css

# Minifier JavaScript
npx terser js/main.js -o js/main.min.js

# Optimiser images
npx imagemin images/* --out-dir=images/optimized
```

## 🔒 Sécurité

- SSL/HTTPS obligatoire
- Protection XSS dans les formulaires
- Validation côté client et serveur
- Headers de sécurité recommandés :
  ```
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  ```

## 📊 Analytics

### Google Analytics 4
```html
<!-- Dans <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Hotjar (Heatmaps)
```html
<script>
    (function(h,o,t,j,a,r){...})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## 🐛 Débogage

### Console JavaScript
```javascript
// Activer le mode debug
localStorage.setItem('debug', 'true');
```

### Test de formulaire
Le formulaire utilise actuellement une simulation. En production, connectez-le à votre backend.

## 📞 Support

Pour toute question ou assistance :
- 📧 Email : contact@softmali.com
- 📱 Téléphone : +223 XX XX XX XX
- 🌐 Site : www.softmali.com

## 📝 Licence

© 2026 SOFTMALI. Tous droits réservés.

## 🚀 Prochaines Étapes

### Phase 1 (Semaine 1-2)
- [ ] Ajouter vraies images et logo
- [ ] Configurer domaine personnalisé
- [ ] Connecter formulaire à backend
- [ ] Tester sur tous navigateurs

### Phase 2 (Semaine 3-4)
- [ ] Ajouter section portfolio/projets
- [ ] Intégrer blog
- [ ] Ajouter témoignages clients
- [ ] Implémenter chat en direct

### Phase 3 (Mois 2)
- [ ] Optimiser SEO avancé
- [ ] Ajouter version multilingue
- [ ] Intégrer système de réservation
- [ ] Analytics avancés

## 📚 Ressources Utiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

## 🎓 Formation & Documentation

Pour apprendre à maintenir et améliorer ce site :
1. HTML/CSS : [FreeCodeCamp](https://www.freecodecamp.org/)
2. JavaScript : [JavaScript.info](https://javascript.info/)
3. SEO : [Google SEO Guide](https://developers.google.com/search/docs)

---

**Développé avec ❤️ par SOFTMALI**
