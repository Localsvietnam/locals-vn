# Cursor Auto-Sync Script
Write-Host "Starting Cursor auto-sync..." -ForegroundColor Green

# Set Git path
$gitPath = "C:\Program Files\Git\bin\git.exe"

# Function to sync changes
function Sync-Changes {
    Write-Host "Syncing changes to remote..." -ForegroundColor Cyan
    try {
        & $gitPath "add" "."
        & $gitPath "commit" "-m" "Auto-sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        & $gitPath "push" "origin" "master"
        Write-Host "  OK: Changes pushed to remote" -ForegroundColor Green
    }
    catch {
        Write-Host "  ERROR: Failed to push changes" -ForegroundColor Red
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Function to pull changes
function Pull-Changes {
    Write-Host "Pulling latest changes..." -ForegroundColor Cyan
    try {
        & $gitPath "pull" "origin" "master"
        Write-Host "  OK: Latest changes pulled" -ForegroundColor Green
    }
    catch {
        Write-Host "  ERROR: Failed to pull changes" -ForegroundColor Red
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Main sync loop
Write-Host "Auto-sync started. Press Ctrl+C to stop." -ForegroundColor Green
Write-Host "Sync interval: 30 seconds" -ForegroundColor Yellow
Write-Host "Repository: https://github.com/Localsvietnam/locals-vn" -ForegroundColor Cyan

try {
    while ($true) {
        Pull-Changes
        Start-Sleep 30
    }
}
catch {
    Write-Host "Auto-sync stopped." -ForegroundColor Yellow
}
