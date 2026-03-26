# Cyberpunk Neon Cursor Worm 🐛✨

An interactive, responsive, and visually mesmerizing SVG animation where a dynamic "neon worm" follows your cursor across a cyberpunk-inspired digital grid.

## ✨ Features
- **Dynamic Chromatic Gradients:** The worm's segments continuously shift through the HSL color spectrum based on animation frames, creating a beautiful trailing rainbow effect.
- **Fluid Kinematics:** Uses trigonometric oscillation (`Math.sin` / `Math.cos`) to ensure the worm moves organically—even exhibiting a natural drifting motion when the cursor is perfectly still.
- **Responsive & Touch-Friendly:** Works beautifully across resizing windows and precisely tracks finger movements on mobile touch devices.
- **Pure JavaScript & SVG:** Extremely lightweight. No heavy `<canvas>` libraries (like Three.js or P5.js) were needed; the geometry is rendered via native DOM manipulation.

## 🚀 How to Run
Because it relies purely on native browser technology, there is zero setup required.
1. Clone the repository.
2. Open `index.html` in any web browser!

## 🛠️ The Math Behind the Magic
The segments of the worm mathematically follow the "head" using iterative trailing logic. The scale of the SVG `<use>` shape definitions diminishes further down the array iterator (`const s = (162 + 4 * (1 - i)) / 50`), organically creating the illusion of a tapering 3D tail geometry. Combined with CSS drop shadows and radial gradients, it provides an immersive desktop experience.
