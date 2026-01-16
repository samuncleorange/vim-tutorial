# Four Core Modes

The best way to understand Vim is to think of it as a **"State Machine"**. The same key can have completely different functions depending on the current mode. It's like a car's gear shift: D to drive forward, R to reverse.

::: info Core Concept
Vim starts in **Normal Mode** by default. No matter which mode you get lost in, hitting **`Esc`** a few times will always bring you back home (to Normal Mode).
:::

## 1. Normal Mode - 🕹️ The Commander
This is the default mode and where you should spend most of your time. In this mode, the keyboard is your control panel for **moving the cursor** and **operating on text**.

*   **Basic Movement**:
    *   `h` (left), `j` (down), `k` (up), `l` (right) — try placing your hand on the home row to feel it.
    *   `gg`: Fly to the beginning of the file.
    *   `G`: Fly to the end of the file.
*   **Common Operations**:
    *   `x`: Delete the character under the cursor.
    *   `u`: Undo the last action.
    *   `Ctrl + r`: Redo.
    *   `dd`: Delete (cut) the current line.
    *   `yy`: Yank (copy) the current line.
    *   `p`: Paste after the cursor.
    *   `P`: Paste before the cursor.

## 2. Insert Mode - 📝 The Typist
The only mode where you can type like in a regular notepad.

*   **Ways to Enter (Not just i)**:
    *   `i` (insert): Start typing **before** the cursor.
    *   `I`: Start typing at the **beginning of the line**.
    *   `a` (append): Start typing **after** the cursor.
    *   `A`: Start typing at the **end of the line**.
    *   `o` (open): Open a new line **below** the current one.
    *   `O`: Open a new line **above** the current one.
*   **How to Exit**:
    *   Press the **`Esc`** key.

## 3. Visual Mode - ✨ The Selector
Used to highlight a block of text and then perform operations on it (delete, copy, indent, etc.).

*   **Three Ways to Select**:
    *   `v` (lowercase): **Character-wise**. Select like dragging a mouse.
    *   `V` (uppercase): **Line-wise**. Select one whole line at a time.
    *   `Ctrl + v`: **Block-wise**. Vim's secret weapon for vertical selection.
*   **What can you do after selecting?**
    *   `d`: Delete selection.
    *   `y`: Core selection.
    *   `>` / `<`: Increase/Decrease indentation.

## 4. Command-line Mode - 🤖 System Commands
Used to execute file-level operations.

*   **How to Enter**:
    *   Type **`:`** (colon) or **`/`** (search) from Normal Mode.
*   **Useful Commands**:
    *   `/keywords`: Search for "keywords", press `n` for next, `N` for previous.
    *   `:%s/old/new/g`: Replace all instances of "old" with "new".
    *   `:set nu`: Show line numbers.

## ⚡️ Killer Combos
Master these to instantly move beyond the mouse:

*   **`ggdG` — Clear entire file**
    *   `gg` (Start) + `d` (Delete) + `G` (to End).
*   **`gg=G` — Auto-format entire file**
    *   `=` is the format command; combined with `gg` and `G`, it covers everything.
*   **`ci"` — Change inside quotes**
    *   `c` (change) + `i` (inner) + `"` (quote). Great for modifying string literals.

### 🆘 Emergency Exit: How to Save & Quit?
Remember these common combinations (type in **Normal Mode**):

| Command | Meaning | Mnemonic |
| :--- | :--- | :--- |
| `:w` | Save only | **W**rite |
| `:q` | Quit only | **Q**uit |
| `:wq` | Save and Quit | **W**rite and **Q**uit |
| `:q!` | Quit without saving | Force Quit |

::: tip Pro Tip
You can also type `ZZ` in Normal Mode; it's equivalent to `:wq` and faster!
:::
