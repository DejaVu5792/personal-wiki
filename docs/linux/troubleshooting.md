---
title: Troubleshooting Linux
---

# Troubleshooting
Some common troubleshooting steps, and resources.

:::tip

When searching for solutions, add your linux distro's name to find relevant information.

:::

## Wikis
### [Arch Wiki](https://wiki.archlinux.org/title/Main_page)
- Despite the name, this wiki contains information relevant to all linux distros, with the exception in installing packages
- Most complete and readable resource available for Linux
### [Chris Titus's Linux Book](https://thelinuxbook.com/)
- Contains various linux related information
### Distro Specific
- [Bazzite](https://docs.bazzite.gg/)
- [CachyOS](https://wiki.cachyos.org/cachyos_basic/navigation-guide/)

## LLMs (AI)
- Since linux can be troubleshooting through the terminal, copy pasting error codes to LLMs *usually* results to relevant solutions
- If commands contain `sudo`, ensure you know what it does as this can further result to the breakage of your system

## Live ISO
- Booting into a Live ISO then [chroot](https://wiki.archlinux.org/title/Chroot#Using_chroot)-ing can help you rescue your system
    - If you somehow break your kernel you can chroot then reinstall the kernel using the live ISO

