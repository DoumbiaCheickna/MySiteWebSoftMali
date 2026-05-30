const express = require('express');
const path = require('path');

const app = express();

// Servir les fichiers statiques du build Angular
// Le dossier de build par défaut est "dist/nom-du-projet"
// Ici, c'est "softmali" car le nom est "softmali" dans package.json
const distPath = path.join(__dirname, 'dist/softmali');
app.use(express.static(distPath));

// Rediriger toutes les requêtes vers index.html (pour le routing Angular)
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Serveur Angular (SoftMali) démarré sur le port ${port}`);
});