//6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde
// donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset.

const temporizador = document.getElementById("temporizador");
temporizador.classList.add("card-body", "p-2", "text-warning-emphasis");
const iniciarTempo = document.getElementById("inciarTempo");
let tiempointervalo;
const tiempo = document.getElementById("tiempo");
iniciarTempo.addEventListener("click", obtener);
let decresente = document.getElementById("tempo");
let pause;
let reincio;

function obtener() {
  decresente = parseInt(decresente.value);
  if (isNaN(decresente) || decresente <= 0) {
    alert("Ingrese un tiempo válido en segundos.");
    return;
  }

  pause = document.createElement("button");
  pause.classList.add("btn", "btn-success");
  pause.innerHTML = "Pausa";
  temporizador.appendChild(pause);
  pause.addEventListener("click", pausa);

  reincio = document.createElement("button");
  reincio.classList.add("btn", "btn-success");
  reincio.innerHTML = "Reincio";
  temporizador.appendChild(reincio);
  reincio.addEventListener("click", reinciar);

  iniciarTempo.disabled = true;
  tiempointervalo = setInterval(actualizar, 1000);
}
function pausa() {
  clearInterval(tiempointervalo);
  iniciarTempo.disabled = false;
  pause.disabled = true;
}
function reinciar() {
  clearInterval(tiempointervalo);
  iniciarTempo.disabled = false;
  pause.remove();
  reincio.remove();

  tiempo.innerHTML = "00 : 00";
}

function actualizar() {
  decresente--;
  if (decresente <= 0) {
    alert("Tiempo terminado 🎶ruido de alarma");
    reinciar();
  }
  let minutos = Math.floor(decresente / 60);
  let segundos = decresente % 60;

  tiempo.innerHTML = "";
  tiempo.innerHTML = ` ${minutos} : ${segundos}`;
}
