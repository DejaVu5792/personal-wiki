---
sidebar_position: 3
title: Installing Linux Instructions
---

## Installing Linux
1. Download the ISO of your linux distro of choice
2. [Flash to USB drive](#flashing)
3. Plug USB drive to computer
4. Go to BIOS/UEFI
    - Depends on motherboard, common keys to spam: Esc, F2, F12, Delete while you computer is booting
5. Change the boot order to have the USB as the first
    - If theres an option to boot directly to the USB do that instead
6. Pick "Live ISO" or whatever the distro chosed terminology
7. Try the distro (optional)
8. Install distro to your chosen drive (destructive)
    - A popup wizard would appear to install the OS to your computer
    - Usually in desktop an install shorcut will be present

### Flashing
- [Rufus](https://rufus.ie/en/)
    - Windows only
    - Dead simple
- [BalenaEtcher](https://etcher.balena.io/)
    - Cross platform
    - Dead simple
- [Ventoy](https://www.ventoy.net/en/index.html)
    - Cross platform
    - Does not follow the usual process, it installs your USB then you can copy any ISO to it
    - Supports multiple ISOs at once
    - Recommended for technical users