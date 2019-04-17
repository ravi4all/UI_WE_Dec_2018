window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#btn").addEventListener("click", loadAjax);
}

function loadAjax() {
    var ul = document.querySelector("#data");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            var data = JSON.parse(data);
            var images = data.data;
            images.forEach(function(obj) {
                var li = document.createElement("li");
                var img = document.createElement("img");
                img.setAttribute('src', obj.images.downsized_medium.url);
                li.appendChild(img);
                ul.appendChild(li);
            })
        }
    }
    xhttp.open('get', "http://api.giphy.com/v1/gifs/search?q=tom+and+jerry&api_key=bc56161131654faeb550630b83e0c977&limit=50");
    xhttp.send();
}