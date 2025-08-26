# Simple Font Download Script
Write-Host "Downloading fonts from Google Fonts..." -ForegroundColor Green

$fontsDir = "apps/frontend/public/fonts"

# Create fonts directory if it doesn't exist
if (!(Test-Path $fontsDir)) {
    New-Item -ItemType Directory -Path $fontsDir -Force
}

# Download Playfair Display
Write-Host "Downloading Playfair Display..." -ForegroundColor Yellow

try {
    $playfairUrl = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
    $response = Invoke-WebRequest -Uri $playfairUrl
    $css = $response.Content
    
    # Extract font URLs from CSS
    $fontUrls = $css -split "url\(" | ForEach-Object { 
        if ($_ -match "https://[^)]+") { 
            $matches[0] 
        } 
    }
    
    foreach ($url in $fontUrls) {
        if ($url -match "playfairdisplay") {
            $filename = if ($url -match "400") { "iCielBC-Regular.woff2" } else { "iCielBC-Bold.woff2" }
            Invoke-WebRequest -Uri $url -OutFile "$fontsDir/$filename"
            Write-Host "Downloaded: $filename" -ForegroundColor Green
        }
    }
} catch {
    Write-Host "Failed to download Playfair Display: $($_.Exception.Message)" -ForegroundColor Red
}

# Download Montserrat
Write-Host "Downloading Montserrat..." -ForegroundColor Yellow

try {
    $montserratUrl = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
    $response = Invoke-WebRequest -Uri $montserratUrl
    $css = $response.Content
    
    # Extract font URLs from CSS
    $fontUrls = $css -split "url\(" | ForEach-Object { 
        if ($_ -match "https://[^)]+") { 
            $matches[0] 
        } 
    }
    
    foreach ($url in $fontUrls) {
        if ($url -match "montserrat") {
            $filename = if ($url -match "400") { "Coolvetica-Regular.woff2" } else { "Coolvetica-Bold.woff2" }
            Invoke-WebRequest -Uri $url -OutFile "$fontsDir/$filename"
            Write-Host "Downloaded: $filename" -ForegroundColor Green
        }
    }
} catch {
    Write-Host "Failed to download Montserrat: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "Font download completed!" -ForegroundColor Green
