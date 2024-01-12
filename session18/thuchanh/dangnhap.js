function login() {
    let username , password;
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    
    let userKey = localStorage.getItem("username");
    let passKey = localStorage.getItem("password");

    if(username == userKey && password == passKey){
        document.querySelector('a').setAttribute("href" , "website-football.html");
    }
}