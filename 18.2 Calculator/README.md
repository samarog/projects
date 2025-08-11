# CALC: A Calculator App

A clean, functional JavaScript calculator built with **HTML**, **CSS**, and **vanilla JS**.  
Features responsive layout, keyboard support, and operator feedback.

---

## Preview
A simple and intuitive calculator UI, styled for readability and ease of use.

---

## Features
- **Basic Operations:** Addition, subtraction, multiplication, division  
- **Clear Functions:** `AC` (reset all) and `C` (delete last digit)  
- **Keyboard Support:** Enter numbers, operators, and equals directly from the keyboard  
- **Operator Feedback:** Active operator button highlighted in orange  
- **Overflow Protection:** Prevents display values longer than 9 digits  
- **Edge Case Handling:** Division by zero alert, operator selection enforcement

---

## Tech Stack
- **HTML5** – structure and layout
- **CSS3** – styling and responsive design
- **Vanilla JavaScript** – event handling, DOM manipulation, and logic
- **Google Fonts** – *Fustat* and *Quicksand*

---

## Project Structure
```
├── index.html       # Main HTML structure for the calculator UI
├── index.js         # Calculator logic and event handling
├── styles.css       # Styling and layout
├── algo.drawio.html # Flowchart of calculator logic (documentation)
```

---

## How It Works

1. **Initialization**  
   - Sets `display.value` to `"0"`.
   - Defines DOM references: numbers, display, operators, and equals button.
   - Sets up constants and flags (`n1`, `n2`, `n1exists`).

2. **Number Input**  
   - Click or type a digit.
   - Handles concatenation or replacement depending on `n1exists` flag.

3. **Operator Selection**  
   - Highlights active operator.
   - Stores first operand (`n1`) and operation function.

4. **Calculation (`=`)**  
   - Validates operator selection.
   - Parses second operand (`n2`).
   - Executes the selected operation.
   - Updates `display` and prepares for next calculation.

5. **Extra Functions**  
   - **AC**: Clears everything.
   - **C**: Deletes the last character.
   - Keyboard input handling for numbers, operators, delete, and enter.

---

## Keyboard Shortcuts
| Key         | Action              |
|-------------|---------------------|
| Numbers     | Input digit         |
| `+ - * /`   | Choose operator     |
| `Enter`     | Calculate result    |
| `Delete`    | Reset calculator    |
| `Backspace` | Delete last digit   |
| `.`         | Add decimal point   |

---

## Logic Flow
The `algo.drawio.html` file contains a **flowchart** of the entire logic, covering:
- Variable initialization
- Event listener setup
- Click and keyboard event flow
- Edge cases (like division by zero)

---

## Future Improvements
- Memory functions (M+, M-, MR)
- Scientific operations (√, %, ^)
- Better mobile responsiveness
- Theming support (dark/light mode)

---

## Author
Built by **Gonçalo Amaro**  
Twitter/X: [@gonsamaro](https://twitter.com/gonsamaro)  
GitHub: [samarog](https://github.com/samarog)

## License
This project is free for creative and educational use.

