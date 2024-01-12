let users = JSON.parse(localStorage.getItem("users"))||[];

function register() {
    let a = document.getElementById('username').value;
    let b = document.getElementById('email').value;
    let c = document.getElementById('password').value;
    let d = document.getElementById('cofirm-password').value;

    let user = {
        username: a,
        email: b,
        password: c,
        confirmPassword: d
    }

    users.push(user);

    localStorage.setItem("users" , JSON.stringify(users));
}