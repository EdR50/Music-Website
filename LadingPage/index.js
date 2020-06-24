let textWrapper = document.querySelector(".ml12")
let tologin = document.getElementById("toLogin")

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
)

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml12 .letter",
    translateX: [5, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i,
  })
  .add({
    targets: ".ml12 .letter",
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,

    delay: (i) => 100 + 30 * i,
})


const gologin = () => {
  try {
    window.location = "../ElLogin/InicioSesion.html"
  } 
  catch (err) {
    console.log("Got an error in gologin function", err)
  }
}

tologin.addEventListener('click' , gologin)