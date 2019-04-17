window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#btn").addEventListener("click", loadAjax);
}

function loadAjax() {
    var ul = document.querySelector("#list");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            // console.log(data);
            data = JSON.parse(data);
            articles = data.articles;
            articles.forEach(function(obj) {
                var li = document.createElement("li");
                var h3 = document.createElement("h3");
                h3.innerHTML = obj.title;
                var img = document.createElement("img");
                img.setAttribute('src', obj.urlToImage);
                var para = document.createElement("p");
                para.innerHTML = obj.description;
                li.appendChild(h3);
                li.appendChild(img);
                li.appendChild(para);
                ul.appendChild(li);
            })
        }
    }
    xhttp.open('get', 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=695e07af402f4b119f0703e9b19f4683');
    xhttp.send();
}