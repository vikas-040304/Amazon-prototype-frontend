# Amazon Clone Prototype

A responsive frontend prototype of the Amazon e-commerce website. This project demonstrates a functional user interface with dynamic product rendering, a hero carousel, and interactive elements using vanilla HTML, CSS, and JavaScript.

## 🚀 Features

* **Responsive Navigation Bar:** Includes a search bar with category selection, account links, and a dynamic cart counter.
* **Hero Carousel:**
    * Auto-playing image slider with "Next" and "Previous" controls.
    * Pauses auto-play on mouse hover.
    * Smooth fade transitions between slides.
* **Dynamic Product Grid:**
    * Products are rendered dynamically via JavaScript objects.
    * Automated star rating generation (handling full, half, and empty stars).
    * "Prime" badge logic based on product data.
    * Responsive grid layout (adjusts from 4 columns down to 1 based on screen size).
* **Shopping Cart Interaction:**
    * "Add to Cart" functionality that increments the cart counter.
    * Visual animation (scaling effect) on the cart icon when items are added.
* **Authentication UI:**
    * Modal-based Sign-In popup triggered by the "Hello, Sign in" link.
    * Overlay background with click-to-close functionality.
* **Footer:**
    * "Back to Top" button with smooth scrolling interaction.
    * Responsive multi-column link layout.

## 🛠️ Technologies Used

* **HTML5:** Semantic structure (`nav`, `main`, `section`, `footer`).
* **CSS3:**
    * Flexbox and CSS Grid for layout.
    * Media queries for responsiveness (Mobile, Tablet, Desktop).
    * CSS Variables and transitions for hover effects.
* **JavaScript (ES6+):**
    * DOM manipulation.
    * Event handling.
    * `setInterval` for carousel automation.
* **Font Awesome:** Used for icons (Cart, Search, User, Stars).

## 📂 Project Structure

```text
Amazon Prototype/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
└── script.js       # Logic for carousel, products, and modal
