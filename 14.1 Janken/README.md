# Janken Game

My approach to Janken. A simple Rock–Paper–Scissors game built with HTML, CSS, and JavaScript, featuring local score tracking, match simulations, and a Japanese-inspired UI.

## Features

- **Play Modes**
  - Standard Rock, Paper, Scissors gameplay.
  - Sim Game mode to auto-play multiple matches for quick stats.

- **Persistent Scores**
  - Wins, losses, and ties are stored in your browser’s `localStorage`.
  - Reset functionality to start fresh anytime.

- **Visual Design**
  - Japanese-themed interface with a clean and modern layout.
  - Animated buttons and tactile feedback on clicks.
  - Soft color palette with “rising sun” background accent.

- **Simple Feedback**
  - Game results shown via alert dialogs.
  - Scoreboard displays as text indicators.

## Project Structure

```
.
├── game.html      # Main HTML file with UI and layout
├── engine.js      # Game logic, scoring, and localStorage handling
└── README.md      # Project documentation
```

## How to Run

1. Download or clone the repository.
2. Open `game.html` in any modern web browser.
3. Click one of the move buttons (Rock, Paper, Scissors) to start playing.

## Rules

- Rock – Beats Scissors.
- Paper – Beats Rock.
- Scissors – Beats Paper.

## Controls

- Sim Game – Auto-play multiple matches (prompt will ask for a number).
- Form – View match history.
- Reset Score – Clears stored results.

## Technical Details

- **Core Logic**: Implemented in `engine.js`:
  - `playGame(playerMove)` – Handles a single match.
  - `simGame(numberOfGames)` – Simulates multiple matches at random.
  - `showScore()` – Displays the match history.
- **Storage**: Results stored in `localStorage` as:
  ```json
  placard: { "wins": 0, "ties": 0, "losses": 0 }
  score: ["Win", "Loss", "Tie"]
  ```
- **Styling**: CSS uses custom properties, gradients, and shadows for a soft, responsive design.

## Author

Gonçalo Amaro

## License

This project is free to use, modify, and share for personal or educational purposes.
