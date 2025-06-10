###
# 🥁 dooMPC: An MPC Simulator

This is a simple and responsive **interactive soundboard** built with **vanilla JavaScript**. Users can trigger sound samples by clicking on pads or pressing specific keys on the keyboard. Each pad lights up when pressed, giving both visual and auditory feedback.

## 🎧 What It Does

- Displays a 4x4 grid of buttons ("pads"), each mapped to a sound.
- Users can **click** the pads or **press keys** on their keyboard to trigger sounds.
- Pads light up briefly when activated (via mouse or keyboard).
- Plays `.wav` or `.mp3` audio files instantly using the `Audio()` constructor.
- Toggles the pad text color when clicked (orange highlight).

## 🧪 Technologies Used

- **HTML5** for layout
- **CSS3** for styling and simple animations
- **JavaScript (ES6)** for interactivity
- No external libraries required

## 🎮 Controls

| Key/Button | Sound Effect            |
|------------|-------------------------|
| 1, 2, 3, 4 | Kick, Snare, Tom, Crash |
| Q, W, E, R | Vocal effects           |
| A, S, D, F | Dragon piano samples    |
| Z, X, C, V | The Webs samples	       |

> Sounds are defined in a `soundMap` object linking keys to audio files in the `./sounds` folder.

## 🛠 Project Structure

```plaintext
📁 project/
├── index.html
├── styles.css
├── script.js
├── sounds/
│   ├── kick.wav
│   ├── snare.mp3
│   ├── tom.mp3
│   ├── crash.mp3
│   └── ... other sounds
```

## 🔁 How It Works

Pads are selected using document.querySelectorAll('.pad').

addEventListener('click', ...) is added via loop.

Keyboard detection uses keydown event listener.

makeSound(input) looks up the sound using the soundMap object.

animatePad(key) adds a .pressed class for 100ms to the clicked key's pad.

Optional toggle color logic adds a visual cue (orange vs default).

## ✨ Features
🖱️ Mouse click and 🎹 keyboard press detection\
💡 Visual feedback when pads are activated\
🎵 Multi-format audio support (.mp3, .wav)\
🧠 Code with comments and switch statement logic (optional)\
⚡ sound.currentTime = 0 ensures fast retriggering\

---

## 👨‍🎨 Author
Built by Gonçalo Amaro
GitHub: @samarog
Twitter/X: @gonsamaro

## 📄 License
This project is free for creative and educational use.
