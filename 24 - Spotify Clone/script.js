console.log("Hello there!");
let songs;

let currentSong = new Audio();

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

const playMusic = (track, pause = false) => {
  currentSong.pause();
  currentSong.src = "/24 - Spotify Clone/songs/" + track;
  currentSong.load();
  if (!pause) {
    currentSong.play();
    play.src = "assets/pause.svg";
  }
  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

// Format song names into { artist, title }
function parseSong(filename) {
  // Keep the original filename intact
  const original = filename;

  // Work on a copy for parsing only
  let clean = filename.replace(/\.mp3$/i, "");
  clean = clean.replaceAll("_", " ");
  clean = clean.replace(/\[.*?\]|\(www.*?\)|mp3clan\.com| - Copy/gi, "");
  clean = clean.replace(/\s{2,}/g, " ").trim();

  // Optionally capture a track number (but DO NOT remove it)
  const trackMatch = clean.match(/^\s*(\d+)([._-])\s*/);
  const track = trackMatch ? trackMatch[1] : null;

  let artist = "Unknown Artist";
  let title = clean;

  if (clean.includes(" - ")) {
    // Pattern: "Artist - Title"
    const [a, ...rest] = clean.split(" - ");
    artist = a.trim();
    title = rest.join(" - ").trim(); // keeps any leading "01." in Title if present
  } else {
    // Pattern: "Title (Artist)" at the end
    const m = clean.match(/^(.*)\s\(([^()]+)\)$/);
    if (m) {
      title = m[1].trim(); // e.g., "01. A Light That Never Comes"
      artist = m[2].trim(); // e.g., "Linkin Park & Steve Aoki"
    }
  }

  return { filename: original, artist, title, track };
}

async function getSongs() {
  let a = await fetch("http://127.0.0.1:3000/24%20-%20Spotify%20Clone/songs/");
  let response = await a.text();

  let element = document.createElement("div");
  element.innerHTML = response;
  let as = element.getElementsByTagName("a");

  let songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}

async function main() {
  // get the list of all the songs
  songs = await getSongs();

  playMusic(songs[0], true);

  console.log(songs);

  let songUL = document.querySelector(".songsList ul");
  songUL.innerHTML = ""; // clear before adding

  for (const song of songs) {
    let cleanName = song.replaceAll("%20", " ");
    let { artist, title } = parseSong(cleanName);

    songUL.innerHTML += `
    <li class="song-item" data-filename="${cleanName}">
      <img class="invert icon" src="assets/music.svg" alt="">
      <div class="info">
        <div class="title">${title}</div>
        <div class="artist">${artist}</div>
      </div>
      <button class="playnow">
        <img class="invert" src="assets/play.svg" alt="">
      </button>
    </li>
  `;
  }

  // Attach an event listener to each song
  Array.from(
    document.querySelector(".songsList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(e.getAttribute("data-filename"));
    });
  });

  // Attach an event listener to play next and previous
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "assets/pause.svg";
    } else {
      currentSong.pause();
      play.src = "assets/play.svg";
    }
  });

  // Listen for time update event
  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML = `${formatTime(
      currentSong.currentTime
    )}/ ${formatTime(currentSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  // Add a event listener to seekbar
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let forwaredTime =
      (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = forwaredTime + "%";
    currentSong.currentTime = (currentSong.duration * forwaredTime) / 100;
  });

  // Add an event listener for hamburger

  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".left");
  const closeBtn = document.querySelector(".close");

  hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
    // document.body.style.overflow = "hidden"; // optional
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    // document.body.style.overflow = "";
  });

  // Add an event listener to previous and next 

  previous.addEventListener("click", () => {
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    console.log(index);
    if((index-1) >= 0) {
      playMusic(songs[index-1]);
    }
    
  })

  next.addEventListener("click", () => {
    console.log("next clicked");
    currentSong.pause();
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    console.log(index);
    if((index+1) < songs.length) {
      console.log("Play next song");
      playMusic(songs[index+1]);
    }
  })
}

main();
