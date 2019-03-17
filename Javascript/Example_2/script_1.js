window.addEventListener("load", initEvents);

function initEvents() {
    f_num = document.querySelector("#num_1");
    s_num = document.querySelector("#num_2");

    document.querySelector("#add").addEventListener("click", add);
    document.querySelector("#sub").addEventListener("click", sub);
    document.querySelector("#div").addEventListener("click", div);
    document.querySelector("#mul").addEventListener("click", mul);
    // console.log("hello", f_num, s_num);
}

function add() {
    var result = parseInt(f_num.value) + parseInt(s_num.value);
    document.querySelector("#result").innerHTML = result;
    // console.log("hello", result, f_num, s_num);
}

function sub() {
    var result = parseInt(f_num.value) - parseInt(s_num.value);
    document.querySelector("#result").innerHTML = result;
    // console.log("hello", result, f_num, s_num);
}

function mul() {
    var result = parseInt(f_num.value) * parseInt(s_num.value);
    document.querySelector("#result").innerHTML = result;
    // console.log("hello", result, f_num, s_num);
}

function div() {
    var result = parseInt(f_num.value) / parseInt(s_num.value);
    document.querySelector("#result").innerHTML = result;
    // console.log("hello", result, f_num, s_num);
}