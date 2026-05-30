# 📋 CHECKLIST DE PERSONNALISATION SOFTMALI

## ✅ URGENT - À Faire IMMÉDIATEMENT

### 1. Informations de Contact (DANS TOUS LES FICHIERS)
Remplacez dans **index.html, services.html, about.html, contact.html** :

- [ ] `+223 XX XX XX XX` → Votre vrai numéro
- [ ] `contact@softmali.com` → Votre email principal
- [ ] `support@softmali.com` → Votre email support
- [ ] `Bamako, Mali` → Votre adresse complète

**Fichiers concernés :**
- index.html (footer + contact section)
- services.html (footer)
- about.html (footer + contact section)
- contact.html (partout)

### 2. Logo
- [ ] Créer votre logo (format PNG avec fond transparent)
- [ ] Le placer dans `images/logo.png`
- [ ] Remplacer `<span class="logo-icon">💻</span>` par `<img src="images/logo.png" alt="SOFTMALI">`

### 3. Favicon
- [ ] Créer favicon (16x16, 32x32, 180x180)
- [ ] Le placer dans `assets/favicon.ico`
- [ ] Vérifier qu'il s'affiche dans l'onglet du navigateur

### 4. Formulaire de Contact
Choisir une option :

**Option A : Formspree (Recommandé - 5 min)**
1. [ ] Créer compte sur formspree.io
2. [ ] Créer un formulaire
3. [ ] Copier l'URL
4. [ ] Dans contact.html, modifier ligne ~50 :
   ```html
   <form id="contactForm" action="https://formspree.io/f/VOTRE_ID" method="POST">
   ```

**Option B : EmailJS (Gratuit)**
1. [ ] Créer compte sur emailjs.com
2. [ ] Configurer service email
3. [ ] Ajouter code dans contact.html

## 🎨 IMPORTANT - Personnalisation Visuelle

### 5. Couleurs de la Marque
Dans `css/style.css` (lignes 7-12) :

```css
--primary-color: #2563eb;    /* 🎨 Votre couleur principale */
--secondary-color: #10b981;  /* 🎨 Votre couleur secondaire */
--accent-color: #f59e0b;     /* 🎨 Votre couleur accent */
```

### 6. Images à Ajouter

**Images Obligatoires :**
- [ ] `images/logo.png` - Logo principal (500x500px)
- [ ] `images/og-image.jpg` - Image réseaux sociaux (1200x630px)
- [ ] `images/founder.jpg` - Photo du fondateur (800x800px)

**Images Optionnelles :**
- [ ] `images/hero-bg.jpg` - Background hero section
- [ ] `images/team/` - Photos équipe
- [ ] `images/projects/` - Captures projets réalisés

### 7. Photos d'Équipe (about.html)
- [ ] Remplacer les placeholders par vraies photos
- [ ] Section "Notre Équipe" (lignes ~250-300)

## 📝 CONTENU - Textes à Personnaliser

### 8. Page d'Accueil (index.html)

**Hero Section :**
- [ ] Vérifier/adapter le titre principal
- [ ] Personnaliser le sous-titre
- [ ] Ajuster les statistiques (8+ années, 50+ projets, etc.)

**Section Expertises :**
- [ ] Adapter les services listés
- [ ] Modifier les descriptions si nécessaire

### 9. Page Services (services.html)

**Tarifs :**
- [ ] Ajuster les prix (lignes ~150-250)
- [ ] Modifier les forfaits d'hébergement (lignes ~400-500)

**Services Offerts :**
- [ ] Ajouter/retirer des services
- [ ] Personnaliser les descriptions

### 10. Page À Propos (about.html)

**Fondateur :**
- [ ] Vérifier informations Cheickna Doumbia
- [ ] Adapter les certifications listées (lignes ~80-90)
- [ ] Personnaliser la citation (lignes ~70-75)

**Notre Histoire :**
- [ ] Adapter la timeline selon votre vraie histoire
- [ ] Modifier les dates et événements

**Équipe :**
- [ ] Ajouter vos vrais membres d'équipe
- [ ] Photos et descriptions (lignes ~250-300)

### 11. Page Contact (contact.html)

**Horaires :**
- [ ] Vérifier les horaires d'ouverture (lignes ~200-220)

**Carte :**
- [ ] Intégrer Google Maps (remplacer placeholder ligne ~180)

## 🌐 SEO & RÉSEAUX SOCIAUX

### 12. Réseaux Sociaux
Remplacer tous les `href="#"` par vos vrais liens :

- [ ] LinkedIn
- [ ] Facebook
- [ ] Twitter
- [ ] GitHub
- [ ] WhatsApp

**Fichiers concernés :** Tous (footer)

### 13. Meta Descriptions
Vérifier et personnaliser si besoin :
- [ ] index.html (ligne 6)
- [ ] services.html (ligne 6)
- [ ] about.html (ligne 6)
- [ ] contact.html (ligne 6)

### 14. Sitemap
- [ ] Modifier `sitemap.xml` avec votre vrai domaine
- [ ] Remplacer `https://www.softmali.com/` par votre domaine

## 🚀 AVANT LA MISE EN LIGNE

### 15. Tests Fonctionnels
- [ ] Tester tous les liens de navigation
- [ ] Vérifier formulaire de contact
- [ ] Tester calculateur de devis
- [ ] Vérifier menu mobile
- [ ] Tester sur Chrome, Firefox, Safari

### 16. Tests Responsive
- [ ] iPhone (< 375px)
- [ ] Android (< 768px)
- [ ] Tablette (768px - 1024px)
- [ ] Desktop (> 1024px)

### 17. Performance
- [ ] Compresser toutes les images (TinyPNG)
- [ ] Vérifier vitesse avec PageSpeed Insights
- [ ] Objectif : < 3 secondes de chargement

### 18. SEO Basique
- [ ] Créer compte Google Search Console
- [ ] Soumettre sitemap
- [ ] Installer Google Analytics
- [ ] Vérifier robots.txt

### 19. Sécurité
- [ ] Activer HTTPS/SSL (obligatoire)
- [ ] Tester certificat SSL
- [ ] Vérifier liens externes (noopener noreferrer)

### 20. Contenu
- [ ] Relire TOUTES les pages
- [ ] Corriger fautes d'orthographe
- [ ] Vérifier cohérence des informations
- [ ] Supprimer le texte "Lorem ipsum" (si présent)

## 📦 APRÈS LA MISE EN LIGNE

### 21. Configuration DNS
- [ ] Pointer domaine vers hébergement
- [ ] Configurer sous-domaines (www, mail)
- [ ] Attendre propagation DNS (24-48h)

### 22. Email Professionnel
- [ ] Configurer email avec domaine (@softmali.com)
- [ ] Créer signature email
- [ ] Tester réception/envoi

### 23. Monitoring
- [ ] Installer Google Analytics
- [ ] Configurer Google Search Console
- [ ] Uptime monitoring (UptimeRobot)

### 24. Marketing
- [ ] Créer Google My Business
- [ ] Annoncer sur réseaux sociaux
- [ ] Email aux contacts
- [ ] Carte de visite mise à jour

## 🎯 OPTIONNEL - Améliorations Futures

### 25. Blog (Recommandé)
- [ ] Créer section blog
- [ ] Publier 1 article/semaine minimum
- [ ] Optimiser articles pour SEO

### 26. Portfolio
- [ ] Ajouter page portfolio
- [ ] Présenter projets réalisés
- [ ] Études de cas détaillées

### 27. Témoignages
- [ ] Collecter témoignages clients
- [ ] Ajouter section témoignages
- [ ] Vidéos si possible

### 28. Chat en Direct
- [ ] Intégrer Tawk.to ou Crisp
- [ ] Configurer réponses automatiques
- [ ] Former équipe support

### 29. Multilingue
- [ ] Version anglaise
- [ ] Switcher de langue
- [ ] Adapter contenus

### 30. Analytics Avancés
- [ ] Heatmaps (Hotjar)
- [ ] A/B testing
- [ ] Conversion tracking

---

## 📊 PROGRESSION

**Minimum Vital (1-4) :** ☐☐☐☐  
**Important (5-11) :** ☐☐☐☐☐☐☐  
**SEO (12-14) :** ☐☐☐  
**Tests (15-20) :** ☐☐☐☐☐☐  
**Post-Lancement (21-24) :** ☐☐☐☐  

---

## 🆘 EN CAS DE PROBLÈME

**Support Technique**
- 📧 Email : contact@softmali.com
- 📱 WhatsApp : +223 XX XX XX XX

**Ressources**
- [Documentation complète](README.md)
- [Guide démarrage rapide](GUIDE_DEMARRAGE.md)
- [Configuration SEO](SEO_CONFIG.md)

---

**Date de création :** 16 Janvier 2026  
**Dernière mise à jour :** 16 Janvier 2026

Cochez chaque item au fur et à mesure ! 
Bon courage ! 💪
