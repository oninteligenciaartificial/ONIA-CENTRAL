# PreToolUse guard para Windows nativo (sin WSL). Igual que guard.sh: exit 2 bloquea.
$ErrorActionPreference = 'Stop'
try {
  $raw = [Console]::In.ReadToEnd()
  $cmd = ($raw | ConvertFrom-Json).tool_input.command
} catch { [Console]::Error.WriteLine('guard: no pude leer la entrada, bloqueo'); exit 2 }
if (-not $cmd) { exit 0 }
$c = $cmd.ToLower()
function Block($why) { [Console]::Error.WriteLine("Bloqueado por guard (OnIA): $why. Pide el si de Sergio."); exit 2 }
if ($c -match '(^|[;&|(` ])git(\s+-\S+(\s+[^-\s]\S*)?)*\s+push(\s|$)') { Block 'git push' }
if ($c -match 'gh\s+pr\s+merge') { Block 'merge de PR' }
if ($c -match 'git\s+merge(\s|$)') { Block 'git merge' }
if ($c -match '(^|[;&|(` ])(npx\s+)?(vercel|netlify|firebase\s+deploy|wrangler\s+(deploy|publish))') { Block 'deploy' }
if ($c -match 'npm\s+publish') { Block 'npm publish' }
if ($c -match '(^|[;&|(` ])rm\s+(-[a-z]*r[a-z]*f|-[a-z]*f[a-z]*r|-r\s+-f|-f\s+-r|--recursive)') { Block 'rm -rf' }
if ($c -match 'remove-item.*-recurse') { Block 'Remove-Item -Recurse' }
if (($c -match '(^|[^a-z0-9_.-])\.env([^a-z0-9_-]|$|\.)') -and ($c -notmatch '\.env\.example')) { Block 'acceso a .env' }
if ($c -match '(\.ssh|\.aws)([/\\\s"]|$)') { Block 'acceso a ~/.ssh o ~/.aws' }
exit 0
