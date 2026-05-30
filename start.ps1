# Script de démarrage rapide SOFTMALI Angular

Write-Host "🚀 SOFTMALI - Démarrage du projet Angular" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier Node.js
Write-Host "📋 Vérification des prérequis..." -ForegroundColor Yellow
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "✅ Node.js installé: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js n'est pas installé!" -ForegroundColor Red
    Write-Host "   Téléchargez-le depuis https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Vérifier npm
if (Get-Command npm -ErrorAction SilentlyContinue) {
    $npmVersion = npm --version
    Write-Host "✅ npm installé: $npmVersion" -ForegroundColor Green
} else {
    Write-Host "❌ npm n'est pas installé!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dépendances installées avec succès!" -ForegroundColor Green
} else {
    Write-Host "❌ Erreur lors de l'installation des dépendances" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🔧 Vérification de la structure..." -ForegroundColor Yellow
$requiredDirs = @("src/app", "src/assets", "src/environments")
foreach ($dir in $requiredDirs) {
    if (Test-Path $dir) {
        Write-Host "✅ $dir existe" -ForegroundColor Green
    } else {
        Write-Host "⚠️  $dir manquant" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✨ Installation terminée!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Commandes disponibles:" -ForegroundColor Cyan
Write-Host "   npm start          - Lancer le serveur de développement" -ForegroundColor White
Write-Host "   npm run build      - Build de développement" -ForegroundColor White
Write-Host "   npm run build:prod - Build de production" -ForegroundColor White
Write-Host "   npm run deploy     - Déployer sur Firebase" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Pour démarrer l'application:" -ForegroundColor Cyan
Write-Host "   npm start" -ForegroundColor Yellow
Write-Host ""
Write-Host "📖 Documentation:" -ForegroundColor Cyan
Write-Host "   - README_ANGULAR.md" -ForegroundColor White
Write-Host "   - GUIDE_DEPLOIEMENT_ANGULAR.md" -ForegroundColor White
Write-Host ""

# Demander si l'utilisateur veut démarrer maintenant
$response = Read-Host "Voulez-vous démarrer le serveur de développement maintenant? (o/N)"
if ($response -eq 'o' -or $response -eq 'O') {
    Write-Host ""
    Write-Host "🚀 Démarrage du serveur..." -ForegroundColor Green
    npm start
}
