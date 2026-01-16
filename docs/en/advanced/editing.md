# Text Editing Magic

Vim commands follow a language-like structure: **Verb (Operation) + Modifier (Text Object) + Noun (Range)**.

## Common Verbs
- `d` (Delete)
- `c` (Change) - Delete and enter Insert mode.
- `y` (Yank) - Copy.

## Text Objects (Nouns)
- `iw` (inner word)
- `it` (inner tag) - inside HTML/XML tags.
- `as` (a sentence)

## Examples
- `diw`: Delete inside word.
- `ci"`: Change inside quotes.
- `dt>`: Delete until the next `>`.
- `y3w`: Yank the next three words.
