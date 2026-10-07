# Deploy script to push Digital Portfolio to GitHub under brets60
param (
    [string]$RepoUrl = "https://github.com/brets60/digital-portfolio-cabatingan.git"
)

Write-Host "Configuring remote origin to: $RepoUrl" -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin $RepoUrl

Write-Host "Creating main branch..." -ForegroundColor Green
git branch -M main

Write-Host "Pushing main branch to GitHub repository..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSuccessfully pushed to https://github.com/brets60/digital-portfolio-cabatingan!" -ForegroundColor Green
    Write-Host "You can now connect this repo to Render or Vercel for live hosting." -ForegroundColor Cyan
} else {
    Write-Host "`nNotice: If the repository doesn't exist yet on GitHub, please create an empty repository named 'digital-portfolio-cabatingan' on your GitHub account (https://github.com/new), then re-run this script." -ForegroundColor Yellow
}
