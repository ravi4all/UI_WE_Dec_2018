// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener("click", show);
// });

window.addEventListener("load", init);

function init() {
    document.getElementById("btn").addEventListener("click", show);
}

function show() {
    console.log("Show Called...");
    var box = document.getElementById("box_1");
    document.getElementById("output").innerHTML = box.value;
}