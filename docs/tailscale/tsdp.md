---
sidebar_position: 4
title: Tailscale Device Proxy
---

# TSDProxy
[TSDP](https://github.com/almeidapaulopt/tsdproxy) is an alternative to [Tailscale Sidecar](https://github.com/tailscale-dev/ScaleTail), where the main difference is that TSDP is centralized and sidecar would have each server have it's own tailscale instance.

Official documentation at: https://almeidapaulopt.github.io/tsdproxy/

## Setting Up
- Ensure your device has Docker and Docker Compose
1. Make a docker-compose.yml inside a folder then put this in its contents:
```yaml
services:
  tsdproxy:
    image: almeidapaulopt/tsdproxy:latest
    container_name: tsdproxy
    restart: unless-stopped
    ports:
      - "8880:8080" # Dashboard (optional, accessible via local IP)
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./config:/config
      - ./data:/data
    environment:
      - TSDPROXY_AUTHKEY=tskey-auth-XXXXXXX
      - TSDPROXY_LOG_LEVEL=info
```
2. Get AuthKey [here](https://login.tailscale.com/admin/settings/keys), and add it to your compose
:::danger[WARNING]

Do NOT share your AuthKey with anyone, even LLMs, as it acts as a password to your tailscale.

:::
3. Visit http://your-server-ip:8880 to see if dashboard is running

## Making your docker container exposed through TSDP
- Add the following labels to your docker container:
```yaml
labels:
  - "tsdproxy.enable=true"
  - "tsdproxy.name=service-name"
  - "tsdproxy.container_port=8000"
  # OPTIONAL
  - "tsdproxy.funnel=true"
```
- Details:
    - `tsdproxy.enable`, to enable TSDP
    - `tsdproxy.name`, name of the service
        - This will be the name of the link so setting it as "Jellyfin" the link would be "https://jellyfin.tail-net.ts.net"
        - This is the name it appears in your [tailscale dashboard](https://login.tailscale.com/admin/machines)
    - `tsdproxy.container_port`, port that TSDP will forward to tailscale set this as the services port
    - `tsdproxy.funnel`, make it publicly available
        - Makes it so it's available to anyone even outside of your tailnet 