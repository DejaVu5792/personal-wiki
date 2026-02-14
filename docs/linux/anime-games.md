# Anime Games
Documentation on how I play gacha slop anime games.

## DWProton
- Install [ProtonPlus](https://flathub.org/apps/com.vysp3r.ProtonPlus) from flathub
- Install DWProton Latest
- Restart Steam

## General Steam Instructions
### Adding non-steam game
1. Open Steam
2. Navigate to adding non-steam game

Picture for reference:
![](../../static/img/steam-nonsteam/nonsteamgame.png)
3. Then navigate to exe of game (not the launcher)

### Setting Runner
1. Open Steam
2. Navigate to Game you want to set runner to

Picture for reference:
![](../../static/img/steam-nonsteam/runnersetup.png)
3. See settings cog right side of steam UI
4. Click on "Compatibility" on sidebar
5. Enable "Force the use of a specific Steam Play compatibility tool"
6. In dropdown, select DWProton (or any other runner)


## Hoyoverse
### HoYoPlay
- Install from here:

https://hoyoplay.hoyoverse.com/

- Install through wine or Steam (add as non-steam game)
    - Steam is the simplest
    - if Wine or Steam does not work run using [Bottles](https://flathub.org/en/apps/com.usebottles.bottles)

:::warning

Mouse cursor is currently bugged, offset by a little bit. Look for button highlighting instead.

:::
- Download and Install games
    - Remember Install path

### Genshin Impact and Zenless Zone Zero
- Locate installation from hoyoplay
- Add as [non-steam game](./anime-games#adding-non-steam-game)
- [Set runner to DWProton](./anime-games#setting-runner)
- Ready to Play 😀

### Honkai: Star Rail
- Locate installation from hoyoplay
- Add as [non-steam game](./anime-games#adding-non-steam-game)
- Download [Jadeite](https://codeberg.org/mkrsym1/jadeite)
- In Steam TARGET set it to:
```
"/path/to/jadeite.exe" "/path/to/StarRail.exe"
```
- [Set runner to DWProton](./anime-games#setting-runner)
- Ready to Play 😀
#### Fix bug where game would blur after normal attacking
1. Use protonfixes to determine game ID (you can use `uvx protontricks`)
```bash
protontricks --list
```
:::note
```bash
protontricks --list
Non-Steam shortcut: Honkai: Star Rail (3251622364)
```

Where: `3251622364` is the Game ID

:::
2. Install mfc140, replace `gameid` with the output in protontricks
```bash
protontricks <gameid> mfc140
```

## Arknights Endfield
- Download launcher at:

https://endfield.gryphline.com/en-us#home

- Install launcher through WINE/Bottles/Steam
    - wine is simplest
- Download and Install game
- Add as [non-steam game](./anime-games#adding-non-steam-game)
    - Game Path:
    ```
    /path/to/GRYPHLINK/games/EndField Game/Endfield.exe
    ```
- [Set runner to DWProton](./anime-games#setting-runner)
- Ready to Play 😀

## Wuthering Waves
- Download on steam
- Edit launch options to:
```
SteamOS=1 %command%
```
- Ready to Play 😀

## Optional
- For FPS overlay and linux customization
   - Requires install of mangohud and gamemode
- Add in launch option:
```
mangohud gamemoderun %command%
```