// login.js
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    // Kiểm tra thông tin đăng nhập và lưu vào Local Storage
    localStorage.setItem('username', username);
    localStorage.setItem('loggedIn', true);

    // Chuyển hướng sau khi đăng nhập thành công
    window.location.href = 'index.html';
});

// register.js
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerForm.username.value;
    const password = registerForm.password.value;
    
    // Lưu thông tin đăng ký vào Local Storage
    localStorage.setItem('username', username);
    localStorage.setItem('loggedIn', true);

    // Chuyển hướng sau khi đăng ký thành công
    window.location.href = 'index.html';
});
