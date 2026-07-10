<# Simple PowerShell static server
   Usage: powershell -ExecutionPolicy Bypass -File serve.ps1 8000
#>
Param([int]$Port=8000)
$root = Get-Location
$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)
try {
  $listener.Start()
} catch {
  Write-Error "Failed to start listener. Try running PowerShell as Administrator or use another port."
  exit 1
}
Write-Output "Serving $root at http://localhost:$Port/ (CTRL+C to stop)"
function Get-ContentType($ext) {
  switch ($ext.ToLower()) {
    ".html" { "text/html; charset=utf-8"; break }
    ".htm"  { "text/html; charset=utf-8"; break }
    ".css"  { "text/css; charset=utf-8"; break }
    ".js"   { "application/javascript; charset=utf-8"; break }
    ".json" { "application/json; charset=utf-8"; break }
    ".png"  { "image/png"; break }
    ".jpg"  { "image/jpeg"; break }
    ".jpeg" { "image/jpeg"; break }
    ".gif"  { "image/gif"; break }
    ".svg"  { "image/svg+xml"; break }
    ".txt"  { "text/plain; charset=utf-8"; break }
    default  { "application/octet-stream" }
  }
}
while ($listener.IsListening) {
  $context = $listener.GetContext()
  $request = $context.Request
  $path = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath.TrimStart('/'))
  if ([string]::IsNullOrEmpty($path)) { $path = "index.html" }
  $file = Join-Path $root $path
  if (Test-Path $file -PathType Leaf) {
    $ext = [System.IO.Path]::GetExtension($file)
    $bytes = [System.IO.File]::ReadAllBytes($file)
    $context.Response.ContentType = Get-ContentType $ext
    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes,0,$bytes.Length)
  } else {
    $context.Response.StatusCode = 404
    $msg = "404 - Not Found"
    $buf = [System.Text.Encoding]::UTF8.GetBytes($msg)
    $context.Response.ContentType = "text/plain; charset=utf-8"
    $context.Response.ContentLength64 = $buf.Length
    $context.Response.OutputStream.Write($buf,0,$buf.Length)
  }
  $context.Response.OutputStream.Close()
}
