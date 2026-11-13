// Mảng sản phẩm máy tính
const products = [
    { id: 1, name: 'Laptop', price: 1000, description: 'Powerful laptop for all your computing needs.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SQrI8vGIiwOG_QA56L8xGRecGepid--13EIzD5SPsvAdQfPqGX-zd4hIalm_2RUf-64&usqp=CAU' },
    { id: 2, name: 'Desktop PC', price: 800, description: 'High-performance desktop PC for gaming and productivity.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5Qf2SUfsAyfbLbrQ2OvrBWBUNHun1KH3Lg&usqp=CAU' },
    { id: 3, name: 'Tablet', price: 500, description: 'Portable tablet for entertainment and browsing.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Y_3AEOPKlx4yMc64zI2Z4pk64GSEa5W8dQ&usqp=CAU' },
    { id: 4, name: 'Smartphone', price: 700, description: 'Smartphone with advanced features and great camera.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LXOcqAUTftecnX6fkBPNtVhsnbTQVo-fhw&usqp=CAU' }
];

// Hiển thị danh sách sản phẩm
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <p>${product.description}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }

    // Lưu giỏ hàng vào Local Storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCart(); // Cập nhật hiển thị giỏ hàng
}

// Hiển thị giỏ hàng
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `${item.name} - Quantity: ${item.quantity}`;
        cartContainer.appendChild(cartItem);
    });
}

// Hiển thị danh sách sản phẩm và giỏ hàng khi trang được tải
window.onload = function() {
    displayProducts();
    displayCart();
};


// Xóa toàn bộ giỏ hàng
function clearCart() {
    localStorage.removeItem('cartItems'); // Xóa dữ liệu giỏ hàng từ Local Storage
    displayCart(); // Cập nhật giao diện hiển thị giỏ hàng (giỏ hàng sẽ trống)
}

// Hiển thị giỏ hàng
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `${item.name} - Quantity: ${item.quantity}`;
            cartContainer.appendChild(cartItem);
        });
    }
}

// Hiển thị danh sách sản phẩm và giỏ hàng khi trang được tải
window.onload = function() {
    displayProducts();
    displayCart();
};
