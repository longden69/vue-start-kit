#!/bin/bash

# Exit on fail
set -e

# Bundle install
npm install

# Start services
npm run serve

# Finally call command issued to the docker service
exec "$@"
