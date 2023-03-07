const music = document.querySelector("audio");
const PrevBtn = document.getElementById("prev");
const NextBtn = document.getElementById("next");
const PlayBtn = document.getElementById("play");
const MusicImg = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
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
  console.log(songIndex);
  playMusic();
} // next song
function nextSong() {
  songIndex++;
  if (songIndex > musicColl.length - 1) {
    songIndex = 0;
  }
  loadSong(musicColl[songIndex]);
  console.log(songIndex);
  playMusic();
}

// load song
loadSong(musicColl[songIndex]);

PrevBtn.addEventListener("click", prevSong);
NextBtn.addEventListener("click", nextSong);
