//Constantes del html a javascript
const btnplay = document.getElementById("btnplay")
const btnnext = document.getElementById("btnnext")
const btnback = document.getElementById("btnback")
const album = document.getElementById("album")
const fillBar = document.getElementById("fill")
const xsong = document.getElementById("Xsong")

//Declarando variables para el reproductor
let song = new Audio()
let count = 0
let playlist = ["./music/audio.mp3", "./music/audio2.mp3", "./music/4u.mp3"]
let covers = ["img/album.jpg"]
song.src = playlist[count]

// FUNCIONES
const art = () => {
  album.src = covers[count]
}

btnplay.addEventListener(
  "click",
  (play = () => {
    song.src = playlist[count]
    if (song.paused) {
      song.play()
      console.log(song)
    } else {
      song.pause()
    }
  })
)

btnnext.addEventListener(
  "click",
  (next = () => {
    playlist[count++]
    play()
    art()

    if (count > playlist.length - 1) {
      console.log("Deberia volver a la primer cancion")
    }
  })
)

btnback.addEventListener(
  "click",
  (back = () => {
    playlist[count--]
    play()
    art()
  })
)

//creamos la barra de duracion
song.addEventListener("timeupdate", () => {
  let position = song.currentTime / song.duration
  fillBar.style.width = position * 100 + "%"
})

const list = document.getElementById("albums")

list.addEventListener("click", (e) => {
  const click = e.target.id
  console.log(` ID: ${click}`)
  const current = document.getElementById("current")
  switch (click) {
    case "K":
      song.src = "./music/K.mp3"
      album.src = "./img/Cigarettes_After_Sex.png"
      song.play()
      break

    case "Xsong":
      song.src = "./music/SAD_XXXT.mp3"
      album.src = "./img/X.png"
      song.play()
      break

    case "NF":
      song.src = "./music/NF1.mp3"
      album.src = "./img/nf.jpg"
      song.play()
      break

    case "waiting":
      song.src = "./music/waiting.mp3"
      album.src = "./img/ivebeen.jpg"
      song.play()
      break

    case "fall":
      song.src = "./music/fallingdown.mp3"
      album.src = "./img/album.jpg"
      song.play()
      break
  }
})

song.addEventListener(
  "timeupdate", () => {
    let duration = document.getElementById("current")
    var sec = parseInt(song.currentTime % 60)
    var min = parseInt((song.currentTime / 60) % 60)
    duration.innerHTML = min + ":" + sec
  },
  false
)
