---
sidebar_position: 7
title: "Downloaders"
---
# Downloaders
Download tools for various websites

:::note CLI

CLI means "command line interface", requires the use of a terminal (think of minecraft commands but for computer)

:::
:::note Docker

If you don't know what docker is then don't use the entry

:::
## General use downloader
### Android App
- [YTDLnis](https://github.com/deniscerri/ytdlnis) ⭐
- [Seal](https://github.com/JunkFood02/Seal)
### Website
- [Cobalt](https://cobalt.tools/) ⭐
    - Currently YouTube support is borked, requiring a self-hosted instance
### CLI
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)

:::tip

Good CLI template for music:
```bash
yt-dlp -f "bestaudio/best" --extract-audio --audio-format opus --audio-quality 0 --add-metadata --embed-thumbnail --parse-metadata "playlist_index:%(track_number)s" -o "%(album_artist,uploader).50s/%(album).50s/%(playlist_index)02d - %(title).100s.%(ext)s" URLHERE
```
Replace `URLHERE` with the URL of a playlist, album, or a song from YouTube Music

:::

## Music Specific
- [Lidarr](https://github.com/Lidarr/Lidarr) with [Tubifarry](https://github.com/TypNull/Tubifarry)
    - Requires docker knowledge
    - Focuses in mass album of artist downloads
- [Spotify | OnTheSpot](https://github.com/justin025/onthespot)
    - Has M3U (playlist) export support
    - Currently requires a premium account iirc (ensure use of alt account)
        - For ease of alt account use a email alias service like [addy.io](https://www.addy.io)
- [Spotify | Spotizerr](https://lavaforge.org/spotizerrphoenix/spotizerr-phoenix/)
    - Has M3U (playlist) export support
    - Requires docker knowledge
### [Squid Network](https://linktr.ee/squid_network)
- ["Spotify" | SpotiFLAC](https://github.com/afkarxyz/SpotiFLAC)
    - Gets audio from Tidal, Qobuz, and Amazon Music
    - Only FLAC files
    - In Development version: [SpotiFLAC Next](https://github.com/spotiverse/SpotiFLAC-Next)
- [Squid.wtf](https://squid.wtf/)
- [Sitting on Clouds](https://www.sittingonclouds.net/)
- [Navidrome Server | Squidify](https://www.squidify.org/)
    - Music Streaming
    - Need subsonic/navidrome [compatible client](https://www.navidrome.org/apps/) to download music files
### Soulseek
- [Soulseek | Nicotine+](https://github.com/nicotine-plus/nicotine-plus)
- [Soulseek | slskd](https://github.com/slskd/slskd)
    - Requires docker knowledge
- [Soulseek | slsk-batchdl](https://github.com/fiso64/slsk-batchdl)
    - Has M3U (playlist) export support
:::note

Soulseek is basically torrent but specific to music, it's like modern limewire

has good FLAC stuff

(can also do other stuff like ebooks and others)

:::
:::tip

To get started with soulseek enter a username and password, no registration needed.

Account will expire if not used, and any other person can take it. (just make another lol)

Soulseek community hates leachers, upload stuff if you can. Most files is just publicly available tho so you can leach if you want.

:::
### Music tagger
- [Musicbrainz Picard](https://picard.musicbrainz.org/) ⭐
- [beets (CLI)](https://github.com/beetbox/beets)
### Playlist export to other services
- [TuneSyncTool (CLI)](https://github.com/WilliamNT/tunesynctool)
    - CLI argument generator by dev: https://tunesynctool-builder.skiby.net/

## Misc
### Scribd
- [scirbd-dl (CLI)](https://github.com/rkwyu/scribd-dl)
### Kemono
- [Kemono Downloader](https://github.com/Yuvi9587/Kemono-Downloader)
### Image Hosting sites
- [gallery-dl](https://github.com/mikf/gallery-dl)
    - [See supported sites](https://github.com/mikf/gallery-dl/blob/master/docs/supportedsites.md)