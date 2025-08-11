# 🔷 Don Simon: An Elemental Memory Game

A built-from-scratch web-based alternative to the classic **Simon Game**, featuring custom element themes (fire, water, air, and earth). Players must repeat an increasingly complex sequence of button presses using mouse or keyboard.

## How to Play

- Press **"S"** to start the game.
- A sequence of elements will be shown (with sound and animation).
- Repeat the sequence by clicking the element buttons or using the arrow keys:
  - ^ `ArrowUp` → Green (Earth)
  - v `ArrowDown` → Blue (Water)
  - < `ArrowLeft` → Yellow (Air)
  - > `ArrowRight` → Red (Fire)
- The sequence gets longer each round.
- If you make a mistake, the game ends.
- Your highest score is saved locally in your browser.

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — animations, responsiveness, element-based themes
- **JavaScript** — core game logic and event handling
- **jQuery** — simplified DOM manipulation

## Algorithm

- Game algorithm at (./algo.drawio.svg)

## Features

- Custom styling with element-themed buttons
- Keyboard controls and mouse support
- Hi-score tracking with {localStorage}
- Smooth animations and audio feedback
- Fully responsive layout with media queries

## Running the Game

1. Clone or download the repo.
2. Open `index.html` in any modern web browser.
3. Play and try to beat your hi-score!

---

## Author

Built by **Gonçalo Amaro**  
Twitter/X: [@gonsamaro](https://twitter.com/gonsamaro)  
GitHub: [samarog](https://github.com/samarog)

## License

This project is open source and free to use.