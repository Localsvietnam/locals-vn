# Auto Pull Script - Always sync with remote
Write-Host "Starting auto-pull for multi-machine sync..." -ForegroundColor Green

# Set Git path
$gitPath = "C:\Program Files\Git\bin\git.exe"

# Function to pull latest changes
function Pull-LatestChanges {
    Write-Host "`n🔄 Checking for updates..." -ForegroundColor Cyan
    try {
        # Fetch latest changes
        & $gitPath "fetch" "origin" | Out-Null
        
        # Check if there are new commits
        $behind = & $gitPath "rev-list" "--count" "HEAD..origin/master"
        
        if ($behind -gt 0) {
            Write-Host "📥 Found $behind new commits, pulling..." -ForegroundColor Yellow
            
            # Stash any local changes to avoid conflicts
            $status = & $gitPath "status" "--porcelain"
            if ($status) {
                Write-Host "💾 Stashing local changes..." -ForegroundColor Cyan
                & $gitPath "stash" "push" "-m" "Auto-stash before pull: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
            }
            
            # Pull latest changes
            & $gitPath "pull" "origin" "master"
            Write-Host "✅ Successfully pulled $behind commits" -ForegroundColor Green
            
            # Show what was updated
            $lastCommits = & $gitPath "log" "--oneline" "-$behind"
            Write-Host "📋 Recent updates:" -ForegroundColor Cyan
            $lastCommits | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }
            
        } else {
            Write-Host "✅ Already up to date" -ForegroundColor Green
        }
        
        # Show current status
        $currentCommit = & $gitPath "log" "-1" "--oneline"
        Write-Host "📍 Current commit: $currentCommit" -ForegroundColor Cyan
        
    }
    catch {
        Write-Host "❌ Error pulling changes: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Function to show sync status
function Show-SyncStatus {
    Write-Host "`n📊 Sync Status:" -ForegroundColor Yellow
    try {
        $status = & $gitPath "status" "--porcelain"
        if ($status) {
            Write-Host "📝 Local changes detected:" -ForegroundColor Yellow
            $status | ForEach-Object { Write-Host "  $_" -ForegroundColor Cyan }
        } else {
            Write-Host "✅ Working directory clean" -ForegroundColor Green
        }
        
        # Check remote status
        & $gitPath "fetch" "origin" | Out-Null
        $behind = & $gitPath "rev-list" "--count" "HEAD..origin/master"
        $ahead = & $gitPath "rev-list" "--count" "origin/master..HEAD"
        
        if ($behind -gt 0) {
            Write-Host "🔄 $behind commits behind remote" -ForegroundColor Yellow
        }
        if ($ahead -gt 0) {
            Write-Host "📤 $ahead commits ahead of remote" -ForegroundColor Yellow
        }
        if ($behind -eq 0 -and $ahead -eq 0) {
            Write-Host "✅ In sync with remote" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "❌ Error checking status" -ForegroundColor Red
    }
}

# Main auto-pull loop
Write-Host "Auto-pull started. Press Ctrl+C to stop." -ForegroundColor Green
Write-Host "Sync interval: 30 seconds" -ForegroundColor Yellow
Write-Host "Repository: https://github.com/Localsvietnam/locals-vn" -ForegroundColor Cyan
Write-Host "This will automatically pull changes from the other machine" -ForegroundColor Gray

$syncCount = 0
try {
    while ($true) {
        $syncCount++
        Write-Host "`n🔄 Sync attempt #$syncCount - $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Magenta
        
        Pull-LatestChanges
        Show-SyncStatus
        
        Write-Host "⏰ Next sync in 30 seconds..." -ForegroundColor Gray
        Start-Sleep 30
    }
}
catch {
    Write-Host "`nAuto-pull stopped." -ForegroundColor Yellow
    Write-Host "Total syncs performed: $syncCount" -ForegroundColor Cyan
}
