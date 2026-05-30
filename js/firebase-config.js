/* ===================================
   SOFTMALI - Configuration Firebase
   ================================ */

// Configuration Firebase - À PERSONNALISER avec vos propres clés
const firebaseConfig = {
  apiKey: "AIzaSyDZHA0ne_E4x9CzK_E29j5_tOYAjTtrnrM",
  authDomain: "drop-iibs.firebaseapp.com",
  projectId: "drop-iibs",
  storageBucket: "drop-iibs.firebasestorage.app",
  messagingSenderId: "113120592091",
  appId: "1:113120592091:web:2586508f5323aeeefe0cfe",
  measurementId: "G-S6JHM7K801"
};

// Initialisation Firebase
let app, db, analytics;

try {
    // Initialiser Firebase
    app = firebase.initializeApp(firebaseConfig);
    
    // Initialiser Firestore
    db = firebase.firestore();
    
    // Initialiser Analytics (optionnel)
    if (typeof firebase.analytics !== 'undefined') {
        analytics = firebase.analytics();
    }
    
    console.log('✅ Firebase initialisé avec succès');
} catch (error) {
    console.error('❌ Erreur d\'initialisation Firebase:', error);
}

// Fonction pour sauvegarder un message de contact
async function saveContactMessage(data) {
    try {
        // Ajouter le timestamp
        const messageData = {
            ...data,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'nouveau',
            read: false
        };
        
        // Sauvegarder dans Firestore
        const docRef = await db.collection('contacts').add(messageData);
        
        console.log('✅ Message sauvegardé avec ID:', docRef.id);
        
        // Logger l'événement dans Analytics
        if (analytics) {
            analytics.logEvent('contact_form_submit', {
                project_type: data.projectType || 'non spécifié'
            });
        }
        
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('❌ Erreur lors de la sauvegarde:', error);
        return { success: false, error: error.message };
    }
}

// Fonction pour sauvegarder une demande de devis
async function saveQuoteRequest(data) {
    try {
        const quoteData = {
            ...data,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'en attente',
            processed: false
        };
        
        const docRef = await db.collection('devis').add(quoteData);
        
        console.log('✅ Demande de devis sauvegardée avec ID:', docRef.id);
        
        if (analytics) {
            analytics.logEvent('quote_request', {
                estimated_price: data.estimatedPrice || 0,
                project_type: data.projectType || 'non spécifié'
            });
        }
        
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('❌ Erreur lors de la sauvegarde du devis:', error);
        return { success: false, error: error.message };
    }
}

// Fonction pour récupérer les statistiques du site
async function getSiteStats() {
    try {
        const contactsSnapshot = await db.collection('contacts').get();
        const devisSnapshot = await db.collection('devis').get();
        
        return {
            totalContacts: contactsSnapshot.size,
            totalDevis: devisSnapshot.size,
            lastUpdate: new Date()
        };
    } catch (error) {
        console.error('❌ Erreur lors de la récupération des stats:', error);
        return null;
    }
}

// Fonction pour logger les visites de pages
function logPageView(pageName) {
    if (analytics) {
        analytics.logEvent('page_view', {
            page_title: pageName,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
}

// Logger la visite de la page actuelle au chargement
document.addEventListener('DOMContentLoaded', () => {
    const pageName = document.title || 'Page sans titre';
    logPageView(pageName);
});

// Export des fonctions pour utilisation dans d'autres fichiers
window.FirebaseService = {
    saveContactMessage,
    saveQuoteRequest,
    getSiteStats,
    logPageView,
    db,
    analytics
};
