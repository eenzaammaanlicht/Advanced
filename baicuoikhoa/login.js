// Xử lý đăng nhập
const loginForm = document.getElementById('login');
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Lấy thông tin người dùng từ localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Lấy giá trị email và mật khẩu từ form đăng nhập
    let email = document.getElementById("email").value.trim();
    let pw = document.getElementById("password").value.trim();

    // Kiểm tra xem email và mật khẩu có khớp với bất kỳ tài khoản nào trong localStorage không
    let user = users.find(user => user.email === email && user.pw === pw);

    if (user) {
        // Nếu tìm thấy, chuyển hướng đến trang logout.html
        window.location.href = "../logout.html";
    } else {
        // Nếu không tìm thấy, hiển thị thông báo lỗi
        alert("Please input correct email and password");
    }
});

// Xử lý đăng ký
const registerForm = document.getElementById("register");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Lấy giá trị email và mật khẩu từ form đăng ký
    let email = document.getElementById('email').value.trim();
    let pw = document.getElementById("password").value.trim();

    // Kiểm tra độ dài của email và mật khẩu
    if (email.length === 0 && pw.length === 0) {
        alert("Please input your email & password");
    } else if (email.length === 1) {
        alert("Please input your email");
    } else if (pw.length === 1) {
        alert("Please input your password");
    } else if (pw.length < 8) {
        alert("Password must be at least 8 characters.");
    } else {
        // Kiểm tra mật khẩu có chứa các yếu tố yêu cầu không
        let lowerCaseLetter = /[a-z]/g;
        let upperCaseLetter = /[A-Z]/g;
        let numbers = /[0-9]/g;
        if (!pw.match(lowerCaseLetter)) {
            alert("Password must contain a lowercase letter");
        } else if (!pw.match(upperCaseLetter)) {
            alert("Password must contain an uppercase letter");
        } else if (!pw.match(numbers)) {
            alert("Password must contain a number or special character");
        } else {
            // Nếu thông tin hợp lệ, lưu thông tin người dùng vào localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ email: email, pw: pw });
            localStorage.setItem("users", JSON.stringify(users));
            // Chuyển hướng đến trang đăng nhập
            location.replace("../login/login.html");
        }
    }
});

// Xử lý chuyển đổi giữa form đăng nhập và đăng ký
document.addEventListener("DOMContentLoaded", function() {
    const loginTab = document.getElementById("tab-1");
    const signUpTab = document.getElementById("tab-2");
    const loginForm = document.querySelector(".sign-in-htm form");
    const signUpForm = document.querySelector(".sign-up-htm form");

    // Hiển thị form đăng ký khi nhấp vào nút Đăng ký
    signUpTab.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        signUpForm.style.display = "block";
    });

    // Hiển thị form đăng nhập khi nhấp vào nút Đăng nhập
    loginTab.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "block";
        signUpForm.style.display = "none";
    });
});
