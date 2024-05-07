
/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, 
en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar,
 al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico,
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número
mágico. Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino
el numero.
*/
let div = document.getElementById("divOne")
const guardar = div
const empezar = document.getElementById("eje1")
empezar.addEventListener("click",jugar)
let aleatorio
function jugar() {
    aleatorio = Math.floor(Math.random() * 20) + 1
    div.innerHTML = ""
    const titulo = document.createElement("h3")
    titulo.innerHTML = "Intente adivinar el numero entre 1 a 20"
    const input = document.createElement("input")
    input.classList.add("form-control","my-4")
    input.id = "ingresado"
    const adivinar = document.createElement("button")
    adivinar.classList.add("btn","btn-primary")
    adivinar.innerHTML = "sera ? 🤔"
    div.appendChild(titulo)
    div.appendChild(input)
    div.appendChild(adivinar)
    adivinar.addEventListener("click",adivinaza)
}
function adivinaza() {
    let numeroingreso = parseInt(document.getElementById("ingresado").value)
    console.log(numeroingreso)
    console.log(aleatorio)
    if (numeroingreso === aleatorio) {
        alert("correcto sos un crack")
        div.innerHTML = guardar
    } else if (numeroingreso > aleatorio) {
        alert("el numero es mayor al aleatorio")
    }else{
        alert("el numero es menor al aleatorio")
    }    
}
/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*/