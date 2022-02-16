#! /bin/bash
set -euo pipefail

npm install

if [[ -v NGROK_AUTHTOKEN ]]
  then npx ngrok authtoken $NGROK_AUTHTOKEN
fi