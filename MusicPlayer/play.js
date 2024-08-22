
document.addEventListener("DOMContentLoaded", () => {
  const playbtn = document.getElementById("play-btn");
  const prevbtn = document.getElementById("prev-btn");
  const nextbtn = document.getElementById("next-btn");
  const audio = document.getElementsByTagName("audio");
  const nameElement = document.getElementById("songname");
  const titleElement = document.getElementById("subtitle");
  const descriptElement = document.getElementById("description");
  const creditElement = document.getElementById("credit");
  const imgElement = document.getElementById("song-img");

  let songs = [];
  let songIndex = 0;

  //fetch songs from json file

  fetch('songs.json')
    .then((reaponse) => reaponse.json())
    .then((data) => {
      songs = data;
      loadSong(songIndex);
      //addToPlayList();
    })
    .catch((error) => console.log("error while loading songs: ", error));

  function loadSong(index) {
    const song = songs[index];
    if (song) {
      audio.src = song.songURL;
      nameElement.textContent = song.songName;
      titleElement.textContent=song.subTitle;
      descriptElement.textContent=song.description;
      creditElement.textContent=song.credits;
      imgElement.innerHTML=song.cover;
    }
  }

  /* function addToPlayList(){

} */

  playbtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playbtn.innerText = "Pause";
    } else {
      audio.paused();
      playbtn.innerText = "Play";
    }
  });

  prevbtn.addEventListener("click", () => {
    if (songIndex > 0) {
      songIndex--;
      loadSong(songIndex);
      audio.play();
    }
  });

  nextbtn.addEventListener("click", () => {
      if (songIndex < songs.length - 1) {
        songIndex++;
        loadSong(songIndex);
        audio.play();
      }
    });
});
