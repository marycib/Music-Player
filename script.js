
// Song data
const songList = [
  {
    title: "Dance Of The Gypsies",
    file: "HanuDixit.mp3",
    cover: "1.jpeg"

  },
  {
    title: "Dream It",
    file: "TrackTribe.mp3",
    cover: "2.jpeg"
  },
  {
    title: "Go Baroque",
    file: "FreedomTrailStudio.mp3",
    cover: "3.jpeg"
  },

  {
    title: "The Mumbai Beat",
    file: "THanuDixit.mp3",
    cover: "3.jpeg"
  },

  {
    title: "Lawrence",
    file: "LTrackTribe.mp3",
    cover: "3.jpeg"
  },
]




// This function plays the song.
function play() {
  // Get the audio element.
  var audio = document.querySelector("audio");

  // Play the audio.
  audio.play();
}

// This function pauses the song.
function pause() {
  // Get the audio element.
  var audio = document.querySelector("audio");

  // Pause the audio.
  audio.pause();
}

// This function stops the song.
function stop() {
  // Get the audio element.
  var audio = document.querySelector("audio");

  // Stop the audio.
  audio.stop();
}

// This function changes the volume of the song.
function changeVolume(volume) {
  // Get the audio element.
  var audio = document.querySelector("audio");

  // Set the volume of the audio.
  audio.volume = volume / 100;
}

// This function is called when the page loads.
window.onload = function () {
  // Get the audio element.
  var audio = document.querySelector("audio");

  // Add event listeners to the play, pause, and stop buttons.
  document.querySelector(".play").addEventListener("click", play);
  document.querySelector(".pause-btn").addEventListener("click", pause);
  

  // Add an event listener to the volume slider.
  document.querySelector("input[type=range]").addEventListener("change", changeVolume);
};
