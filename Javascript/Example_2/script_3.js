window.addEventListener("load", initEvents);

var box;
var boxValue;
var oprs;
var num;
var oldValue;

function initEvents() {
    box = document.querySelector("#box_1");
    var numbers = document.querySelectorAll(".num");
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", showValues);
    }

    oprs = document.querySelectorAll(".opr");
    for (var i = 0; i < oprs.length; i++) {
        oprs[i].addEventListener("click", appendOperators);
    }
    document.querySelector(".calc").addEventListener("click", calculate);
}

function showValues() {
    num = event.srcElement.innerHTML
    box.value += num;
    oldValue = box.value;
}

function appendOperators() {
    var currentOpr = event.srcElement.innerHTML;
    var lastValue = box.value.charAt(box.value.length - 1);
    for (var i = 0; i < oprs.length; i++) {
        if (currentOpr == lastValue) {
            return
        }
    }
    box.value = oldValue + currentOpr;
}

function calculate() {
    var expression = box.value;
    var result = eval(expression);
    box.value = result;
}