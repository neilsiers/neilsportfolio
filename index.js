/*STATUS BOX*/
const mood = {type:"mood"};
mood.feel = "sore";
document.getElementById("feeling").innerHTML = "feeling: " + mood.feel; 

const comms = {type:"comms"};
comms.now = "closed";
document.getElementById("commissions").innerHTML = "commissions: " + comms.now; 

const loc = {type:"location"};
loc.now = "in the Orlando area";
document.getElementById("located").innerHTML = "located: " + loc.now; 

/*MUSICPLAYER */
// ===== ELEMENTS =====
const audio = document.getElementById("music");
const buttons = document.querySelectorAll(".mpbutton");

const idleGif = document.querySelector("#mpbear .idle");
const danceGif = document.querySelector("#mpbear .dance");

// ===== PLAYLIST =====
const songs = [
    "music/lessthanthree.mp3",
    "music/youandme.mp3",
    "music/ichigochan.mp3"
];

let index = 0;
let playing = false;

// ===== FUNCTIONS =====
function updateBear() {
    if (playing) {
        idleGif.style.display = "none";
        danceGif.style.display = "block";
    } else {
        idleGif.style.display = "block";
        danceGif.style.display = "none";
    }
}

function loadSong(i) {
    audio.src = songs[i];
}

function playSong() {
    audio.play();
    playing = true;
    updateBear();
}

function pauseSong() {
    audio.pause();
    playing = false;
    updateBear();
}

function nextSong() {
    index++;
    if (index >= songs.length) index = 0;
    loadSong(index);
    playSong();
}

function prevSong() {
    index--;
    if (index < 0) index = songs.length - 1;
    loadSong(index);
    playSong();
}

// ===== BUTTON CONTROLS =====

buttons[0].addEventListener("click", prevSong);

buttons[1].addEventListener("click", () => {
    if (playing) {
        pauseSong();
    } else {
        playSong();
    }
});

buttons[2].addEventListener("click", nextSong);

audio.addEventListener("ended", () => {
    playing = false;
    updateBear();
});

audio.volume = 0.5;

loadSong(index);
updateBear();
