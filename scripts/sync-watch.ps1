# File Watch and Sync Script
param(
    [string]$SourcePath = ".",
    [string]$TargetPath = "\\remote-machine\locals-project",
    [int]$Interval = 5
)

Write-Host "Starting file watch and sync..." -ForegroundColor Green
Write-Host "Source: $SourcePath" -ForegroundColor Yellow
Write-Host "Target: $TargetPath" -ForegroundColor Yellow
Write-Host "Interval: $Interval seconds" -ForegroundColor Yellow

# Create file watcher
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $SourcePath
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

# Sync function
function Sync-Files {
    Write-Host "Syncing files..." -ForegroundColor Cyan
    try {
        robocopy $SourcePath $TargetPath /MIR /R:3 /W:1 /MT:8 /LOG+:sync.log
        Write-Host "Sync completed at $(Get-Date)" -ForegroundColor Green
    }
    catch {
        Write-Host "Sync failed: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Event handlers
$onChange = Register-ObjectEvent $watcher "Changed" -Action {
    Write-Host "File changed: $($Event.SourceEventArgs.FullPath)" -ForegroundColor Yellow
    Sync-Files
}

$onCreate = Register-ObjectEvent $watcher "Created" -Action {
    Write-Host "File created: $($Event.SourceEventArgs.FullPath)" -ForegroundColor Yellow
    Sync-Files
}

$onDelete = Register-ObjectEvent $watcher "Deleted" -Action {
    Write-Host "File deleted: $($Event.SourceEventArgs.FullPath)" -ForegroundColor Yellow
    Sync-Files
}

Write-Host "File watcher started. Press Ctrl+C to stop." -ForegroundColor Green

# Keep script running
try {
    while ($true) {
        Start-Sleep $Interval
        Sync-Files
    }
}
finally {
    Unregister-Event $onChange
    Unregister-Event $onCreate
    Unregister-Event $onDelete
    $watcher.EnableRaisingEvents = $false
    $watcher.Dispose()
    Write-Host "File watcher stopped." -ForegroundColor Yellow
}
