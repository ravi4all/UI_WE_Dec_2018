window.addEventListener("load", initEvents);

var audio;
var playState = false;
var slide;

function initEvents() {
    var ul = document.querySelector("#songList");
    audio = document.querySelector("#audio");
    document.querySelector("#play").addEventListener("click", pauseSong);
    slide = document.querySelector("#slide");
    slide.addEventListener("change", changeSongValue);
    document.querySelector("#save").addEventListener("click", savePlaylist);
    allSongs.forEach(function(obj) {
        var li = document.createElement("li");
        li.setAttribute("title", obj.song_id);
        var songName = document.createElement("span");
        songName.innerHTML = obj.song_name;
        var songImg = document.createElement("img");
        songImg.setAttribute("src", obj.song_thumb);
        var btn = document.createElement("button");
        btn.innerHTML = "Add to Playlist";
        btn.className = "btn btn-primary d-block w-100";
        li.appendChild(songImg);
        li.appendChild(songName);
        li.appendChild(btn);
        ul.appendChild(li);
        songName.addEventListener("click", playSong);
        songImg.addEventListener("click", playSong);
        btn.addEventListener("click", addSong);
    })
    loadPlaylist();
}

function savePlaylist() {
    if (window.localStorage) {
        var json = JSON.stringify(obj.playList);
        localStorage.setItem("songsData", json);
        alert("Songs are saved...");
    } else {
        alert("Localstorage not supported...");
    }
}

function loadPlaylist() {
    if (window.localStorage) {
        var data = localStorage.getItem("songsData");
        obj.playList = JSON.parse(data);
        printSongs();
    }
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
    setTimeout(function() {
        slide.max = audio.duration;
    }, 100);
    audio.play();
    setInterval(function() {
        slide.value = audio.currentTime;
    }, 1000);
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

function changeSongValue() {
    audio.currentTime = slide.value;
}

function addSong() {
    var songId = event.srcElement.parentElement.title;
    for (var i = 0; i < allSongs.length; i++) {
        if (allSongs[i].song_id == songId) {
            obj.addSong(allSongs[i].song_id, allSongs[i].song_name, allSongs[i].song_url, allSongs[i].song_thumb)
        }
    }
    printSongs();
}

function printSongs() {
    var ul = document.querySelector("#playList");
    ul.innerHTML = "";
    obj.playList.forEach(function(song) {
        var li = document.createElement("li");
        li.setAttribute("title", song.id);
        var songName = document.createElement("span");
        songName.innerHTML = song.name;
        var songImg = document.createElement("img");
        songImg.setAttribute("src", song.imgUrl);
        var btn = document.createElement("button");
        // btn.innerHTML = "<i class='fas fa-trash'>";
        btn.innerHTML = "Delete";
        btn.className = "btn btn-primary d-block";
        li.appendChild(songImg);
        li.appendChild(songName);
        li.appendChild(btn);
        ul.appendChild(li);
        songName.addEventListener("click", playSong);
        songImg.addEventListener("click", playSong);
        btn.addEventListener("click", deleteSong);
    })
}

function deleteSong() {
    var songId = event.srcElement.parentElement.title;
    obj.deleteSong(songId);
    printSongs();
}