---
sidebar_position: 1
title: Setup
---

# Setup
My current homelab setup

## Hardware
Currently using a MiniPC from Chuwi
- Specs:
```
                             ....              dejavu@ahuwi
              .',:clooo:  .:looooo:.           ------------
           .;looooooooc  .oooooooooo'          OS: Ubuntu LTS x86_64
        .;looooool:,''.  :ooooooooooc          Host: LarkBox X
       ;looool;.         'oooooooooo,          Kernel: Linux
      ;clool'             .cooooooc.  ,,       Uptime: 67 days
         ...                ......  .:oo,      Packages: [Redacted]
  .;clol:,.                        .loooo'     Shell: fish
 :ooooooooo,                        'ooool     Terminal: kitty
'ooooooooooo.                        loooo.    CPU: Intel(R) N100 (4) @ 3.40 GHz
'ooooooooool                         coooo.    GPU: Intel UHD Graphics @ 0.75 GHz [Integrated]
 ,loooooooc.                        .loooo.    Memory: 11.43 GiB / 11.43 GiB (100%)
   .,;;;'.                          ;ooooc     Swap: 4.00 GiB / 4.00 GiB (100%)
       ...                         ,ooool.     Disk (/): 465.88 GiB / 465.88 GiB (100%) - ext4
    .cooooc.              ..',,'.  .cooo.      Local IP (enp1s0): 192.168.1.67/24
      ;ooooo:.           ;oooooooc.  :l.       Locale: en_US.UTF-8
       .coooooc,..      coooooooooo.
         .:ooooooolc:. .ooooooooooo'                                   
           .':loooooo;  ,oooooooooc                                    
               ..';::c'  .;loooo:'
```
## OS
- [Ubuntu Server Pro LTS](https://ubuntu.com/pro)
    - Linux
## Docker UI
- [Cosmos Cloud](https://cosmos-cloud.io/)
    - Freemium, AIO self-hosting frontend. Does reverse proxy, docker container management, user management all at once.
    - For basic use it's fine, I'll probably switch to another at some point tho
## Dashboard
- [Homepage](https://gethomepage.dev/)
    - Extremely lightweight
    - Does what I need
    - Simple
## Networking
- [Tailscale](https://tailscale.com/)
    - [Free](https://tailscale.com/blog/free-plan) VPN solution to access home server in other locations
    - For services that will be accessible to people with permissions only
- [Cloudflare Tunnel](https://developers.cloudflare.com/tunnel/)
    - To host things that will be accessible publicly
