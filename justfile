# Default recipe - lists all available recipes
[private]
default:
    @just --list

# Start Dev Instance
start:
    bun start

# Test build locally
test:
    bun run serve -- --build

# Deploy to GH-Pages
deploy:
    bun run deploy
