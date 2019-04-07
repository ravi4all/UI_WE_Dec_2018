window.addEventListener("load", initEvents);

var audio;
var playState = false;

function initEvents() {
    var ul = document.querySelector("#songList");
    audio = document.querySelector("#audio");
    document.querySelector("#play").addEventListener("click", pauseSong);
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
            var songName = allSongs[i].song_name;
        }
    }
    audio.src = songUrl;
    playState = true;
    audio.play();
    togglePlay(playState);
    document.querySelector("#curr_song").innerHTML = songName;
}

function togglePlay(playState) {
    console.log(playState);
    var playIcon = document.querySelector("#play");
    if (playState == true) {
        playIcon.innerHTML = '<i class="fas fa-pause"></i>';
        audio.play();
    } else {
        playIcon.innerHTML = '<i class="fas fa-play"></i>';
        audio.pause();
    }
}

function pauseSong() {
    playState = !playState;
    togglePlay(playState);
}