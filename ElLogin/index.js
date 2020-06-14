
const name = document.getElementById('name')
const password = document.getElementById('password')
const btnHome = document.getElementById('btn')
  
const correct = () => {
     if (name.value == "admin" && password.value == 12345) {
       window.location = "../Home/Home.html"
     }
     else {
         console.log('got an error :c')
         alert('Hola, usuario o contraseña incorrectos')
         alert("Usuario: admin, contraseña: 12345")

     }
}

btnHome.addEventListener('click' , correct);