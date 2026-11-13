// JavaScript chung cho trang web
const products = [
    { id: 1, name: 'MSI Gaming Bravo 15', price: 680, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPXP_nHV-vRQPifLUshFIlVtv7UD1y1UIKw&usqp=CAU' },
    { id: 2, name: 'MSI Cyborg 15', price: 1080, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ88l9MQ8anWjA1A4lqoVXh810aVh21wIc8Rf0Qm4X5UjdOZGScMqG7f00wyKiwgyg6-c&usqp=CAU' },
    { id: 3, name: 'Acer Nitro 16 Phoenix', price: 1100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxy1JFCWkM-N8_U3jKEIseAME9BOoHPY2BQ4ah9Jx4T2PYtbyyJ-D8OUo3MmRRb4i5zs&usqp=CAU' },
    { id: 4, name: 'Acer Predator Helios', price: 2090, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9LEApQ7HcnOAhEhZ4aWMyCzjASS2j--VMA&usqp=CAU' }
];

document.addEventListener('DOMContentLoaded', function () {
    displayProducts();
    displayCart();
});

function updateClock() {
    const currentDate = new Date();
    document.getElementById("demo").innerHTML = currentDate;
}

let intervalID = setInterval(updateClock, 1000);
