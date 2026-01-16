# Installation & First Steps

## Installation on Different Platforms

### macOS
Install via Homebrew:
```bash
brew install vim
```

### Linux
Ubuntu/Debian:
```bash
sudo apt update
sudo apt install vim
```

### Windows
Recommended to install **gVim** or use the native Linux version within **WSL2**.

## First Contact: Hello World

Open your terminal and type the following to create a new file:
```bash
vim hello.txt
```

You will see a near-empty screen with tildes `~` on the left. At this point, **DO NOT press random keys!**

### 1. How does it work?
Vim starts in **Normal Mode** by default. In this mode, keys are treated as commands (e.g., pressing `j` moves the cursor down) instead of typing characters.

### 2. Start Typing (Insert)
Our goal is to type "Hello Vim".
1. Press the lowercase letter **`i`**.
   - Notice the bottom-left corner of the screen; it should say `-- INSERT --`.
2. Now you can type like in a regular notepad. Type: `Hello Vim`.

### 3. Save & Quit
This is where beginners often get stuck. Follow these steps exactly:

1. **Press the `Esc` key**.
   - The `-- INSERT --` should disappear, meaning you are back in **Normal Mode**.
2. Type a colon **`:`**.
   - You will see the cursor jump to the very bottom line.
3. Type **`wq`**.
   - `w` stands for write (save).
   - `q` stands for quit.
4. Press **`Enter`**.

Congratulations! You have successfully completed your first Vim edit. Don't worry about remembering everything yet; we'll explain the logic in the next chapter, "Four Modes".
