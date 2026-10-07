# Deploy script to push Digital Portfolio to GitHub under brets60
param (
    [string]$RepoUrl = "https://github.com/brets60/DigitalPortfolio-cabatingan.git"
)

Write-Host "Configuring remote origin to: $RepoUrl" -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin $RepoUrl

Write-Host "Creating main branch..." -ForegroundColor Green
git branch -M main

Write-Host "Pushing main branch to GitHub repository..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSuccessfully pushed to https://github.com/brets60/DigitalPortfolio-cabatingan!" -ForegroundColor Green
    Write-Host "You can now connect this repo to Render or Vercel for live hosting." -ForegroundColor Cyan
} else {
    Write-Host "`nNotice: Please ensure repository https://github.com/brets60/DigitalPortfolio-cabatingan exists and your credentials are valid." -ForegroundColor Yellow
}
