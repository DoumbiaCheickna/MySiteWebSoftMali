# SOFTMALI - Guide de Démarrage Rapide

## 🚀 Lancement Immédiat (5 minutes)

### Étape 1 : Ouvrir le site
Double-cliquez sur `index.html` pour ouvrir le site dans votre navigateur.

### Étape 2 : Personnaliser les Informations
Remplacez les informations suivantes dans **TOUS** les fichiers HTML :

#### Contact
- `+223 XX XX XX XX` → Votre numéro de téléphone
- `contact@softmali.com` → Votre email réel
- `support@softmali.com` → Votre email support

#### Logo et Branding
Dans chaque fichier HTML, la ligne du logo :
```html
<span class="logo-icon">💻</span>
```
Vous pouvez garder l'emoji ou le remplacer par une image.

### Étape 3 : Ajouter Vos Images
1. Placez vos images dans le dossier `images/`
2. Ajoutez une photo professionnelle pour la section À propos
3. Ajoutez un favicon dans `assets/favicon.ico`

### Étape 4 : Configurer le Formulaire de Contact

#### Option Facile : Formspree (Gratuit)
1. Allez sur [formspree.io](https://formspree.io)
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Copiez l'URL fournie
5. Dans `contact.html`, modifiez :
```html
<form id="contactForm" action="https://formspree.io/f/VOTRE_ID" method="POST">
```

#### Option Alternative : EmailJS
1. Créez un compte sur [emailjs.com](https://www.emailjs.com)
2. Configurez un service email
3. Créez un template
4. Ajoutez dans `contact.html` avant `</body>` :
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init("VOTRE_PUBLIC_KEY");
</script>
```

## 📝 Personnalisation Rapide

### Changer les Couleurs
Ouvrez `css/style.css` et modifiez (lignes 7-12) :
```css
--primary-color: #2563eb;    /* Votre couleur principale */
--secondary-color: #10b981;  /* Votre couleur secondaire */
--accent-color: #f59e0b;     /* Votre couleur d'accent */
```

### Modifier le Contenu
- **Page d'accueil** : `index.html`
- **Services** : `services.html`
- **À propos** : `about.html`
- **Contact** : `contact.html`

Éditez simplement le texte entre les balises HTML.

## 🌐 Mise en Ligne

### Option 1 : Netlify (Recommandé - Gratuit)
1. Créez un compte sur [netlify.com](https://www.netlify.com)
2. Glissez-déposez le dossier `SiteWeb` complet
3. Votre site est en ligne en 30 secondes !
4. Configurez votre domaine personnalisé

### Option 2 : GitHub Pages (Gratuit)
1. Créez un compte [GitHub](https://github.com)
2. Créez un nouveau repository
3. Uploadez tous les fichiers
4. Settings → Pages → Activez Pages
5. Votre site sera sur `username.github.io/repository`

### Option 3 : Hébergement Classique
1. Achetez un hébergement (Hostinger, OVH, etc.)
2. Uploadez via FTP tous les fichiers
3. Configurez votre domaine

## ✅ Checklist Avant Mise en Ligne

- [ ] Remplacé tous les `+223 XX XX XX XX`
- [ ] Remplacé tous les emails factices
- [ ] Ajouté votre logo
- [ ] Ajouté vos vraies photos
- [ ] Configuré le formulaire de contact
- [ ] Testé tous les liens
- [ ] Testé sur mobile
- [ ] Vérifié l'orthographe
- [ ] Activé HTTPS/SSL

## 🆘 Problèmes Courants

### Le formulaire ne fonctionne pas
➡️ Assurez-vous d'avoir configuré Formspree ou EmailJS (voir Étape 4)

### Les images ne s'affichent pas
➡️ Vérifiez que les images sont bien dans le dossier `images/`

### Le site ne s'affiche pas correctement sur mobile
➡️ Videz le cache de votre navigateur (Ctrl+F5)

### Les animations ne marchent pas
➡️ Vérifiez que le fichier `js/main.js` est bien chargé

## 📞 Besoin d'Aide ?

### Support
- 📧 Email : contact@softmali.com
- 📱 WhatsApp : +223 XX XX XX XX

### Tutoriels Vidéo
- [Comment modifier le texte](lien-vers-video)
- [Comment changer les couleurs](lien-vers-video)
- [Comment mettre en ligne](lien-vers-video)

## 🎯 Prochaines Étapes Recommandées

1. **Semaine 1** : Personnaliser tout le contenu
2. **Semaine 2** : Ajouter vos vrais projets/portfolio
3. **Semaine 3** : Optimiser pour Google (SEO)
4. **Semaine 4** : Lancer une campagne de communication

## 💡 Conseils Pro

1. **Sauvegardez régulièrement** : Faites des copies de votre dossier
2. **Testez avant de publier** : Vérifiez tout en local
3. **Mobile d'abord** : La majorité visitera sur mobile
4. **SEO** : Ajoutez du contenu de qualité régulièrement
5. **Analytics** : Suivez vos visiteurs avec Google Analytics

## 📚 Ressources

- [Modifier les couleurs](https://coolors.co/) - Palette de couleurs
- [Images gratuites](https://unsplash.com/) - Photos professionnelles
- [Icônes](https://fontawesome.com/) - Bibliothèque d'icônes
- [Tester mobile](https://search.google.com/test/mobile-friendly) - Test Google

---

**Félicitations ! Votre site SOFTMALI est prêt ! 🎉**

Pour toute question, n'hésitez pas à nous contacter.
