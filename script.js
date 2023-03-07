const music = document.querySelector("audio");
const PrevBtn = document.getElementById("prev");
const NextBtn = document.getElementById("next");
const PlayBtn = document.getElementById("play");
const MusicImg = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const progressContainer = document.getElementById("progresscontainer");
const progress = document.getElementById("progress");
const currenttimeEl = document.getElementById("current-time");
const durationTime = document.getElementById("duration-time");

// music collection
const musicColl = [
  {
    name: "jacinto-1",
    displayName: "Electronic metal 1 ",
    artist: "I dont khow",
  },
  {
    name: "jacinto-2",
    displayName: "Electronic metal 2 ",
    artist: "I dont khow",
  },
  {
    name: "jacinto-3",
    displayName: "Electronic metal 3 ",
    artist: "I dont khow",
  },
  {
    name: "metric-1",
    displayName: "Electronic metal 4",
    artist: "I dont khow",
  },
];

// check if playing
let isPlaying = false;

// play music
function playMusic() {
  isPlaying = true;
  music.play();
}
// pause music
function pauseMusic() {
  isPlaying = false;
  music.pause();
}

// Music play pause contrller
PlayBtn.addEventListener("click", () => {
  if (isPlaying) {
    PlayBtn.setAttribute("title", "Play");
    PlayBtn.classList.replace("fa-play", "fa-pause");
    pauseMusic();
  } else {
    PlayBtn.setAttribute("title", "Pause");
    PlayBtn.classList.replace("fa-pause", "fa-play");
    playMusic();
  }
});

// Update dom
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  MusicImg.src = `img/${song.name}.jpg`;
  music.src = `music/${song.name}.mp3`;
}
// song index
let songIndex = 2;
console.log(songIndex);
// previous song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = musicColl.length - 1;
  }
  loadSong(musicColl[songIndex]);

  playMusic();
} // next song
function nextSong() {
  songIndex++;
  if (songIndex > musicColl.length - 1) {
    songIndex = 0;
  }
  loadSong(musicColl[songIndex]);

  playMusic();
}

// load song
loadSong(musicColl[songIndex]);

// update progress bar and time
function updateProgress(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // get minite
    let durationMinite = Math.floor(duration / 60);
    // get seconds
    let durationSeconds = Math.floor(duration % 60);

    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }

    // avoid delay NaN
    if (durationSeconds) {
      durationTime.textContent = `${durationMinite}:${durationSeconds}`;
    }

    // claculate current time

    let currentTimeMinite = Math.floor(currentTime / 60);
    // get seconds
    let currentTimeSeconds = Math.floor(currentTime % 60);

    if (currentTimeSeconds < 10) {
      currentTimeSeconds = `0${currentTimeSeconds}`;
    }
    console.log(`${currentTimeMinite}:${currentTimeSeconds}`);
    if (currentTimeSeconds) {
      currenttimeEl.textContent = `${currentTimeMinite}: ${currentTimeSeconds}`;
    }
  }
}

PrevBtn.addEventListener("click", prevSong);
NextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgress);
