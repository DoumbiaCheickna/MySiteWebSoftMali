# 🚀 GUIDE DE DÉPLOIEMENT SOFTMALI

## Table des Matières
1. [Préparation](#préparation)
2. [Options de Déploiement](#options-de-déploiement)
3. [Configuration DNS](#configuration-dns)
4. [SSL/HTTPS](#ssl-https)
5. [Post-Déploiement](#post-déploiement)

---

## 📋 Préparation

### Vérifications Avant Déploiement

✅ **Checklist Complète**
- [ ] Toutes les personnalisations effectuées (voir CHECKLIST_PERSONNALISATION.md)
- [ ] Formulaire de contact configuré
- [ ] Images optimisées (< 500KB chacune)
- [ ] Tests effectués sur tous navigateurs
- [ ] Responsive vérifié sur mobile/tablette/desktop
- [ ] Domaine acheté et prêt

### Fichiers à Vérifier
```bash
SiteWeb/
├── *.html (toutes les pages)
├── css/style.css
├── js/main.js
├── images/ (toutes vos images)
├── robots.txt
└── sitemap.xml
```

---

## 🌐 Options de Déploiement

### Option 1 : Netlify (RECOMMANDÉ ⭐)

**Avantages :**
- ✅ Gratuit pour sites statiques
- ✅ HTTPS automatique
- ✅ CDN mondial inclus
- ✅ Déploiement en 30 secondes
- ✅ Domaine personnalisé facile

**Étapes :**

1. **Créer un compte**
   - Allez sur [netlify.com](https://www.netlify.com)
   - Inscription gratuite (email ou GitHub)

2. **Déployer le site**
   - Cliquez sur "Add new site" → "Deploy manually"
   - Glissez-déposez le dossier `SiteWeb` complet
   - Attendez 30 secondes ⏱️
   - Votre site est en ligne ! 🎉

3. **Configurer le domaine**
   - Sites → Settings → Domain management
   - "Add custom domain"
   - Entrez votre domaine (ex: softmali.com)
   - Suivez les instructions DNS

4. **HTTPS (Automatique)**
   - Netlify active automatiquement le SSL
   - Attendre 1-2 minutes pour la propagation

**URL de déploiement :** `https://votre-nom.netlify.app`

---

### Option 2 : Vercel

**Avantages :**
- ✅ Gratuit
- ✅ Performance excellente
- ✅ HTTPS automatique

**Étapes :**

1. Installer Vercel CLI
```bash
npm install -g vercel
```

2. Déployer
```bash
cd SiteWeb
vercel --prod
```

3. Suivre les instructions à l'écran

**URL de déploiement :** `https://softmali.vercel.app`

---

### Option 3 : GitHub Pages

**Avantages :**
- ✅ Gratuit
- ✅ Intégration Git
- ✅ Bon pour portfolio

**Étapes :**

1. **Créer repository GitHub**
   - Allez sur [github.com](https://github.com)
   - New repository : "softmali-website"
   - Public

2. **Uploader les fichiers**
   ```bash
   cd SiteWeb
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/softmali-website.git
   git push -u origin main
   ```

3. **Activer GitHub Pages**
   - Repository → Settings → Pages
   - Source : "main" branch
   - Folder : "/ (root)"
   - Save

**URL de déploiement :** `https://USERNAME.github.io/softmali-website`

---

### Option 4 : Hébergement Classique (cPanel)

**Fournisseurs Recommandés :**
- Hostinger (2-5€/mois)
- OVH (5-10€/mois)
- o2switch (5€/mois - illimité)

**Étapes :**

1. **Acheter hébergement**
   - Plan "Hébergement Web" minimum
   - SSL gratuit inclus (Let's Encrypt)

2. **Accéder au cPanel**
   - Login avec identifiants fournis

3. **Uploader via Gestionnaire de Fichiers**
   - Aller dans `public_html/`
   - Uploader TOUS les fichiers du dossier SiteWeb
   - Ou utiliser FileZilla (FTP)

4. **Configuration FTP (FileZilla)**
   ```
   Hôte : ftp.votre-domaine.com
   Utilisateur : fourni par hébergeur
   Mot de passe : fourni par hébergeur
   Port : 21
   ```

---

## 🔧 Configuration DNS

### Chez Votre Registrar (GoDaddy, Namecheap, etc.)

#### Pour Netlify/Vercel
```
Type    Nom     Valeur
A       @       IP fournie par plateforme
CNAME   www     votre-site.netlify.app
```

#### Pour Hébergement Classique
```
Type    Nom     Valeur
A       @       IP de votre hébergeur
CNAME   www     votre-domaine.com
```

**⏱️ Temps de propagation :** 24-48 heures maximum

### Vérifier la Propagation
- [whatsmydns.net](https://www.whatsmydns.net)
- Entrez votre domaine
- Vérifiez que les DNS sont mis à jour mondialement

---

## 🔒 SSL/HTTPS

### Netlify/Vercel
✅ **Automatique** - Rien à faire !

### GitHub Pages
✅ **Automatique** - Cochez "Enforce HTTPS" dans Settings

### Hébergement Classique
1. cPanel → SSL/TLS Status
2. "Run AutoSSL"
3. Attendre 5 minutes
4. Vérifier avec `https://votre-domaine.com`

### Forcer HTTPS
Créez `.htaccess` à la racine :
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 📊 Post-Déploiement

### 1. Google Search Console

**Étapes :**
1. Allez sur [search.google.com/search-console](https://search.google.com/search-console)
2. "Ajouter une propriété"
3. Entrez votre domaine
4. Vérifiez la propriété (méthode HTML recommandée)
5. Soumettez votre sitemap : `https://votre-domaine.com/sitemap.xml`

### 2. Google Analytics

**Installation :**
1. Créez un compte sur [analytics.google.com](https://analytics.google.com)
2. Créez une propriété
3. Copiez le code de suivi
4. Ajoutez dans `<head>` de toutes les pages :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Google My Business

1. Allez sur [business.google.com](https://business.google.com)
2. "Gérer mon profil"
3. Ajoutez votre entreprise SOFTMALI
4. Vérification par téléphone ou courrier
5. Complétez le profil (photos, horaires, services)

### 4. Monitoring

**UptimeRobot (Gratuit)**
- [uptimerobot.com](https://uptimerobot.com)
- Surveille si votre site est en ligne
- Alerte par email si downtime

**PageSpeed Insights**
- [pagespeed.web.dev](https://pagespeed.web.dev)
- Testez votre site
- Objectif : Score > 90

### 5. Sauvegardes

**Automatiques (Recommandé) :**
- Netlify : Backups automatiques
- cPanel : Configurer cron jobs

**Manuelles :**
- Télécharger tout le site via FTP
- Fréquence : 1x par semaine minimum

---

## 🐛 Dépannage

### Site pas accessible après 48h
- Vérifier configuration DNS
- Vider cache navigateur (Ctrl+F5)
- Tester sur [isitdownrightnow.com](https://isitdownrightnow.com)

### HTTPS ne fonctionne pas
- Attendre 24h supplémentaires
- Vérifier certificat SSL dans cPanel
- Contacter support hébergeur

### Formulaire ne reçoit pas d'emails
- Vérifier configuration Formspree/EmailJS
- Tester avec votre propre email
- Vérifier dossier spam

### Images ne s'affichent pas
- Vérifier chemins : `images/nom.jpg` (pas `Images/`)
- Vérifier extensions : `.jpg` pas `.JPG`
- Reuploader les images

---

## 📱 Réseaux Sociaux

### Configuration Complète

1. **LinkedIn Company Page**
   - Créer page entreprise SOFTMALI
   - Logo, bannière, description
   - Poster régulièrement

2. **Facebook Business Page**
   - Créer page professionnelle
   - Compléter tous les champs
   - Lier site web

3. **Twitter/X**
   - Compte professionnel
   - Bio claire avec lien site

4. **Instagram Business**
   - Portfolio visuel projets
   - Stories régulières

### Open Graph
Vérifiez l'aperçu sur :
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## ✅ Checklist Post-Lancement

- [ ] Site accessible via domaine principal
- [ ] HTTPS activé et fonctionnel
- [ ] Google Search Console configuré
- [ ] Google Analytics installé
- [ ] Sitemap soumis
- [ ] Google My Business créé
- [ ] Comptes réseaux sociaux créés
- [ ] UptimeRobot configuré
- [ ] Email professionnel configuré
- [ ] Sauvegarde effectuée
- [ ] PageSpeed testé (score > 85)
- [ ] Formulaire testé et fonctionnel

---

## 🎉 Félicitations !

Votre site SOFTMALI est maintenant en ligne !

### Prochaines Étapes

**Semaine 1 :**
- Annonce sur réseaux sociaux
- Email à contacts/clients
- Ajouter site sur signature email

**Semaine 2-4 :**
- Publier 2-3 articles blog
- Collecter premiers témoignages
- Optimiser selon analytics

**Mois 2-3 :**
- Campagne SEO locale
- Backlinks
- Publicités ciblées (Facebook Ads)

---

## 📞 Support

**Besoin d'aide pour le déploiement ?**

📧 Email : contact@softmali.com  
📱 WhatsApp : +223 XX XX XX XX  
💬 Support technique disponible

---

**Dernière mise à jour :** 16 Janvier 2026  
**Version :** 1.0

🚀 **Bon lancement !**
