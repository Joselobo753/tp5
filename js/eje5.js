//5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

let segundos = 0;
let minutos = 0;
let pararBoton;
const cronometro = document.getElementById("cronometro");
cronometro.classList.add("card-body", "p-2", "text-warning-emphasis");
const iniciar = document.getElementById("iniciar");
const divBotonP = document.createElement("div");
const cronometroP = document.createElement("p");
cronometro.appendChild(divBotonP);
iniciar.addEventListener("click", () => {
  iniciar.disabled = true;
  cronometroP.classList.remove("text-warning");
  const intervalo = setInterval(() => {
    segundos++;
    if (segundos > 60) {
      minutos++;
      segundos = 0;
    }

    cronometroP.innerHTML = "";
    cronometroP.innerHTML = `${minutos} : ${segundos}`;
    divBotonP.appendChild(cronometroP);
  }, 1000);
  const divParar = document.createElement("div");
  pararBoton = document.createElement("button");
  pararBoton.classList.add("btn", "btn-success");
  pararBoton.innerHTML = "Detener";
  cronometroP.classList.add("text-warning");
  divParar.appendChild(pararBoton);

  cronometro.appendChild(divParar);
  pararBoton.addEventListener("click", () => {
    clearInterval(intervalo);
    iniciar.disabled = false;
    pararBoton.remove();
    segundos = 0;
    minutos = 0;
  });
});
