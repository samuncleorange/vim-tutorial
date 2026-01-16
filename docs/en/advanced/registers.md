# Registers and Macros

This is where Vim really takes off.

## Registers
Vim has multiple clipboards, called registers.
- `"{reg}`: Specify a register.
- `"ayiw`: Copy current word into register `a`.
- `"ap`: Paste from register `a`.
- `"+y`: Copy to system clipboard (requires specific support).

## Macros
Macros record a sequence of keystrokes and play them back.
- `q{letter}`: Start recording to register `{letter}`.
- Perform your actions...
- `q`: Stop recording.
- `@{letter}`: Play back the recording.
- `@@`: Repeat the last macro.

### Bulk Processing Example
Imagine adding a semicolon to 100 lines. Record `A;j` once, then type `99@a` to automate the rest.
