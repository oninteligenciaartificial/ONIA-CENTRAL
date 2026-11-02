#!/usr/bin/env bash
# PreToolUse guard (Bash|PowerShell). Segunda capa: los deny de settings.json son la pared principal.
# exit 2 = bloquear (motivo en stderr). exit 0 = dejar pasar. Si este script falla, onFailure:"block" bloquea.
set -u
input="$(cat)"
if command -v jq >/dev/null 2>&1; then
  cmd="$(printf '%s' "$input" | jq -r '.tool_input.command // empty')" || exit 2
else
  echo "guard: falta jq, bloqueo por seguridad" >&2; exit 2
fi
[ -z "$cmd" ] && exit 0
lc="$(printf '%s' "$cmd" | tr '[:upper:]' '[:lower:]')"
block() { echo "Bloqueado por guard (OnIA): $1. Pide el sí de Sergio." >&2; exit 2; }
p='(^|[;&|(` ]|\$\()'
[[ "$lc" =~ ${p}git([[:space:]]+-[^[:space:]]+([[:space:]]+[^-[:space:]][^[:space:]]*)?)*[[:space:]]+push([[:space:]]|$) ]] && block "git push"
[[ "$lc" =~ gh[[:space:]]+pr[[:space:]]+merge ]] && block "merge de PR"
[[ "$lc" =~ git[[:space:]]+merge([[:space:]]|$) ]] && block "git merge"
[[ "$lc" =~ ${p}(npx[[:space:]]+)?(vercel|netlify|firebase[[:space:]]+deploy|wrangler[[:space:]]+(deploy|publish)) ]] && block "deploy"
[[ "$lc" =~ npm[[:space:]]+publish ]] && block "npm publish"
[[ "$lc" =~ ${p}rm[[:space:]]+(-[a-z]*r[a-z]*f|-[a-z]*f[a-z]*r|-r[[:space:]]+-f|-f[[:space:]]+-r|--recursive) ]] && block "rm -rf"
[[ "$lc" =~ remove-item.*-recurse ]] && block "Remove-Item -Recurse"
[[ "$lc" =~ (^|[^a-z0-9_.-])\.env([^a-z0-9_-]|$|\.) ]] && ! [[ "$lc" =~ \.env\.example ]] && block "acceso a .env"
[[ "$lc" =~ (\.ssh|\.aws)(/|\\|[[:space:]]|$|\") ]] && block "acceso a ~/.ssh o ~/.aws"
exit 0
