
const name = document.getElementById('name')
const password = document.getElementById('password')
const btnHome = document.getElementById('btn')
  
const correct = () => {
     if (name.value == "usuario1" && password.value == 12345) {
       window.location = "../Home/Home.html"
     }
     else {
         console.log('got an error :c')
         alert('Hola, usuario o contraseña incorrectos')
         alert("Usuario: usuario1, contraseña: 12345")
     }
}

btnHome.addEventListener('click' , correct);