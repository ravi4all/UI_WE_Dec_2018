function doAnimate(obj) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    // console.log(mouseX, mouseY);
    obj.style.backgroundPositionX = mouseX * 0.1 + 'px';
    obj.style.backgroundPositionY = mouseY * 0.1 + 'px';
}

function scrollAnimation() {
    var col = document.querySelector("#content");
    window.addEventListener("scroll", function() {
        var offset = col.offsetTop;
        var scrollY = window.scrollY;
        offset -= scrollY;
        // console.log(scrollY, '----', offset);
        // console.log(offset, window.innerHeight / 2 - 100)
        if (offset < window.innerHeight / 2 - 100) {
            col.className = 'animate';
        } else {
            col.className = '';
        }
    })
}

scrollAnimation();