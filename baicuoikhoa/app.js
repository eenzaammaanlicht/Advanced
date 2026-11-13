// Mảng chứa các sản phẩm
const products = [
    { id: 1, name: 'MSI Gaming Bravo 15', price: 680, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPXP_nHV-vRQPifLUshFIlVtv7UD1y1UIKw&usqp=CAU' },
    { id: 2, name: 'MSI Cyborg 15', price: 1080, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ88l9MQ8anWjA1A4lqoVXh810aVh21wIc8Rf0Qm4X5UjdOZGScMqG7f00wyKiwgyg6-c&usqp=CAU' },
    { id: 3, name: 'Acer Nitro 5 Phoenix', price: 1100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxy1JFCWkM-N8_U3jKEIseAME9BOoHPY2BQ4ah9Jx4T2PYtbyyJ-D8OUo3MmRRb4i5zs&usqp=CAU' },
    { id: 4, name: 'Acer Predator Helios', price: 2090, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9LEApQ7HcnOAhEhZ4aWMyCzjASS2j--VMA&usqp=CAU' },
    { id: 5, name: 'Acer Nitro 5 AN515 55 5923', price: 984, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnA_NCZ1kevSEWjCdXMiNH8dKnXA552oxrQ&usqp=CAU' },
    { id: 6, name: 'Dell XPS 9510', price: 1845, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLiHFGCm2U9tzogsSeV6QTtQBOMwSskohTA&usqp=CAU' },
    { id: 7, name: 'ASUS ROG Strix G15', price: 1065, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmOU5m377U2jJRVDLMrebb41naaO-7W9ouA&usqp=CAU' },
    { id: 8, name: 'Lenovo Legion 9 16IRX8 83AG0047VN', price: 4920, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUIVefeZ0VmDk6CgdNPx0f5X4YwcqZSryELWm3DGnnqxO5dvmvpIygHQjpVFYtIaSY3U&usqp=CAU' },
    { id: 9, name: 'MacBook Pro', price: 2000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwuGt953oEnOLdJJVDPe1lcpBtLy42vSW-Q&usqp=CAU' }
];

// Mảng chứa giỏ hàng
let cart = [];

// Lấy danh sách sản phẩm và hiển thị
function displayProducts() {
    const productList = document.getElementById('product-list');

    if (productList) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;

            const detailsLink = document.createElement('a');
            detailsLink.href = getProductDetailsURL(product.name);
            detailsLink.target = '_blank';
            detailsLink.classList.add('details-button');
            detailsLink.textContent = 'View Details';

            productElement.appendChild(detailsLink);
            productList.appendChild(productElement);
        });
    }
}

// Lấy URL chi tiết sản phẩm
function getProductDetailsURL(productName) {
    let url;
    switch (productName) {
        case 'MSI Gaming Bravo 15':
            url = 'http://127.0.0.1:5500/baicuoikhoa/bravo15.html';
            break;
        case 'MSI Cyborg 15':
            url = 'http://127.0.0.1:5500/baicuoikhoa/Cyborg%2015.html';
            break;
        case 'Acer Nitro 5 Phoenix':
            url = 'http://127.0.0.1:5500/baicuoikhoa/AcerNitroV.html';
            break;
        case 'Acer Predator Helios':
            url = 'http://127.0.0.1:5500/baicuoikhoa/AcerPredatorHelios.html';
            break;
        case 'Acer Nitro 5 AN515 55 5923':  
            url = 'http://127.0.0.1:5500/baicuoikhoa/AcerNitro5AN.html';  
            break;
        case 'Dell XPS 9510':  
            url = 'http://127.0.0.1:5500/baicuoikhoa/DellXPS.html';  
            break;
        case 'ASUS ROG Strix G15':  
            url = 'http://127.0.0.1:5500/baicuoikhoa/AsusRogStrixG15.html';  
            break;
        case 'Lenovo Legion 9 16IRX8 83AG0047VN':  
            url = 'http://127.0.0.1:5500/baicuoikhoa/Lenovo.html';  
            break;
        case 'MacBook Pro':  
            url = 'http://127.0.0.1:5500/baicuoikhoa/Macbook.html';  
            break;
        default:
            url = '#';
    }
    return url;
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Cập nhật giỏ hàng trên giao diện
    displayCart();
}

// Hiển thị giỏ hàng
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    
    if (cartContainer) {
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `${item.name} - Quantity: ${item.quantity} <button onclick="removeFromCart(${item.id})">Remove</button>`;
            cartContainer.appendChild(cartItem);
        });
    }

    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateCartIcon();
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartIcon() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = getCartCount().toString();
    }
}

// Lấy tổng số lượng sản phẩm trong giỏ hàng
function getCartCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Sự kiện được gọi khi tài liệu đã được tải
document.addEventListener('DOMContentLoaded', function () {
    displayProducts();
    
    // Kiểm tra nếu đã có giỏ hàng trong localStorage thì hiển thị
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        displayCart();
    }
});

function updateClock() {
    const currentDate = new Date();
    document.getElementById("demo").innerHTML = currentDate;
}

// Đặt khoảng thời gian để thực hiện cập nhật giờ 
let intervalID = setInterval(updateClock, 1000);