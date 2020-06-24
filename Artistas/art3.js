//Constantes del html a javascript
const btnplay = document.getElementById("btnplay")
const btnnext = document.getElementById("btnnext")
const btnback = document.getElementById("btnback")
const album = document.getElementById("album")
const fillBar = document.getElementById("fill")

//Declarando variables para el reproductor
let song = new Audio()
let count = 0
let playlist = ["./music/audio.mp3", "./music/audio2.mp3", "./music/metallica/"]
let covers = [""] //agregar imagenes a una carpeta
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

const list = document.getElementById("playlist")

list.addEventListener("click", (e) => {
  const click = e.target.id
  console.log(` ID: ${click}`)
  const current = document.getElementById("current")
  switch (click) {
    case "r1":
      song.src = "./Musica/Musica3/robin.mp3"
      album.src = "./img/Robin.png"
      song.play()
      break

    case "r2":
      song.src = "./Musica/Musica3/sugar.mp3"
      album.src =  "./img/Robin.png"
      song.play()
      break

    case "r3":
      song.src = "./Musica/Musica3/wave.mp3"
      album.src =  "./img/Robin.png"
      song.play()
      break

    case "r4":
      song.src = "./Musica/Musica3/ox.mp3"
      album.src =  "./img/Robin.png"
      song.play()
      break

    case "r5":
      song.src = "./Musica/Musica3/headlight.mp3"
      album.src =  "./img/Robin.png"
      song.play()
      break

    case "r":
      song.src = "./Musica/Musica3/player.mp3"
      album.src =  "./img/Robin.png"
      song.play()
      break
  }
})

song.addEventListener(
  "timeupdate",
  () => {
    let duration = document.getElementById("current")
    var sec = parseInt(song.currentTime % 60)
    var min = parseInt((song.currentTime / 60) % 60)
    duration.innerHTML = min + ":" + sec
  },
  false
)
