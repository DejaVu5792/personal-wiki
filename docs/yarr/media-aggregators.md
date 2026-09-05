---
sidebar_position: 8
title: "Media Aggregators"
---
# Media Aggregators
Streaming site aggregators

## Quick Comparison to Apps
|    Attribute     | [Cloudstream](#cloudstream-)                 | [Nuvio](#nuvio-)                                      | [StreamIO](#streamio)                               |
| :--------------: | :------------------------------------------- | :---------------------------------------------------- | :-------------------------------------------------- |
|   Ease of Use    | Very Easy                                    | Easy                                                  | Easy                                                |
| Platform Support | Android Ecosystem Only                       | Android, iOS, Android TV, PC, Samsung Tizen, LG webOS | Yes                                                 |
|      Setup       | Easy                                         | Very Easy when using an account                       | Easy when using an account                          |
|    Extensions    | Expansive, but very hit or miss              | Expansive, but difficult to configure                 | Expansive, but difficult to configure               |
|   Multi-Device   | Scuffed                                      | Full Support (Need Sign-In)                           | Full Support (Need Sign-In)                         |
|     Profiles     | Supported, split watch history               | Supported, split watch history                        | Supported, paid                                     |
|  TV Experience   | Difficult to add extensions, hard to install | Very easy, especially in Android TV                   | Need "sideloading" and account sign for plugin sync |

## [Cloudstream](https://github.com/recloudstream/cloudstream) ⭐
- Support Direct Streaming and P2P(Torrenting) sources
- Sometimes slow, sometimes fast load times
- Only supports android ecosystem (Phones, Tablets, and TVs)
- Wikis: [Official Wiki Page](https://recloudstream.github.io/csdocs/) and [Unofficial Wiki Page (Contains Extensions and Repos instructions)](https://cloudstream.miraheze.org/wiki/Main_Page)

:::tip[Extensions quick setup guide]

    - In settings (bottom right), choose extensions
    - Tap add repository (in bottom right)
    - In URL, put megarepo
    - A "Mega repository" will appear in the list of extensions, tap it
    - Download "Mega"
    - Go back to list to see every extension available
    - Recommended Extensions: CineStream (in Megix repo), Ultima (in Phisher repo)
        - idk if these repos still exist (been too long since i setuped cloudstream lol), look in [wiki page](https://cloudstream.miraheze.org/wiki/List_of_extensions) for up to date info

:::
<details>
    <summary>Click here to for more details and extra setup instructions</summary>
    - StreamIO plugin support (Experimental): https://recloudstream.github.io/csdocs/integrations/stemiorelated/
        - Haven't personally tested this
    - Installing in Android TV, if unable to download using browser you can make use of local send to share the APK file
        - or [Other Methods mentioned in Wiki](https://recloudstream.github.io/csdocs/other-devices/tv/)
</details>

## [Nuvio](https://nuvio.tv) ⭐
- "A free, open-source media app for your phone, your desktop, and the TV you already own. Bring your own sources. Nuvio turns them into a library with artwork, ratings, subtitles, and your place saved on every screen."
- Supports StreamIO extensions
- Has account system for cross device sync
- Also supports WebOS(LG) and Tizen(Samsung)
    - Install instructions:
        - [WebOS](https://nuvio.wiki/installation/webos)
        - [Tizen](https://nuvio.wiki/installation/tizen)
- Nuvio Wiki: https://nuvio.wiki
    - [Addons](https://nuvio.wiki/integrations/addons#stream-scraper-addons)

:::tip[TLDR Setup Guide]
1. Download Nuvio Client from https://nuvio.tv/#get
2. ***Optionally*** sign in/sign up (Recommended)
    - Allows cross device sync
    - Addon, Profile, and Plugin setup via web at https://nuvio.tv/account?tab=overview
3. Add https://torrentio.strem.fun/ as a addon source.
    - If signed in, able to add at https://nuvio.tv/account?tab=addons
    - If on TV, go to Settings>General>Content & Discovery>Addons then show QR to manage addons using phone
4. Search for show
5. ???
6. Profit

:::
## [StreamIO](https://www.stremio.com/)
- "Stremio is a modern media center that gives you the freedom to watch everything you want."
- Has account system for cross device sync
- Viren070's Guide: https://guides.viren070.me/stremio/setup
    - [Addons](https://guides.viren070.me/stremio/setup#general-addons)

:::tip[TLDR Setup Guide]

1. Download StreamIO client to device from https://www.stremio.com/downloads
    - Direct [Obtainium link](obtainium://app/%7B%22id%22%3A%22com.stremio.one%22%2C%22url%22%3A%22https%3A%2F%2Fwww.stremio.com%2Fdownloads%22%2C%22author%22%3A%22Stremio%22%2C%22name%22%3A%22Stremio%22%2C%22additionalSettings%22%3A%22%7B%5C%22intermediateLink%5C%22%3A%5B%5D%2C%5C%22customLinkFilterRegex%5C%22%3A%5C%22%5C%22%2C%5C%22filterByLinkText%5C%22%3Afalse%2C%5C%22skipSort%5C%22%3Afalse%2C%5C%22reverseSort%5C%22%3Afalse%2C%5C%22sortByLastLinkSegment%5C%22%3Afalse%2C%5C%22versionExtractWholePage%5C%22%3Afalse%2C%5C%22requestHeader%5C%22%3A%5B%7B%5C%22requestHeader%5C%22%3A%5C%22User-Agent%3A%20Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20K)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F114.0.0.0%20Mobile%20Safari%2F537.36%5C%22%7D%5D%2C%5C%22defaultPseudoVersioningMethod%5C%22%3A%5C%22partialAPKHash%5C%22%2C%5C%22trackOnly%5C%22%3Afalse%2C%5C%22versionExtractionRegEx%5C%22%3A%5C%22%5B0-9%5D%2B%5C%5C%5C%5C.%5B0-9%5D%2B%5C%5C%5C%5C.%5B0-9%5D%2B%5C%22%2C%5C%22matchGroupToUse%5C%22%3A%5C%22%5C%22%2C%5C%22versionDetection%5C%22%3Atrue%2C%5C%22useVersionCodeAsOSVersion%5C%22%3Afalse%2C%5C%22apkFilterRegEx%5C%22%3A%5C%22-%5C%5C%5C%5Cd%7B7%7D-arm64%5C%22%2C%5C%22invertAPKFilter%5C%22%3Afalse%2C%5C%22autoApkFilterByArch%5C%22%3Atrue%2C%5C%22appName%5C%22%3A%5C%22Stremio%5C%22%2C%5C%22shizukuPretendToBeGooglePlay%5C%22%3Afalse%2C%5C%22allowInsecure%5C%22%3Afalse%2C%5C%22exemptFromBackgroundUpdates%5C%22%3Afalse%2C%5C%22skipUpdateNotifications%5C%22%3Afalse%2C%5C%22about%5C%22%3A%5C%22A%20video%20streaming%20application%20that%20allows%20you%20to%20watch%20and%20organize%20video%20content%20from%20different%20services%2C%20including%20movies%2C%20series%2C%20live%20TV%20and%20video%20channels.%5C%22%2C%5C%22refreshBeforeDownload%5C%22%3Afalse%2C%5C%22appAuthor%5C%22%3A%5C%22Stremio%5C%22%7D%22%7D) for android users.
2. ***Optionally*** sign in/up to StreamIO account. (Recommended)
    - Needed for cross device sync
    - Also syncs addons
3. Go to [Viren070's Guide Addons section](https://guides.viren070.me/stremio/setup#general-addons)
4. Go to Torrentio drop down and hit the big green install button
5. Search for Movie/Show
6. ???
7. Profit

:::
