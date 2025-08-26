# Manual Sync Script - User Controlled
Write-Host "Manual Code Sync Tool" -ForegroundColor Green
Write-Host "=====================" -ForegroundColor Green

# Set Git path
$gitPath = "C:\Program Files\Git\bin\git.exe"

# Function to check status
function Show-Status {
    Write-Host "`nChecking current status..." -ForegroundColor Yellow
    try {
        $status = & $gitPath "status" "--porcelain"
        if ($status) {
            Write-Host "📝 Uncommitted changes:" -ForegroundColor Yellow
            $status | ForEach-Object { Write-Host "  $_" -ForegroundColor Cyan }
        } else {
            Write-Host "✅ Working directory clean" -ForegroundColor Green
        }
        
        # Check if behind remote
        & $gitPath "fetch" "origin" | Out-Null
        $behind = & $gitPath "rev-list" "--count" "HEAD..origin/master"
        if ($behind -gt 0) {
            Write-Host "🔄 $behind commits behind remote" -ForegroundColor Yellow
        } else {
            Write-Host "✅ Up to date with remote" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "❌ Error checking status" -ForegroundColor Red
    }
}

# Function to pull changes
function Pull-Changes {
    Write-Host "`nPulling latest changes..." -ForegroundColor Cyan
    try {
        & $gitPath "pull" "origin" "master"
        Write-Host "✅ Changes pulled successfully" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Failed to pull changes" -ForegroundColor Red
    }
}

# Function to push changes
function Push-Changes {
    Write-Host "`nPushing local changes..." -ForegroundColor Cyan
    try {
        & $gitPath "add" "."
        & $gitPath "commit" "-m" "Manual sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        & $gitPath "push" "origin" "master"
        Write-Host "✅ Changes pushed successfully" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Failed to push changes" -ForegroundColor Red
    }
}

# Main menu
do {
    Write-Host "`nChoose an option:" -ForegroundColor Yellow
    Write-Host "1. Check status" -ForegroundColor Cyan
    Write-Host "2. Pull latest changes" -ForegroundColor Cyan
    Write-Host "3. Push local changes" -ForegroundColor Cyan
    Write-Host "4. Sync both ways" -ForegroundColor Cyan
    Write-Host "5. Exit" -ForegroundColor Cyan
    
    $choice = Read-Host "`nEnter your choice (1-5)"
    
    switch ($choice) {
        "1" { Show-Status }
        "2" { Pull-Changes }
        "3" { Push-Changes }
        "4" { 
            Show-Status
            Pull-Changes
            Push-Changes
        }
        "5" { 
            Write-Host "Goodbye!" -ForegroundColor Green
            break
        }
        default { Write-Host "Invalid choice. Please try again." -ForegroundColor Red }
    }
} while ($choice -ne "5")
