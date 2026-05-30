# Script de build et déploiement

Write-Host "🔨 SOFTMALI - Build et Déploiement" -ForegroundColor Cyan
Write-Host "===================================" -ForegroundColor Cyan
Write-Host ""

# Menu de choix
Write-Host "Que voulez-vous faire?" -ForegroundColor Yellow
Write-Host "1. Build de développement" -ForegroundColor White
Write-Host "2. Build de production" -ForegroundColor White
Write-Host "3. Déployer sur Firebase" -ForegroundColor White
Write-Host "4. Build + Déployer" -ForegroundColor White
Write-Host "5. Tester localement le build" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Votre choix (1-5)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "📦 Build de développement..." -ForegroundColor Yellow
        npm run build
    }
    "2" {
        Write-Host ""
        Write-Host "📦 Build de production..." -ForegroundColor Yellow
        npm run build:prod
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Build réussi!" -ForegroundColor Green
            Write-Host "   Fichiers dans: dist/softmali" -ForegroundColor White
        }
    }
    "3" {
        Write-Host ""
        Write-Host "🚀 Déploiement sur Firebase..." -ForegroundColor Yellow
        
        # Vérifier si firebase-tools est installé
        if (Get-Command firebase -ErrorAction SilentlyContinue) {
            firebase deploy --only hosting
        } else {
            Write-Host "❌ Firebase CLI n'est pas installé!" -ForegroundColor Red
            Write-Host "   Installez-le avec: npm install -g firebase-tools" -ForegroundColor Yellow
        }
    }
    "4" {
        Write-Host ""
        Write-Host "📦 Build de production..." -ForegroundColor Yellow
        npm run build:prod
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Build réussi!" -ForegroundColor Green
            Write-Host ""
            Write-Host "🚀 Déploiement sur Firebase..." -ForegroundColor Yellow
            
            if (Get-Command firebase -ErrorAction SilentlyContinue) {
                firebase deploy --only hosting
                
                if ($LASTEXITCODE -eq 0) {
                    Write-Host ""
                    Write-Host "🎉 Déploiement réussi!" -ForegroundColor Green
                }
            } else {
                Write-Host "❌ Firebase CLI n'est pas installé!" -ForegroundColor Red
            }
        }
    }
    "5" {
        Write-Host ""
        Write-Host "📦 Build de production..." -ForegroundColor Yellow
        npm run build:prod
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Build réussi!" -ForegroundColor Green
            Write-Host ""
            Write-Host "🌐 Démarrage du serveur local..." -ForegroundColor Yellow
            
            if (Get-Command firebase -ErrorAction SilentlyContinue) {
                Write-Host "   URL: http://localhost:5000" -ForegroundColor Cyan
                firebase serve
            } else {
                Write-Host "   Utilisation d'un serveur HTTP simple..." -ForegroundColor Yellow
                Set-Location dist/softmali
                python -m http.server 5000
            }
        }
    }
    default {
        Write-Host "❌ Choix invalide!" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Terminé!" -ForegroundColor Green
