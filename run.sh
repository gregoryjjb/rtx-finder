xvfb-run node ./main.js | while IFS= read -r line; do printf '%s %s\n' "[$(TZ=America/Los_Angeles date)]" "$line"; done 2>&1 | tee -a cache/output.log  # cache/$(date +%Y-%m-%d).log
