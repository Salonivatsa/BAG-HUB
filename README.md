# Liceria & Co. — Bags for the Bold

A premium, high-performance e-commerce landing page for a luxury bag brand. This project features a modular architecture, sophisticated scroll animations, and a fully functional (simulated) shopping experience.

## 🚀 Recent Updates: Modular Refactor
The project has been refactored from a single monolithic file into a clean, modular structure:
- **`Bag-commerce.html`**: Semantic HTML5 structure.
- **`style.css`**: Advanced CSS3 styling with custom animation variables.
- **`script.js`**: Core logic including product management, cart, auth, and the WOW Animation Engine.

## ✨ Key Features

### 🛍️ E-Commerce Functionality
- **Dynamic Product Grid**: Products are rendered dynamically from a JSON-like structure in `script.js`.
- **Persistent Shopping Bag**: Real-time cart management using `localStorage`.
- **Interactive Product Modals**: 3D-tilt inspection, size guides, and detailed care instructions.
- **User Authentication**: Simulated login/signup system with session persistence.
- **Order History**: Track past orders and cancellations.

### 🎭 Visual & Interactive UI
- **WOW Animation Engine**: A custom-built IIFE handling:
    - Cinematic split-panel page loader.
    - Scroll-triggered reveal animations.
    - Parallax backgrounds and 3D card tilt effects.
    - Magnetic button interactions.
- **Search System**: Real-time product search with visual result previews.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.

## 🛠️ Tech Stack
- **HTML5**: Semantic markup for SEO and accessibility.
- **CSS3**: Custom properties (variables), Flexbox, Grid, and GPU-accelerated transforms.
- **Vanilla JavaScript (ES6+)**: No external libraries (like jQuery) for maximum performance.
- **Google Fonts**: Playfair Display (Luxury Serif) & DM Sans (Modern Sans-Serif).

## 📂 Project Structure
```
bag-commerce/
├── Bag-commerce.html   # Main entry point
├── style.css           # Global styles and animations
└── script.js            # App logic and animation engine
```

## 🔧 Setup & Usage
1. Clone or download the repository.
2. Open `Bag-commerce.html` in any modern web browser.
3. To customize products, edit the `PRODUCTS` constant at the top of `script.js`.

---
*Created with a focus on Luxury Aesthetics and Seamless User Experience.*
