# Start Auto-Sync Script
Write-Host "Starting auto-sync for multi-machine development..." -ForegroundColor Green

# Check if cursor-sync.ps1 exists
if (-not (Test-Path "scripts/cursor-sync.ps1")) {
    Write-Host "❌ cursor-sync.ps1 not found!" -ForegroundColor Red
    Write-Host "Please run setup-cursor-sync.ps1 first" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Starting auto-sync in background..." -ForegroundColor Green
Write-Host "This will sync changes every 30 seconds" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop" -ForegroundColor Cyan

# Start auto-sync in background
Start-Process -FilePath "powershell" -ArgumentList "-ExecutionPolicy Bypass -File scripts/cursor-sync.ps1" -WindowStyle Hidden

Write-Host "`n🎯 Auto-sync started successfully!" -ForegroundColor Green
Write-Host "Repository: https://github.com/Localsvietnam/locals-vn" -ForegroundColor Cyan
Write-Host "`nYour changes will be automatically synced to GitHub" -ForegroundColor Yellow
