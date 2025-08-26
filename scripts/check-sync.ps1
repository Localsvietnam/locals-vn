# Quick Sync Status Check
Write-Host "Quick Sync Status Check" -ForegroundColor Green
Write-Host "=======================" -ForegroundColor Green

# Set Git path
$gitPath = "C:\Program Files\Git\bin\git.exe"

try {
    # Fetch latest info
    & $gitPath "fetch" "origin" | Out-Null
    
    # Check current status
    $currentCommit = & $gitPath "log" "-1" "--oneline"
    Write-Host "Current commit: $currentCommit" -ForegroundColor Cyan
    
    # Check if behind remote
    $behind = & $gitPath "rev-list" "--count" "HEAD..origin/master"
    if ($behind -gt 0) {
        Write-Host "$behind commits behind remote" -ForegroundColor Yellow
        Write-Host "Run: powershell -ExecutionPolicy Bypass -File scripts/auto-pull.ps1" -ForegroundColor Cyan
    } else {
        Write-Host "Up to date with remote" -ForegroundColor Green
    }
    
    # Check local changes
    $status = & $gitPath "status" "--porcelain"
    if ($status) {
        Write-Host "Local changes detected:" -ForegroundColor Yellow
        $status | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }
    } else {
        Write-Host "Working directory clean" -ForegroundColor Green
    }
    
} catch {
    Write-Host "Error checking sync status" -ForegroundColor Red
}

Write-Host "Repository: https://github.com/Localsvietnam/locals-vn" -ForegroundColor Cyan
