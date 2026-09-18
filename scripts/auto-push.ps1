$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

function Sync-Project {
  $changes = git status --porcelain
  if (-not $changes) { return }

  git add -A
  $stamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
  git commit -m "Auto-sync: $stamp"
  git push origin main
  Write-Host "Auto-pushed changes at $stamp" -ForegroundColor Green
}

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $projectRoot
$watcher.IncludeSubdirectories = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]::FileName -bor [System.IO.NotifyFilters]::LastWrite -bor [System.IO.NotifyFilters]::DirectoryName
$watcher.EnableRaisingEvents = $true

$global:autoPushPending = $false
$action = {
  $path = $Event.SourceEventArgs.FullPath
  if ($path -notmatch '[\\/]\\.(git|bolt)([\\/]|$)' -and $path -notmatch '[\\/]node_modules([\\/]|$)' -and $path -notmatch '[\\/]dist([\\/]|$)') {
    $global:autoPushPending = $true
  }
}

$subscriptions = @(
  (Register-ObjectEvent -InputObject $watcher -EventName Changed -Action $action),
  (Register-ObjectEvent -InputObject $watcher -EventName Created -Action $action),
  (Register-ObjectEvent -InputObject $watcher -EventName Deleted -Action $action),
  (Register-ObjectEvent -InputObject $watcher -EventName Renamed -Action $action)
)

Write-Host "Watching $projectRoot" -ForegroundColor Cyan
Write-Host 'Saved project changes will be committed and pushed to origin/main.' -ForegroundColor Cyan
Write-Host 'Press Ctrl+C to stop.' -ForegroundColor DarkGray

try {
  while ($true) {
    Wait-Event -Timeout 2 | Out-Null
    if ($global:autoPushPending) {
      $global:autoPushPending = $false
      Start-Sleep -Seconds 2
      try { Sync-Project } catch { Write-Host "Auto-push failed: $($_.Exception.Message)" -ForegroundColor Red }
    }
  }
}
finally {
  $subscriptions | ForEach-Object { Unregister-Event -SubscriptionId $_.Id -ErrorAction SilentlyContinue }
  $watcher.Dispose()
}