# Configuration SEO - SOFTMALI

## Meta Tags Standards

### Page d'Accueil
```html
<title>SOFTMALI - Développement Logiciel & Solutions IT | Mali</title>
<meta name="description" content="Expert en développement logiciel, création de sites web, audit SI, sécurité informatique et DevOps. Solutions sur mesure pour entreprises africaines.">
<meta name="keywords" content="développement logiciel Mali, création site web Bamako, audit système d'information, sécurité informatique entreprise, DevOps, cloud computing, application mobile, ERP, CRM">
```

### Page Services
```html
<title>Nos Services - SOFTMALI | Solutions IT sur Mesure</title>
<meta name="description" content="Services SOFTMALI : Développement logiciel, création sites web, audit SI, sécurité informatique, DevOps, hébergement. Solutions sur mesure pour entreprises.">
```

### Page À Propos
```html
<title>À Propos - SOFTMALI | Notre Histoire & Valeurs</title>
<meta name="description" content="Découvrez SOFTMALI et son fondateur Cheickna Doumbia. Notre histoire, nos valeurs et notre vision pour la transformation numérique en Afrique.">
```

### Page Contact
```html
<title>Contact - SOFTMALI | Devis Gratuit & Consultation</title>
<meta name="description" content="Contactez SOFTMALI pour discuter de votre projet. Devis gratuit, consultation personnalisée. Bamako, Mali.">
```

## Open Graph (Réseaux Sociaux)

Ajoutez dans le `<head>` de chaque page :

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.softmali.com/">
<meta property="og:title" content="SOFTMALI - Solutions IT sur Mesure">
<meta property="og:description" content="Expert en développement logiciel et solutions IT en Afrique">
<meta property="og:image" content="https://www.softmali.com/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.softmali.com/">
<meta property="twitter:title" content="SOFTMALI - Solutions IT sur Mesure">
<meta property="twitter:description" content="Expert en développement logiciel et solutions IT en Afrique">
<meta property="twitter:image" content="https://www.softmali.com/images/twitter-image.jpg">
```

## Structured Data (JSON-LD)

### Organization
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SOFTMALI",
  "url": "https://www.softmali.com",
  "logo": "https://www.softmali.com/images/logo.png",
  "description": "Expert en développement logiciel et solutions IT sur mesure",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bamako",
    "addressCountry": "ML"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+223-XX-XX-XX-XX",
    "contactType": "customer service",
    "email": "contact@softmali.com",
    "availableLanguage": ["fr", "en"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/softmali",
    "https://twitter.com/softmali",
    "https://www.facebook.com/softmali"
  ]
}
</script>
```

### Local Business
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SOFTMALI",
  "image": "https://www.softmali.com/images/logo.png",
  "@id": "https://www.softmali.com",
  "url": "https://www.softmali.com",
  "telephone": "+223-XX-XX-XX-XX",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Votre adresse complète",
    "addressLocality": "Bamako",
    "addressCountry": "ML"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.6392,
    "longitude": -8.0029
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ]
}
</script>
```

## Fichier robots.txt

Créez `robots.txt` à la racine :

```txt
User-agent: *
Allow: /

Sitemap: https://www.softmali.com/sitemap.xml
```

## Fichier sitemap.xml

Créez `sitemap.xml` à la racine :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.softmali.com/</loc>
    <lastmod>2026-01-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.softmali.com/services.html</loc>
    <lastmod>2026-01-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.softmali.com/about.html</loc>
    <lastmod>2026-01-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.softmali.com/contact.html</loc>
    <lastmod>2026-01-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

## Mots-Clés Ciblés

### Primaires
- développement logiciel Mali
- création site web Bamako
- audit système d'information
- sécurité informatique entreprise
- développeur Mali
- agence web Bamako

### Secondaires
- application web sur mesure
- développeur full stack Mali
- consultant IT Bamako
- hébergement site web Mali
- maintenance site web
- DevOps Mali

### Longue Traîne
- "comment créer un site web professionnel au Mali"
- "meilleure agence développement Bamako"
- "audit sécurité informatique Mali"
- "développement application mobile Bamako"

## Actions SEO Recommandées

### Immédiatement
1. Créer Google My Business
2. Soumettre sitemap à Google Search Console
3. Installer Google Analytics
4. Vérifier meta descriptions
5. Optimiser images (alt text)

### Court Terme (1 mois)
1. Créer du contenu blog
2. Obtenir backlinks locaux
3. Optimiser vitesse site
4. Mobile-first testing
5. Réseaux sociaux actifs

### Moyen Terme (3 mois)
1. Guest posting
2. Partenariats locaux
3. Témoignages clients
4. Études de cas
5. Vidéos YouTube

## Outils SEO Gratuits

1. **Google Search Console** : Suivi indexation
2. **Google Analytics** : Analyse trafic
3. **PageSpeed Insights** : Performance
4. **Ubersuggest** : Mots-clés
5. **Answer The Public** : Questions

## Checklist SEO Technique

- [ ] HTTPS activé
- [ ] Sitemap.xml créé
- [ ] Robots.txt configuré
- [ ] Meta descriptions uniques
- [ ] Balises H1 optimisées
- [ ] Alt text sur images
- [ ] URLs propres
- [ ] Temps chargement < 3s
- [ ] Mobile responsive
- [ ] Structured data
- [ ] Social meta tags
- [ ] Canonicals
- [ ] 404 page

## Suivi Performance

### KPIs à Suivre
- Trafic organique
- Position mots-clés
- Taux de rebond
- Temps sur site
- Pages par session
- Conversions formulaire

### Objectifs 6 Mois
- 1000 visiteurs/mois
- Position Top 3 pour "développement logiciel Mali"
- 50 demandes de devis/mois
- Domain Authority > 20

---

Mise à jour : Janvier 2026
