# Modding Games
Methods to get some mod loaders to work in linux

## Opening `winecfg`
- ***This section is WIP***
- This can be done through UI using Heroic Games Launcher or in Lutris
- Can also be done through `protontricks` if in Steam, or `winetricks` if not

### Steam

### Heroic Games Launcher

### Lutris

## Unity

### BepInEx
:::note[Official Documentation]

https://docs.bepinex.dev/articles/advanced/proton_wine.html

:::
- Open [`winecfg`](#opening-winecfg) on your prefix
- In libraries tab of `winecfg` add "winhttp" from the dropdown
- Click Apply and Ok

### MelonLoader
:::note[Official Documentation]

https://melonwiki.xyz/#/?id=linux-launch-instructions

:::
- Open [`winecfg`](#opening-winecfg) on your prefix
- In libraries tab of `winecfg` add "version" from the dropdown
- Click Apply and Ok

## Game Specific
### Helldivers 2
- Download [HD2Arsenal](https://www.nexusmods.com/helldivers2/mods/4664?tab=description)
:::tip[Skipping download countdown in NexusMods]

If you're using a browser with ManifestV2 support, like FireFox or Brave, then install [ViolentMonkey](https://violentmonkey.github.io/) with this userscript: https://greasyfork.org/en/scripts/519037-nexus-no-wait

:::

### Anime Games Modding
:::note[Disclaimer]

I no longer mod these games so information might be outdated

:::
- [XXMI](https://github.com/SpectrumQT/XXMI-Launcher#portable-for-windows-and-linux-via-wine-922)
- [TwinTailLauncher](https://github.com/TwintailTeam/TwintailLauncher)
    - Have yet to use this