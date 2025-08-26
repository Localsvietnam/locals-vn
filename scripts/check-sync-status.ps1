# Check Sync Status Script
Write-Host "Checking auto-sync status..." -ForegroundColor Green

# Check Git status
Write-Host "`nChecking Git status..." -ForegroundColor Yellow
$gitPath = "C:\Program Files\Git\bin\git.exe"

try {
    $status = & $gitPath "status" "--porcelain"
    
    if ($status) {
        Write-Host "📝 There are uncommitted changes:" -ForegroundColor Yellow
        $status | ForEach-Object { Write-Host "  $_" -ForegroundColor Cyan }
    } else {
        Write-Host "✅ Working directory is clean" -ForegroundColor Green
    }
} catch {
    Write-Host "❌ Error checking Git status" -ForegroundColor Red
}

# Check last commit
try {
    $lastCommit = & $gitPath "log" "-1" "--oneline"
    Write-Host "`n📋 Last commit: $lastCommit" -ForegroundColor Cyan
} catch {
    Write-Host "❌ Error checking last commit" -ForegroundColor Red
}

# Check remote repository
Write-Host "`nChecking remote repository..." -ForegroundColor Yellow
try {
    $remotes = & $gitPath "remote" "-v"
    Write-Host "🌐 Remote repositories:" -ForegroundColor Cyan
    $remotes | ForEach-Object { Write-Host "  $_" -ForegroundColor Cyan }
} catch {
    Write-Host "❌ Error checking remote repositories" -ForegroundColor Red
}

Write-Host "`n🎯 Multi-machine development is ready!" -ForegroundColor Green
Write-Host "Repository: https://github.com/Localsvietnam/locals-vn" -ForegroundColor Cyan
Write-Host "`nTo start auto-sync, run:" -ForegroundColor Yellow
Write-Host "powershell -ExecutionPolicy Bypass -File scripts/cursor-sync.ps1" -ForegroundColor Cyan
