window.addEventListener("load", initEvents);

var audio;

function initEvents() {
    var ul = document.querySelector("#songList");
    audio = document.querySelector("#audio");
    allSongs.forEach(function(obj) {
        var li = document.createElement("li");
        li.setAttribute("title", obj.song_id);
        var songName = document.createElement("span");
        songName.innerHTML = obj.song_name;
        var songImg = document.createElement("img");
        songImg.setAttribute("src", obj.song_thumb);
        li.appendChild(songImg);
        li.appendChild(songName);
        ul.appendChild(li);
        songName.addEventListener("click", playSong);
        songImg.addEventListener("click", playSong);
    })
}

function playSong() {
    // var songName = event.srcElement.innerText;
    // var songName = event.srcElement.parentElement.children[1].innerHTML;
    var songId = event.srcElement.parentElement.title;
    // console.log(songId);
    for (var i = 0; i < allSongs.length; i++) {
        if (allSongs[i].song_id == songId) {
            var songUrl = allSongs[i].song_url;
        }
    }
    audio.src = songUrl;
    audio.play();
}