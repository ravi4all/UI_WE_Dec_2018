window.addEventListener("load", initEvents);

function initEvents() {
    f_num = document.querySelector("#num_1");
    s_num = document.querySelector("#num_2");

    var btns = document.querySelectorAll("button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }
}

function calc() {
    // console.log("hello");
    // console.log(event.srcElement.innerHTML);
    var opr = event.srcElement.innerHTML;
    var expression = f_num.value + opr + s_num.value;
    var result = eval(expression)
    document.querySelector("#result").innerHTML = result;
}