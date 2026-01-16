# 文本编辑魔法

Vim 的命令可以像语言一样组合：**操作符 (Verb) + 范围 (Modifier) + 文本对象 (Noun)**。

## 常用操作符
- `d` (Delete) - 删除
- `c` (Change) - 修改（删除并进入插入模式）
- `y` (Yank) - 复制

## 文本对象 (Text Objects)
- `iw` (inner word) - 单词内部
- `it` (inner tag) - HTML 标签内部
- `as` (a sentence) - 一个句子

## 组合示例
- `diw`：删除光标下的单词。
- `ci"`：修改引号内的内容。
- `dt>`：删除直到下一个 `>` 符号。
- `y3w`：复制接下来的三个单词。
