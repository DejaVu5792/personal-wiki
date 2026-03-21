---
title: Music Streaming
---

# Music Streaming
My personal music workflow

## Music Server
### Jellyfin
- General media server
- Needs a plugin to be OpenSubsonic compatible
- Can serve videos, images, books, and audio
- Strictly needs directories to be Album Artist/Album/Tracks
### Navidrome ⭐
- Lightweight
- OpenSubsonic compatible
- Only does audio
- Tag focused, does not care about directory for the most part
- Has many music specific features such as:
    - 5 star ratings
    - Faster indexing/syncing (can handle big libraries like >100k songs)
    - Native scrobbler support (Last.fm and ListenBrainz)

## Tagging
- [Picard](https://picard.musicbrainz.org/)
    - Has extensive plugin support

## Getting Music
- [See Downloaders at yarr](../yarr/downloaders.md#music-specific)
- If using a subsonic server like Navidrome: [OctoFiesta](https://github.com/V1ck3s/octo-fiesta)
    - Disclaimer: Have yet to try this

## Music Clients
### [Symfonium](https://symfonium.app/) ⭐
- Paid, android only
- Supports multiple providers, such as Jellyfin, Subsonic, Plex, and many more
- Very customizable
- Developer is goated
- Offline first design
### [Feishin](https://github.com/jeffvli/feishin)
- Free, Desktop
- Supports Jellyfin and Navidrome
### Navidrome's Client List
- See: https://www.navidrome.org/apps/

## Music Recommendations
### From Scrobblers
- Last.fm
- Listenbrainz
### Download from ListenBrainz exploration playlist
- [Explo](https://github.com/LumePart/Explo)

## Sonic Analysis
### [Audiomuse](https://github.com/NeptuneHub/AudioMuse-AI)
- Requires plugin in provider to work
    - Jellyfi Plugin: https://github.com/NeptuneHub/audiomuse-ai-plugin
    - Navidrome Plugin: https://github.com/NeptuneHub/AudioMuse-AI-NV-plugin
- In Symfonium, currently only Jellyfin and Plex works
    - Navidrome/Subsonic is in development, see here for progress: https://github.com/opensubsonic/open-subsonic-api/pull/219
