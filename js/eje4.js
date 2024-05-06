const reloj = document.getElementById("reloj");
setInterval(() => {
  const time = new Date();

  const diasSemana = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  reloj.innerHTML = "";
  const diaSemana = diasSemana[time.getDay()];
  const diaMes = time.getDate();
  const mes = meses[time.getMonth()];
  const año = time.getFullYear();
  const divFechas = document.createElement("div");

  divFechas.innerHTML = `${diaSemana} ${diaMes} de ${mes} del ${año}`;

  const hora = time.getHours();
  const minutos = time.getMinutes();
  const segundos = time.getSeconds();
  const relojTiempo = document.createElement("div");
  reloj.classList.add("card-body", "p-2", "text-warning-emphasis");

  relojTiempo.innerHTML = `${hora} ${minutos} ${segundos}`;
  reloj.append(divFechas);
  reloj.append(relojTiempo);
  reloj.classList.add("text-primary");
}, 1000);
