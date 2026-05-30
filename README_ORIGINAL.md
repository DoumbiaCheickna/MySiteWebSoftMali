# SOFTMALI - Site Web Professionnel

## 🎯 Description

Site web professionnel pour SOFTMALI, entreprise spécialisée dans le développement logiciel et les solutions IT sur mesure en Afrique.

## 🌟 Fonctionnalités

### Pages Principales
- **Accueil** : Hero section, expertises, chiffres clés, processus, CTA
- **Services** : Description détaillée de tous les services avec tarifs
- **À propos** : Histoire, valeurs, équipe, fondateur
- **Contact** : Formulaire intelligent, coordonnées, calculateur de devis

### Fonctionnalités Avancées
- ✅ Design responsive (mobile-first)
- ✅ Animations et transitions fluides
- ✅ Formulaire de contact intelligent
- ✅ Calculateur de devis interactif
- ✅ Compteurs animés
- ✅ Navigation smooth scroll
- ✅ Optimisation SEO
- ✅ Performance optimale (< 3s load time)

## 📁 Structure du Projet

```
SiteWeb/
├── index.html              # Page d'accueil
├── services.html           # Page services
├── about.html             # Page à propos
├── contact.html           # Page contact
├── css/
│   └── style.css          # Styles CSS principaux
├── js/
│   └── main.js            # JavaScript interactif
├── images/                # Images du site
└── assets/                # Ressources additionnelles
```

## 🚀 Installation & Déploiement

### En Local
1. Cloner ou télécharger le projet
2. Ouvrir `index.html` dans un navigateur
3. Ou utiliser un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
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
