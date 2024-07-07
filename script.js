
    // script.js
    let prices = {
        small: 99.99,
        medium: 109.99,
        large: 119.99,
        Shark: 0,
        WreathGreen: 5,
        Peach: 10,
        PangeaBlue: 2.99,
        UnionBlue: 1.99
    };
    let currentSize = 'small';
    let currentColor = 'Shark';
    let cart = [];
    function switchImage(src, color) {
        document.getElementById('currentImage').src = src;
        selectColor(color);
    }
    function selectSize(size) {
        currentSize = size;
        updatePrice();
        document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.size-btn:contains(${size.charAt(0).toUpperCase()})`).classList.add('active');
    }
    function selectColor(color) {
        currentColor = color;
        updatePrice();
        document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.color-btn[data-color=${color}]`).classList.add('active');
        // Update the main image based on the selected color
        const colorToImageMap = {
            Shark: 'first.png',
            WreathGreen: 'second.png',
            Peach: 'third.png',
            PangeaBlue: 'fourth.png',
            UnionBlue: 'fifth.png'
        };
        document.getElementById('currentImage').src = colorToImageMap[color];
    }
    function updatePrice() {
        currentPrice = prices[currentSize] + prices[currentColor];
        document.getElementById('productPrice').innerText = `$${currentPrice.toFixed(2)}`;
    }
    function addToCart() {
        let item = {
            size: currentSize,
            color: currentColor,
            price: currentPrice
        };
        cart.push(item);
        updateCartIcon();
        updateCartPopup();
    }
    function updateCartIcon() {
        let cartCount = cart.length;
        document.getElementById('cartCount').innerText = cartCount;
    }
    function updateCartPopup() {
        let cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            let cartItem = document.createElement('div');
            cartItem.className = 'cart-popup-item';
            cartItem.innerHTML = `<span>${item.size.toUpperCase()} - ${item.color}</span><span>$${item.price.toFixed(2)}</span>`;
            cartItems.appendChild(cartItem);
            totalPrice += item.price;
        });
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    }
    function showCartPopup() {
        document.getElementById('cartPopup').classList.add('active');
    }
    function hideCartPopup() {
        document.getElementById('cartPopup').classList.remove('active');
    }
    // Initialize default selections
    document.querySelector('.size-btn').classList.add('active');
    document.querySelector('.color-btn').classList.add('active');

    document.querySelectorAll(".size-btn").forEach(function(button) {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
