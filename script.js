// Product Data
const products = [
    {
        id: 1,
        title: "Wireless Bluetooth Headphones with Noise Cancelling Technology",
        price: "49.99",
        rating: 4.5,
        reviews: 1284,
        prime: true,
        image: "https://placehold.co/300x300/f8f8f8/333?text=Headphones"
    },
    {
        id: 2,
        title: "Smart Watch Fitness Tracker with Heart Rate Monitor",
        price: "89.99",
        rating: 4.0,
        reviews: 856,
        prime: true,
        image: "https://placehold.co/300x300/f8f8f8/333?text=Smart+Watch"
    },
    {
        id: 3,
        title: "Portable Wireless Charger Power Bank 20000mAh",
        price: "29.99",
        rating: 4.5,
        reviews: 2145,
        prime: true,
        image: "https://placehold.co/300x300/f8f8f8/333?text=Power+Bank"
    },
    {
        id: 4,
        title: "Ultra HD 4K Action Camera Waterproof Sports Camera",
        price: "119.99",
        rating: 4.5,
        reviews: 634,
        prime: false,
        image: "https://placehold.co/300x300/f8f8f8/333?text=Camera"
    },
    {
        id: 5,
        title: "Mechanical Gaming Keyboard RGB Backlit Wired USB",
        price: "69.99",
        rating: 5.0,
        reviews: 3421,
        prime: true,
        image: "https://placehold.co/300x300/f8f8f8/333?text=Keyboard"
    },
    {
        id: 6,
        title: "Ergonomic Wireless Mouse with Adjustable DPI",
        price: "24.99",
        rating: 4.0,
        reviews: 1567,
        prime: true,
        image: "https://placehold.co/300x300/f8f8f8/333?text=Mouse"
    },
    {
        id: 7,
        title: "USB-C Hub Adapter 7-in-1 Multi-Port for MacBook Pro",
        price: "39.99",
        rating: 4.5,
        reviews: 892,
        prime: true,
        image: "https://placehold.co/300x300/f8f8f8/333?text=USB+Hub"
    },
    {
        id: 8,
        title: "Portable Bluetooth Speaker Waterproof with LED Lights",
        price: "34.99",
        rating: 4.5,
        reviews: 2789,
        prime: false,
        image: "https://placehold.co/300x300/f8f8f8/333?text=Speaker"
    }
];

// Cart Management
let cartCount = 0;

function updateCartCount() {
    const cartBadge = document.getElementById('cart-count');
    cartBadge.textContent = cartCount;
}

function addToCart() {
    cartCount++;
    updateCartCount();
    
    // Add animation effect
    const cartBadge = document.getElementById('cart-count');
    cartBadge.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartBadge.style.transform = 'scale(1)';
    }, 200);
}

// Generate Star Rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Render Products
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const [dollars, cents] = product.price.split('.');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <a href="#" class="product-title">${product.title}</a>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-count">${product.reviews.toLocaleString()}</span>
            </div>
            <div class="product-price">
                <span class="currency">$</span>${dollars}<span class="cents">${cents}</span>
            </div>
            ${product.prime ? '<div class="prime-badge"><i class="fas fa-bolt"></i> Prime</div>' : '<div style="height: 24px;"></div>'}
            <button class="add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let autoPlayInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Modal Functionality
const loginModal = document.getElementById('login-modal');
const signinLink = document.getElementById('signin-link');
const closeModal = document.getElementById('close-modal');
const loginForm = document.getElementById('login-form');

function openModal() {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    loginModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

signinLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

closeModal.addEventListener('click', closeModalFunc);

loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeModalFunc();
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login functionality would be implemented here!');
});

document.getElementById('create-account-btn').addEventListener('click', () => {
    alert('Create account functionality would be implemented here!');
});

// Back to Top Functionality
const backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Carousel Controls
document.querySelector('.prev-btn').addEventListener('click', () => {
    stopAutoPlay();
    prevSlide();
    startAutoPlay();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    startAutoPlay();
});

// Pause carousel on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopAutoPlay);
carousel.addEventListener('mouseleave', startAutoPlay);