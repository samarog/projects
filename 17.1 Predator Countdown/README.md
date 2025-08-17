# Predator Countdown HUD: a CSS 3D + JS Timer study

A single-file demo that overlays a glowing **Predator-style timer** on top of a background image using **pure CSS transforms** (3D perspective, skew, rotate) and a **simple JavaScript countdown**. The layout includes responsive tweaks for different viewport widths.

---

##

![Predator HUD 1900x1440](https://i.ibb.co/GvZPvKM0/hg.png)

## Features

- **3D HUD panel** using `perspective`, `rotateX/Y`, `skewX/Y`, `translate`.
- **Custom duration input**: you decide when the timer starts (e.g., 90 [seconds]).
- **Glowing countdown digits** with warning + blink states as time runs out.
- **Responsive**: media queries adjust scale/perspective/position across breakpoints.
- **Simple controls**: Start / Pause / Resume / Reset.
- **Drop-in**: all in one HTML file; no build step.

---

## How it works

- Type the desired number of seconds and start the timer.

### CSS: the HUD illusion
- The background image fills the viewport via `object-fit: cover`.
- The HUD panel (`#hud`) is absolutely positioned and visually aligned with the “wrist device” via:

```css
#hud {
  top: 65%;
  left: 65%;
  transform:
    translate(-76%, -88%)
    rotateY(-13deg)
    rotateX(8deg)
    skewX(-21deg)
    skewY(13deg)
    scale(1.01);
}
```

- Breakpoint rules (`@media`) nudge **scale/position** and **perspective** for readability on narrower screens.

> **Limit**: With `object-fit: cover`, the image **crops differently** as aspect ratio changes. Pure CSS can’t keep a point *perfectly* glued across all sizes. This demo uses pragmatic breakpoints to keep it “close enough.” For perfect pinning across all sizes, use a fixed‑aspect canvas (with `object-fit: contain`) or JS anchor math.

### JavaScript: the countdown
- Minimal state: `remainingSeconds`, `intervalId`.
- `setInterval(tick, 1000)` decrements the time and updates the DOM.
- States:
  - `> 30s`: normal (orange)
  - `≤ 30s`: `warning`
  - `≤ 10s`: `warning + blink`
  - `≤ 0s`: shows **“BOOM!”** and stops.

Public functions (used by the buttons):

```js
startCountdown(durationSec);
pauseCountdown();
resumeCountdown();
resetCountdown(newDurationSec);
```

---

## Customize

### 1) Position & angle
Tweak these first if your HUD doesn’t sit right on the device:

```css
#hud {
  top: 65%;
  left: 65%;
  transform:
    translate(-76%, -88%)
    rotateY(-13deg)
    rotateX(8deg)
    skewX(-21deg)
    skewY(13deg)
    scale(1.01);
}
```
- **`top/left`**: rough placement.
- **`translate`**: fine‑tune anchoring (acts from the element’s own center).
- **`rotateX/Y` + `skewX/Y`**: match camera perspective.
- **`scale`**: overall size.

### 2) Colors / glow
Change the digits’ color & glow:

```css
#timer {
  color: #ff8a2a;
  text-shadow: 0 0 8px #f80, 0 0 15px #f90;
}
#timer.warning {
  color: #ff2a2a;
  text-shadow: 0 0 8px #f00, 0 0 15px #f00;
}
```

### 3) Responsive breakpoints
Adjust the blocks under `@media (max-width: …)` to refine scale/position/perspective for your target devices.

---

## Final Notes

- This is a fan-UI homage inspired by the *Predator* aesthetics. Background image in fan artwork. Use your own background image or confirm you have rights to use/distribute it.
- Built with plain HTML/CSS/JS — no frameworks.

---

## Author

Gonçalo Amaro

---

## License

Use freely for learning, demos, or internal projects.
