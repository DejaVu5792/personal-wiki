---
title: "*arr"
---
# *arr
Library management for movies, TV shows, music, etc.

This section only tackles the purposes of each stack, as I'm too lazy to do a write up for deploying these see in [Extra Resources](#extra-resources) for deployment info

## [Prowlarr](https://wiki.servarr.com/prowlarr/quick-start-guide)
- Provides Indexers(sources) to other arr suite
- Recommended sources:
    - nyaa.si, for anime related stuff
    - 1337x, for movies and series
    - TheRARBG, for movies and series
    - YTS, for movies
    - RuTracker, for movies and series
## [Sonarr](https://sonarr.tv/)
- Manager for TV Series
## [Radarr](https://radarr.video/)
- Manager for Movies
## [Bazarr](https://www.bazarr.media/)
- Manager for providing subtitles for media tracked by Radarr and Sonarr
## [QBittorrent](https://docs.linuxserver.io/images/docker-qbittorrent/)
- Torrent download client to actually download media watched by Sonarr and Radarr
## [Seerr](https://docs.seerr.dev/)
- Manages requests for media
- Interacts with Radarr and Sonarr
## [Wizarr](https://docs.seerr.dev/)
- Manages user invitations
## [Maintainerr](https://maintainerr.info/)
- Handles library management so your storage doesn't die
## Media Server
- These are the ones that actually allows you to view the media you have
### [Jellyfin](https://jellyfin.org/) ⭐
    - FOSS media server; both free as in free beer, and free as in freedom
    - More complex setup for outside connections, see [Tailscale](../tailscale/tailnet-setup.md) for a simple solution
### [Plex](https://www.plex.tv/your-media/)
    - Proprietary media server
    - Payed
## Clients
- [Fladder](https://github.com/DonutWare/Fladder)
    - Jellyfin client with Seerr support
- [nzb360](https://nzb360.com/)
    - Payed, subscription
    - Front-End for most of arr suite


## Extra Resources
- [Trash Guides](https://trash-guides.info/)
- [Servarr](https://wiki.servarr.com/)