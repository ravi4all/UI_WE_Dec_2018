window.addEventListener("load", initEvents);
var username;
var userpwd;
var progress;

function initEvents() {
    span = document.querySelectorAll("span");
    progress = document.querySelector("#progress");
    username = document.querySelector("#box_1");
    userpwd = document.querySelector("#box_3");
    username.addEventListener("blur", checkUser);
    userpwd.addEventListener("keyup", checkPassword);
}

function checkUser() {
    // console.log(username);
    if (username.value.length == 0) {
        span[0].innerHTML = "Please Fill this Field";
    } else {
        span[0].innerHTML = "";
    }
}

function checkPassword() {
    progress.style.width = userpwd.value.length * 10 + 'px';
    console.log(userpwd.value.length, progress.style.width);
    if (userpwd.value.length == 0) {
        span[2].innerHTML = "Please Fill this Field";
        progress.style.width = '';
        progress.style.backgroundColor = 'transparent';
    } else if (userpwd.value.length > 0 && userpwd.value.length <= 4) {
        span[2].innerHTML = "Weak";
        // progress.style.width = '30px';
        progress.style.backgroundColor = 'red';
    } else if (userpwd.value.length > 4 && userpwd.value.length <= 8) {
        span[2].innerHTML = "Average";
        // progress.style.width = '60px';
        progress.style.backgroundColor = 'yellow';
    } else if (userpwd.value.length > 8) {
        span[2].innerHTML = "Strong";
        // progress.style.width = '100px';
        progress.style.backgroundColor = 'green';
    } else {
        span[2].innerHTML = "";
    }
}