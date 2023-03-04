const music = document.querySelector("audio");
const PrevBtn = document.getElementById("prev");
const NextBtn = document.getElementById("next");
const PlayBtn = document.getElementById("play");

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

// Music Collections
const MusicCollection = [
  {
    title: "The Godfather",
    artist: "J.R.R. Tolkien",
  },
];
