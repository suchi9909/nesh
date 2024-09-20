const img = document.querySelector("#img");
const playPause = document.querySelector("#playpause");
const playPauseBtn = document.querySelector("#playpause-btn");
const audio = document.querySelector("#audio");
const title = document.querySelector("#title");
// const prevBtn = document.querySelector("#prevbtn");
// const nextBtn = document.querySelector("#nextbtn");
const progress = document.querySelector("#progress");
const progressBar = document.querySelector(".progress-bar");
const currTime = document.querySelector(".current-time");
const totalDuration = document.querySelector(".duration-time");
const layer = document.querySelector(".layer");
const volBar = document.querySelector(".bar");
const progressLine = document.querySelector(".progress-line");
const likeIcon = document.querySelector("#likeicon");
const songList = document.querySelector("#songs-list");
const listCloseBtn = document.querySelector("#listclose");

let isPlaying = false;

// song pause function
function playSong() {
    isPlaying = true;
    playPauseBtn.classList.replace("ri-play-large-fill", "ri-pause-large-fill");
    audio.play();
}

// song play function
function pauseSong() {
    isPlaying = false;
    playPauseBtn.classList.replace("ri-pause-large-fill", "ri-play-large-fill");
    audio.pause();
}

// progress bar function
console.log(audio.duration);

function updateProgress(e) {
    if (isPlaying) {
        const { duration, currentTime } = e.target;
        const progressPercent = (currentTime / duration) * 100;
        if (progressPercent == 100) {
            return nextSong();
        }
        // Calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }
        // Delay switching duration Element to avoid NaN
        if (durationSeconds) {
            totalDuration.textContent = `${durationMinutes}:${durationSeconds}`;
        }
        // Calculate display for currentTime
        let currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        }
        currTime.textContent = `${currentMinutes}:${currentSeconds}`;
    }
}

function progressSlide(e) {
    const { value } = e.target;
    const progressTime = Math.ceil((audio.duration / 100) * value);
    audio.currentTime = progressTime;
    console.log(progressTime);
    if (!isPlaying) {
        progressLine.style.width = `${value}%`;
    }
}

function musicList() {
    songList.classList.toggle("showlist");
    listCloseBtn.addEventListener("click", () => {
        songList.classList.remove("showlist");
    })
}

playPause.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
audio.addEventListener("timeupdate", updateProgress);