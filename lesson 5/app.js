function login() {
var username = document.getElementById('loginUsername').value;
var password = document.getElementById('loginPasswprd').value;

if (localStorage.getItem(username) === password) {
alert ("dang nhap thanh cong");
} else {
    alert ("dang nhap that bai");
}
}

function register() {
    var username = document.getElementById('registerUsername').value;
var password = document.getElementById('registerPasswprd').value;

 if (localStorage.getItem(username)){
    alert ("Ten dang nhap da ton tai");
 } else {
    localStorage.setItem(username, password);
    alert ('Dang ki thanh cong');
 }
} 