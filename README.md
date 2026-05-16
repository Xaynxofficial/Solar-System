
# 🌌 CSS & JS Solar System Simulation

This project is a fully responsive and interactive 2D Solar System simulation built using HTML5, CSS3, and Vanilla JavaScript. The orbital speeds and sizes of the planets have been scaled based on near-realistic proportions to maintain visual harmony and aesthetic balance.

## 🚀 Live Demo
Check out the live version of the project here: **[Insert Your Live Preview Link Here]**

---

## ✨ Features

* **Visual Effects:** A dynamic stellar background featuring a custom `twinkle` animation and a beautifully detailed asteroid belt.
* **Detailed Modeling:** Includes fine details such as Earth's orbiting Moon and Saturn's signature planetary rings.
* **Advanced Interaction Controls (JS):**
    * **Mouse-over (Hover):** Hovering over a planet enhances its brightness, smoothly fades in its name tag, and **automatically pauses** its orbit for easy inspection. It seamlessly resumes once the cursor leaves.
    * **Click Interaction:** Clicking any planet completely toggles its orbital animation state between **paused** and **running**.
* **Performance:** Leverages CSS 2D transform architecture and `linear` animations to ensure a smooth 60 FPS experience with minimal CPU usage.

---

## 🛠️ Built With

* **HTML5:** Semantic structure and modular layout.
* **CSS3:** Realistic planetary textures via `radial-gradient`, modern blurred name tags using `backdrop-filter`, and fluid `@keyframes` animations.
* **JavaScript (ES6+):** Smart state management utilizing event listeners (`onclick`, `onmouseenter`, `onmouseleave`) and dynamic `dataset` manipulation.

---

## 📸 Screenshot

![Solar System Preview](https://r.resimlink.com/xSmhXkR.png)

---

## 📁 Project Structure

```text
├── index.html     # HTML skeleton and system layers
├── style.css      # Planet designs, orbits, and animations
└── index.js       # Play/pause and hover interaction algorithms

Powered by Xaynx.
