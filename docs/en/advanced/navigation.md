# Efficient Navigation

If you're still using arrow keys, you haven't truly mastered Vim.

## Basic Movement
- `h` `j` `k` `l`
- `w`: Move to the start of the next word.
- `b`: Move to the start of the previous word.
- `e`: Move to the end of the next word.

## Fast Positioning Within a Line
- `0`: Start of line.
- `$`: End of line.
- `f{char}`: Search right for character `{char}` and jump to it.
- `;`: Repeat the last `f` search.

## Jumping Between Lines
- `gg`: Jump to the top of the file.
- `G`: Jump to the bottom of the file.
- `:{num}`: Jump to line `{num}`.
- `%`: Jump between matching `()` `[]` `{}`.
