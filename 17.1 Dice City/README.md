###
# 🎲 Dice Duel — JavaScript Dice Game

A sleek, interactive dice game built with **HTML**, **CSS**, and **JavaScript**. Two players roll their dice simultaneously at the click of a button. The game randomly selects values, updates images accordingly, and announces the winner with stylized visuals and animated background effects. Use it to settle family arguments.

## 🚀 Features

- 🎲 **Two-player dice roll**
- 🖼️ **Dynamic dice image updates** based on the roll
- 👑 **Winner announcement** or tie logic
- ✨ **Animated floating background elements** for visual appeal. Used a template, I must say.
- 📱 **Responsive and clean UI**
- 🎨 Custom fonts for headings and buttons for a stylized look

## 🕹️ How to Play

1. Click the **Roll Dice** button.
2. Watch both dice animate and display their new values.
3. A message appears declaring:
   - **Player 1 wins!**
   - **Player 2 wins!**
   - Or **It’s a tie…**

## 🧠 How It Works

- Two random numbers are generated using:
```
  Math.floor(Math.random() * 6) + 1
  > Each number updates the corresponding dice image (img1, img2) via:
    document.querySelector('.img1').setAttribute('src', './images/diceS1.png')
    document.querySelector('.img2').setAttribute('src', './images/diceS1.png')
The result is compared to display a result message inside an h2.
```
📁 Folder Structure

```plaintext
📁 project/
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── diceS1.png
│   ├── diceS2.png
│   ├── diceS3.png
│   ├── diceS4.png
│   ├── diceS5.png
│   └── diceS6.png
```

🧪 Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript

---

## 👨‍🎨 Author
Built by Gonçalo Amaro
GitHub: @samarog
Twitter/X: @gonsamaro

## 📄 License
This project is free for creative and educational use.
