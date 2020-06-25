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
    case "sn1":
      song.src = "./Musica/Musica1/Banda Sinaloense MS de Sergio Lizarraga - Qué Maldición.mp3"
      album.src = "./img/Snoop.png"
      song.play()
      break

    case "sn2":
      song.src = "./Musica/Musica1/Snoop Dogg - Young, Wild & Free.mp3"
      album.src =  "./img/Snoop.png"
      song.play()
      break

    case "sn3":
      song.src = "./Musica/Musica1/Iwanna.mp3"
      album.src =  "./img/Snoop.png"
      song.play()
      break

    case "sn4":
      song.src = "./Musica/Musica1/passit.mp3"
      album.src =  "./img/Snoop.png"
      song.play()
      break

    case "sn5":
      song.src = "./Musica/Musica1/Go.mp3"
      album.src =  "./img/Snoop.png"
      song.play()
      break

    case "sn":
      song.src = "./Musica/Musica1/who.mp3"
      album.src =  "./img/Snoop.png"
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
