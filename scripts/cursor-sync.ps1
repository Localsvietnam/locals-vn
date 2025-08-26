# Cursor Auto-Sync Script - Code Only
Write-Host "Starting Cursor auto-sync (code only)..." -ForegroundColor Green

# Set Git path
$gitPath = "C:\Program Files\Git\bin\git.exe"

# Function to pull changes only (no auto-start)
function Pull-Changes {
    Write-Host "Checking for updates..." -ForegroundColor Cyan
    try {
        & $gitPath "fetch" "origin"
        $status = & $gitPath "status" "--porcelain"
        
        if ($status) {
            Write-Host "  📝 Local changes detected" -ForegroundColor Yellow
        } else {
            Write-Host "  ✅ Working directory clean" -ForegroundColor Green
        }
        
        # Only pull if there are remote changes
        $behind = & $gitPath "rev-list" "--count" "HEAD..origin/master"
        if ($behind -gt 0) {
            Write-Host "  🔄 Pulling latest changes..." -ForegroundColor Cyan
            & $gitPath "pull" "origin" "master"
            Write-Host "  ✅ Latest changes pulled" -ForegroundColor Green
        } else {
            Write-Host "  ✅ Already up to date" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "  ⚠️  Sync check failed: $($_.Exception.Message)" -ForegroundColor Yellow
    }
}

# Main sync loop - Code only, no server auto-start
Write-Host "Auto-sync started (code only). Press Ctrl+C to stop." -ForegroundColor Green
Write-Host "Sync interval: 60 seconds" -ForegroundColor Yellow
Write-Host "Repository: https://github.com/Localsvietnam/locals-vn" -ForegroundColor Cyan
Write-Host "Note: This only syncs code, does not auto-start server" -ForegroundColor Gray

try {
    while ($true) {
        Pull-Changes
        Start-Sleep 60  # Check every 60 seconds instead of 30
    }
}
catch {
    Write-Host "Auto-sync stopped." -ForegroundColor Yellow
}
