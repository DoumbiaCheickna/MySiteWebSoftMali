const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques depuis le dossier dist
app.use(express.static(path.join(__dirname, 'dist/softmali/browser')));

// Toutes les routes doivent renvoyer index.html pour le routing Angular
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/softmali/browser/index.html'));
});

// Utiliser le port fourni par Render ou 8080 par défaut
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🚀 Serveur démarré sur le port ${port}`);
});
