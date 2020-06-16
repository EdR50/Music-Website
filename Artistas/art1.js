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
    case "Hardwired":
      song.src = "./Musica/MusicaMetallica/Metallica - Hardwired.mp3"
      album.src = "./img/metallica1.jpg"
      song.play()
      break

    case "Moth":
      song.src = "./musica/MusicaMetallica/Metallica - Moth Into Flame.mp3"
      album.src = "./img/metallica1.jpg"
      song.play()
      break

    case "Atlas":
      song.src = "./musica/MusicaMetallica/Metallica - Atlas, Rise!.mp3"
      album.src = "./img/metallica1.jpg"
      song.play()
      break

    case "Halo":
      song.src = "./musica/MusicaMetallica/Metallica - Halo On Fire.mp3"
      album.src = "./img/metallica1.jpg"
      song.play()
      break


    case "One":
      song.src = "./musica/MusicaMetallica/Metallica - One.mp3"
      album.src = "./img/metallica1.jpg"
      song.play()
      break

    case "last":
        song.src = "./musica/MusicaMetallica/Metallica - One.mp3"
        album.src = "./img/metallica1.jpg"
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
