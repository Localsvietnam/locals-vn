# Git Auto-Sync Setup Script
Write-Host "Setting up Git Auto-Sync for multi-machine development..." -ForegroundColor Green

# Create pre-commit hook
$preCommitHook = @"
#!/bin/sh
# Auto-sync pre-commit hook

echo "Auto-syncing changes..."
git add .
git commit -m "Auto-sync: $(date)"
git push origin HEAD

echo "Changes synced to remote repository"
"@

# Create post-merge hook  
$postMergeHook = @"
#!/bin/sh
# Auto-sync post-merge hook

echo "Pulling latest changes..."
git pull origin HEAD

echo "Latest changes pulled from remote repository"
"@

# Create sync script
$syncScript = @"
# Auto-sync script
while true; do
    echo "Checking for changes..."
    git fetch origin
    git pull origin HEAD
    sleep 30
done
"@

# Write files
$preCommitHook | Out-File -FilePath ".git/hooks/pre-commit" -Encoding UTF8
$postMergeHook | Out-File -FilePath ".git/hooks/post-merge" -Encoding UTF8  
$syncScript | Out-File -FilePath "scripts/auto-sync.sh" -Encoding UTF8

Write-Host "Git auto-sync setup completed!" -ForegroundColor Green
Write-Host "Run 'bash scripts/auto-sync.sh' to start auto-sync" -ForegroundColor Yellow
