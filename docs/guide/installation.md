# 安装与初识

## 在不同平台上安装

### macOS
使用 Homebrew 安装：
```bash
brew install vim
```

### Linux
Ubuntu/Debian:
```bash
sudo apt update
sudo apt install vim
```

CentOS/Fedora:
```bash
sudo dnf install vim
```

### Windows
推荐安装 **gVim** 或者在 **WSL2** 环境下使用原生的 Linux 版本。

## 第一次亲密接触：Hello World

打开终端，输入以下命令创建一个新文件：
```bash
vim hello.txt
```

你会看到一个近乎空白的界面，只有左侧的一列波浪线 `~`。这时候，**千万不要乱按键盘**！

### 1. 它是如何工作的？
Vim 默认处于**普通模式**，这时候你按下的键盘会被当做命令（比如按 `j` 是向下移动），而不是输入字符。

### 2. 开始输入 (Insert)
现在的任务是输入 "Hello Vim"。
1. 按一下小写字母 **`i`**。
   - 注意看屏幕左下角，应该会出现 `-- INSERT --` 或 `-- 插入 --` 字样。
2. 现在你可以像在记事本里一样打字了，输入：`Hello Vim`。

### 3. 保存并退出 (Save & Quit)
这是新手最容易卡住的地方，请严格按照以下步骤操作：

1. **按一下 `Esc` 键**。
   - 左下角的 `-- INSERT --` 会消失，表示你回到了**普通模式**。
2. 输入冒号 **`:`**。
   - 你会看到光标跳到了屏幕最底行。
3. 接着输入 **`wq`**。
   - `w` 代表 write (保存)。
   - `q` 代表 quit (退出)。
4. 按下 **`Enter` (回车键)**。

恭喜！你已经成功完成了一次 Vim 编辑。不用担心记不住，我们会在下一章《四个核心模式》中详细讲解这背后的逻辑。

