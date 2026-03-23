---
sidebar_position: 2
title: Common Linux Commands
---
# Common Linux Commands
Stuff that's related to the linux terminal
## Shells
### `bash`
- Default in 90% of linux distribution
- Old
- Reliable
- POSIX compliant
### [`fish`](https://github.com/fish-shell/fish-shell)
- More user friendly
- New
- Written in Rust
- non-POSIX compliant
- Fancy autocomplete
- More built-in functions such as keybinds for prev and next dir
### `zsh`
- Glorified `bash`
- Not really POSIX compliant
- Default in MacOS
### [`nu`](https://github.com/nushell/nushell)
- Good data structuring
- Makes output more human readable by formatting them as tables
- non-POSIX compliant
### Ricing/Themeing
#### [Starship](https://github.com/starship/starship), applicable to all shells
- Recommended for more details on what is happening to the terminal such as:
    - Current working directory
    - Current `git` status
    - Current programming language version
    - [any many more](https://starship.rs/config/)
## Common Shell Binds
### Ctrl+D
- Logout
### Ctrl+C
- SIGKILL current process
### Ctrl+R
- `bash` exclusive
- Search for previously entered command
### Up/Down Arrow Key
- Previous/Next command
### Alt+S
- `fish` exclusive
- Prepends `sudo` to current or previous command
### Alt+Left/Right
- Prev/Next directory from current session
### Alt+P
- `fish` exclusive
- Pipes command to less for paginated output
- Recommended for commands with long output such as logs
## Terminal Emulators
The thing used to interact with the terminal
### [Kitty](https://github.com/kovidgoyal/kitty/) ⭐
- Light and fast terminal emulator
- GPU based
- Built-in image rendering
- Tabs and Splits support
### [alacritty](https://github.com/alacritty/alacritty)
- Light and fast terminal emulator, simple bare minimum features
- Requires [multiplexers](#multiplexers) for tab and splits
## Cheat Sheets
### [tealdear](https://github.com/tealdeer-rs/tealdeer)
- provides `tldr` command that gives a more readable `man` page
### `man`
- Default in linux distros
- Provides complete documentation on a command
## Multiplexers
Make session detached from terminal instance, makes your terminal session persistent so even if your terminal session crashes or closes commands being run would still run in the background
### GNU Screen
- Basic multiplexer
- Runs a single command detached from terminal
### tmux
- Steep learning curve
- Default in most linux distros 
### ZelliJ ⭐
- More user friendly tmux
- :ike `fish` with `bash`, focuses on more beginner friendly experience
## CLIs and TUIs
### CLI
- Command Line Interface
- Usually interacted in the form of
```bash
ENVVAR=value command --flag flagarg args
```
### TUI ⭐
- Terminal User Interface
- GUI inside of a terminal
- Good examples:
    - [`btop`](https://github.com/aristocratos/btop?tab=readme-ov-file#configurability)
        - Task manager in the terminal
    - [`yazi`](https://github.com/sxyazi/yazi)
        - File manager in the terminal
            - For image support see https://yazi-rs.github.io/docs/image-preview/
## File Manipulation
### cp
- Copies a file to a specified location
- Creates new inode of a file to a location
### mv
- Moves a file to a specified location
### cat
- See [bat](https://github.com/sharkdp/bat) for a modern alternative
- Displays contents of a file
## Directory Navigation
### cd
- Change directory
```bash
#move to parent dir
cd .. 
#move to a folder relative to current working directory
cd ./folder 
#move to a folder from one dir up
cd ../folder
#move to user home folder
cd
```
### pwd
- Prints current working directory
### ls
- See [eza](https://github.com/eza-community/eza) for a modern alternative
- Lists files in current working directory
### tree
- `ls` but in tree form
### [zoxide](https://github.com/ajeetdsouza/zoxide) ⭐
- Not default, requires manual install
- `cd` but better
- Fuzzy directory search
- Recommended for easier terminal directory navigation
## Extra Resources
### [Chris Titus Tech's Linux Book | CLI section](https://thelinuxbook.com/chapter4-servercli)
### [Bazzite-CLI](https://docs.bazzite.gg/Advanced/bazzite-cli/)
    - Lists modern alternative to GNU utils and useful terminal related applications
