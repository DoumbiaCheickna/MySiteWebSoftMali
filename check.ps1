# Script de vérification du projet Angular

Write-Host ""
Write-Host "🔍 SOFTMALI - Vérification du Projet" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

$errors = 0
$warnings = 0

# Fonction de vérification
function Check-Item {
    param($name, $path, $type = "file")
    
    if ($type -eq "file") {
        $exists = Test-Path $path -PathType Leaf
    } else {
        $exists = Test-Path $path -PathType Container
    }
    
    if ($exists) {
        Write-Host "✅ $name" -ForegroundColor Green
        return $true
    } else {
        Write-Host "❌ $name manquant" -ForegroundColor Red
        $script:errors++
        return $false
    }
}

# Vérification des fichiers de configuration
Write-Host "📋 Fichiers de configuration:" -ForegroundColor Yellow
Check-Item "package.json" "package.json"
Check-Item "angular.json" "angular.json"
Check-Item "tsconfig.json" "tsconfig.json"
Check-Item "firebase.json" "firebase.json"
Check-Item ".firebaserc" ".firebaserc"

Write-Host ""
Write-Host "📁 Structure du projet:" -ForegroundColor Yellow
Check-Item "Dossier src/" "src" "dir"
Check-Item "Dossier src/app" "src/app" "dir"
Check-Item "Dossier src/assets" "src/assets" "dir"
Check-Item "Dossier src/environments" "src/environments" "dir"
Check-Item "src/index.html" "src/index.html"
Check-Item "src/main.ts" "src/main.ts"
Check-Item "src/styles.css" "src/styles.css"

Write-Host ""
Write-Host "🧩 Composants:" -ForegroundColor Yellow
Check-Item "App Module" "src/app/app.module.ts"
Check-Item "App Routing" "src/app/app-routing.module.ts"
Check-Item "Home" "src/app/pages/home/home.component.ts"
Check-Item "Services" "src/app/pages/services/services.component.ts"
Check-Item "About" "src/app/pages/about/about.component.ts"
Check-Item "Contact" "src/app/pages/contact/contact.component.ts"
Check-Item "Navbar" "src/app/shared/components/navbar/navbar.component.ts"
Check-Item "Footer" "src/app/shared/components/footer/footer.component.ts"

Write-Host ""
Write-Host "🔥 Configuration Firebase:" -ForegroundColor Yellow
Check-Item "Environment Dev" "src/environments/environment.ts"
Check-Item "Environment Prod" "src/environments/environment.prod.ts"
Check-Item "Contact Service" "src/app/services/contact.service.ts"

Write-Host ""
Write-Host "📚 Documentation:" -ForegroundColor Yellow
Check-Item "README Angular" "README_ANGULAR.md"
Check-Item "Guide Déploiement" "GUIDE_DEPLOIEMENT_ANGULAR.md"
Check-Item "Projet Angular" "PROJET_ANGULAR.md"

Write-Host ""
Write-Host "🛠️ Scripts:" -ForegroundColor Yellow
Check-Item "Script start" "start.ps1"
Check-Item "Script deploy" "deploy.ps1"

# Vérification des dépendances
Write-Host ""
Write-Host "📦 Dépendances:" -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "✅ node_modules présent" -ForegroundColor Green
} else {
    Write-Host "⚠️  node_modules manquant - Exécutez: npm install" -ForegroundColor Yellow
    $warnings++
}

# Vérification de package.json
Write-Host ""
Write-Host "🔍 Vérification de package.json:" -ForegroundColor Yellow
if (Test-Path "package.json") {
    $pkg = Get-Content "package.json" -Raw | ConvertFrom-Json
    
    $requiredDeps = @("@angular/core", "@angular/fire", "@angular/router", "firebase")
    foreach ($dep in $requiredDeps) {
        if ($pkg.dependencies.$dep) {
            Write-Host "✅ $dep présent" -ForegroundColor Green
        } else {
            Write-Host "❌ $dep manquant" -ForegroundColor Red
            $errors++
        }
    }
}

# Vérification des clés Firebase
Write-Host ""
Write-Host "🔐 Configuration Firebase:" -ForegroundColor Yellow
if (Test-Path "src/environments/environment.ts") {
    $envContent = Get-Content "src/environments/environment.ts" -Raw
    
    if ($envContent -match "apiKey.*AIza") {
        Write-Host "✅ Clés Firebase présentes" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Clés Firebase à configurer" -ForegroundColor Yellow
        $warnings++
    }
}

if (Test-Path ".firebaserc") {
    $fbrc = Get-Content ".firebaserc" -Raw | ConvertFrom-Json
    $projectId = $fbrc.projects.default
    
    if ($projectId -and $projectId -ne "softmali-website") {
        Write-Host "✅ Project ID Firebase configuré: $projectId" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Project ID Firebase à mettre à jour dans .firebaserc" -ForegroundColor Yellow
        $warnings++
    }
}

# Résumé
Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "📊 Résumé de la vérification:" -ForegroundColor Cyan
Write-Host ""

if ($errors -eq 0 -and $warnings -eq 0) {
    Write-Host "🎉 Parfait! Tout est configuré correctement!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Prochaines étapes:" -ForegroundColor Cyan
    Write-Host "1. Vérifiez les clés Firebase dans src/environments/" -ForegroundColor White
    Write-Host "2. Exécutez: npm install (si pas encore fait)" -ForegroundColor White
    Write-Host "3. Exécutez: npm start" -ForegroundColor White
} else {
    if ($errors -gt 0) {
        Write-Host "❌ $errors erreur(s) trouvée(s)" -ForegroundColor Red
    }
    if ($warnings -gt 0) {
        Write-Host "⚠️  $warnings avertissement(s)" -ForegroundColor Yellow
    }
    Write-Host ""
    Write-Host "Actions recommandées:" -ForegroundColor Cyan
    if ($warnings -gt 0 -and $errors -eq 0) {
        Write-Host "1. Exécutez: npm install" -ForegroundColor White
        Write-Host "2. Configurez Firebase (voir PROJET_ANGULAR.md)" -ForegroundColor White
    }
}

Write-Host ""
Write-Host "📖 Pour plus d'informations:" -ForegroundColor Cyan
Write-Host "   - PROJET_ANGULAR.md" -ForegroundColor White
Write-Host "   - README_ANGULAR.md" -ForegroundColor White
Write-Host "   - GUIDE_DEPLOIEMENT_ANGULAR.md" -ForegroundColor White
Write-Host ""
