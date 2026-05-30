# 🔥 Guide de Configuration Firebase

## 📋 Table des Matières
1. [Créer un Projet Firebase](#1-créer-un-projet-firebase)
2. [Configurer Firestore](#2-configurer-firestore)
3. [Activer Analytics](#3-activer-analytics)
4. [Configurer les Règles de Sécurité](#4-configurer-les-règles-de-sécurité)
5. [Intégrer Firebase au Site](#5-intégrer-firebase-au-site)
6. [Tester l'Intégration](#6-tester-lintégration)
7. [Consulter les Données](#7-consulter-les-données)

---

## 1. Créer un Projet Firebase

### Étape 1 : Créer un compte Google
- Accédez à [Firebase Console](https://console.firebase.google.com/)
- Connectez-vous avec votre compte Google (ou créez-en un)

### Étape 2 : Créer un nouveau projet
1. Cliquez sur **"Ajouter un projet"**
2. Nom du projet : `softmali-website` (ou votre choix)
3. **Désactiver** Google Analytics si vous ne souhaitez pas l'utiliser (optionnel)
4. Cliquez sur **"Créer un projet"**

### Étape 3 : Ajouter une application Web
1. Dans la console Firebase, cliquez sur l'icône **Web** `</>`
2. Nom de l'application : `SOFTMALI Website`
3. **Cochez** "Configurer Firebase Hosting" (optionnel)
4. Cliquez sur **"Enregistrer l'application"**

### Étape 4 : Récupérer les clés de configuration
Vous obtiendrez un objet `firebaseConfig` qui ressemble à :

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyB-abc123def456ghi789jkl012mno345pqr",
  authDomain: "softmali-website.firebaseapp.com",
  projectId: "softmali-website",
  storageBucket: "softmali-website.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789jkl",
  measurementId: "G-ABCDEF1234"
};
```

---

## 2. Configurer Firestore

### Étape 1 : Activer Firestore Database
1. Dans le menu latéral, cliquez sur **"Firestore Database"**
2. Cliquez sur **"Créer une base de données"**
3. Mode de sécurité : Sélectionnez **"Démarrer en mode test"**
   - ⚠️ **Temporaire uniquement** : Les règles seront modifiées à l'étape 4
4. Localisation : Choisissez **"eur3 (europe-west)"** ou la plus proche
5. Cliquez sur **"Activer"**

### Étape 2 : Créer les collections
Firebase créera automatiquement les collections lors du premier ajout. Les collections utilisées sont :
- `contacts` : Messages du formulaire de contact
- `devis` : Demandes de devis du calculateur

---

## 3. Activer Analytics

### Étape 1 : Activer Google Analytics (optionnel)
1. Dans le menu, cliquez sur **"Analytics"**
2. Cliquez sur **"Activer Google Analytics"**
3. Sélectionnez ou créez un compte Analytics
4. Acceptez les conditions

### Étape 2 : Vérifier l'intégration
- Les événements seront automatiquement trackés :
  - `page_view` : Visites de pages
  - `contact_form_submit` : Soumissions de formulaire
  - `quote_request` : Demandes de devis

---

## 4. Configurer les Règles de Sécurité

### Étape 1 : Ouvrir les règles Firestore
1. Allez dans **"Firestore Database"**
2. Cliquez sur l'onglet **"Règles"**

### Étape 2 : Copier ces règles de sécurité

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Collection contacts : Lecture interdite, écriture autorisée
    match /contacts/{document=**} {
      // Autoriser uniquement la création de nouveaux documents
      allow create: if request.auth == null;
      // Interdire la lecture et modification publique
      allow read, update, delete: if false;
    }
    
    // Collection devis : Lecture interdite, écriture autorisée
    match /devis/{document=**} {
      // Autoriser uniquement la création de nouveaux documents
      allow create: if request.auth == null;
      // Interdire la lecture et modification publique
      allow read, update, delete: if false;
    }
    
    // Toutes les autres collections : Interdites
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### Étape 3 : Publier les règles
- Cliquez sur **"Publier"**
- ✅ Vos données sont maintenant sécurisées

### 📝 Explication des règles
- **Écriture publique** : N'importe qui peut créer un document (pour formulaire)
- **Lecture interdite** : Seul l'admin Firebase peut lire les données
- **Modification interdite** : Seul l'admin peut modifier/supprimer

---

## 5. Intégrer Firebase au Site

### Étape 1 : Copier vos clés de configuration
Ouvrez le fichier `js/firebase-config.js` et remplacez les valeurs :

```javascript
const firebaseConfig = {
    apiKey: "VOTRE_VRAIE_CLE_API",              // ⬅️ Remplacez ici
    authDomain: "softmali-xxxxx.firebaseapp.com", // ⬅️ Remplacez ici
    projectId: "softmali-xxxxx",                  // ⬅️ Remplacez ici
    storageBucket: "softmali-xxxxx.appspot.com",  // ⬅️ Remplacez ici
    messagingSenderId: "123456789012",             // ⬅️ Remplacez ici
    appId: "1:123456789012:web:abcdef123456",     // ⬅️ Remplacez ici
    measurementId: "G-XXXXXXXXXX"                  // ⬅️ Remplacez ici
};
```

### Étape 2 : Vérifier les fichiers
Assurez-vous que ces fichiers existent :
- ✅ `js/firebase-config.js` (votre configuration)
- ✅ `js/main.js` (logique du formulaire)
- ✅ Les pages HTML incluent les scripts Firebase

### Étape 3 : Structure des scripts dans HTML
Toutes les pages doivent inclure (déjà fait) :

```html
<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics-compat.js"></script>

<!-- Firebase Configuration -->
<script src="js/firebase-config.js"></script>

<!-- JavaScript -->
<script src="js/main.js"></script>
```

---

## 6. Tester l'Intégration

### Test 1 : Ouvrir la console navigateur
1. Ouvrez votre site (`index.html`)
2. Appuyez sur **F12** pour ouvrir les outils développeur
3. Allez dans l'onglet **Console**
4. Vous devriez voir : `✅ Firebase initialisé avec succès`

### Test 2 : Tester le formulaire de contact
1. Allez sur la page **Contact** (`contact.html`)
2. Remplissez le formulaire avec des données de test
3. Cliquez sur **"Envoyer le message"**
4. Dans la console, vous devriez voir :
   ```
   ✅ Message sauvegardé avec ID: abc123xyz789
   ```

### Test 3 : Tester le calculateur de devis
1. Sur la page **Contact**, descendez au calculateur
2. Sélectionnez un type de projet
3. Configurez les options
4. Cliquez sur **"Calculer le prix"**
5. Dans la console :
   ```
   ✅ Devis sauvegardé avec ID: def456uvw012
   ```

### ⚠️ En cas d'erreur
Si vous voyez `❌ Erreur d'initialisation Firebase` :
1. Vérifiez que les clés sont correctes dans `firebase-config.js`
2. Assurez-vous d'avoir activé Firestore Database
3. Vérifiez les règles de sécurité

---

## 7. Consulter les Données

### Via la Console Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Sélectionnez votre projet
3. Cliquez sur **"Firestore Database"**

### Collection `contacts`
Vous verrez tous les messages avec :
- `name` : Nom du contact
- `email` : Email
- `phone` : Téléphone
- `company` : Entreprise (optionnel)
- `projectType` : Type de projet
- `message` : Message
- `timestamp` : Date/heure d'envoi
- `status` : Statut (nouveau, traité, etc.)
- `read` : Lu/non lu

### Collection `devis`
Vous verrez toutes les demandes de devis avec :
- `projectType` : Type de projet
- `pages` : Nombre de pages
- `complexity` : Complexité
- `features` : Fonctionnalités sélectionnées
- `estimatedPrice` : Prix estimé
- `estimatedTime` : Délai estimé
- `timestamp` : Date/heure
- `status` : Statut

---

## 🎯 Fonctionnalités Supplémentaires

### Activer les notifications par email
Pour recevoir un email à chaque nouveau message, vous pouvez :
1. Utiliser **Firebase Extensions** → "Trigger Email"
2. Ou connecter un service comme **Zapier** ou **Make.com**

### Créer un tableau de bord admin
Vous pouvez créer une page admin pour :
- Visualiser tous les contacts
- Marquer comme "traité"
- Répondre directement
- Voir les statistiques

### Exporter les données
1. Dans Firestore, sélectionnez une collection
2. Cliquez sur les 3 points → **"Exporter la collection"**
3. Format JSON ou CSV

---

## 📊 Structure des Données

### Schéma `contacts`
```javascript
{
  name: "Jean Dupont",
  email: "jean@example.com",
  phone: "+223 XX XX XX XX",
  company: "MonEntreprise SARL",
  projectType: "webapp",
  budget: "5000-10000",
  deadline: "1-3 mois",
  message: "Je souhaite développer...",
  timestamp: Timestamp,
  status: "nouveau",
  read: false
}
```

### Schéma `devis`
```javascript
{
  projectType: "ecommerce",
  pages: 15,
  complexity: "advanced",
  features: {
    seo: true,
    cms: true,
    api: false,
    multilang: true
  },
  estimatedPrice: 4500,
  estimatedTime: 6,
  userAgent: "Mozilla/5.0...",
  pageUrl: "https://softmali.com/contact",
  timestamp: Timestamp,
  status: "en attente",
  processed: false
}
```

---

## 🔒 Sécurité et Bonnes Pratiques

### ✅ À FAIRE
- ✅ Utilisez les règles de sécurité Firestore (étape 4)
- ✅ Ne stockez jamais de clé privée côté client
- ✅ Activez le mode "Production" après les tests
- ✅ Limitez les écritures avec des quotas
- ✅ Surveillez l'utilisation dans Firebase Console

### ❌ À NE PAS FAIRE
- ❌ Ne partagez jamais vos clés Firebase publiquement
- ❌ N'autorisez pas la lecture publique des collections
- ❌ Ne stockez pas de mots de passe en clair
- ❌ N'oubliez pas de passer en mode production

---

## 💰 Tarification Firebase

### Plan Gratuit (Spark)
- **Firestore** : 50 000 lectures/jour
- **Analytics** : Illimité
- **Hosting** : 10 GB de stockage
- **Parfait pour démarrer** ✅

### Plan Payant (Blaze)
- Paiement à l'usage (pay-as-you-go)
- Quota gratuit inclus
- Facturé uniquement au-delà des limites
- **Budget estimé** : 0-5€/mois pour petit site

### Surveiller l'utilisation
1. Console Firebase → **"Usage and billing"**
2. Configurez des alertes de budget
3. Consultez les statistiques quotidiennes

---

## 🆘 Support et Ressources

### Documentation Officielle
- [Firebase Docs](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

### Communauté
- [Stack Overflow Firebase](https://stackoverflow.com/questions/tagged/firebase)
- [Firebase Discord](https://discord.gg/firebase)

### Vidéos Tutoriels
- [Firebase for Web - YouTube](https://www.youtube.com/c/Firebase)
- Recherchez : "Firebase Firestore Tutorial"

---

## ✅ Checklist Finale

Avant de mettre en production, vérifiez :

- [ ] Projet Firebase créé
- [ ] Firestore Database activé
- [ ] Règles de sécurité configurées
- [ ] Clés copiées dans `firebase-config.js`
- [ ] Tests formulaire réussis
- [ ] Tests calculateur réussis
- [ ] Console Firebase affiche les données
- [ ] Analytics activé (optionnel)
- [ ] Budget configuré
- [ ] Alertes de sécurité activées

---

**🎉 Félicitations ! Votre site est maintenant connecté à Firebase !**

Pour toute question, consultez la [documentation officielle](https://firebase.google.com/docs) ou contactez le support Firebase.
