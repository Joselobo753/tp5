const reloj = document.getElementById("reloj");
setInterval(() => {
  
  console.log(reloj);
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

  const diaSemana = diasSemana[time.getDay()];
  const diaMes = time.getDate();
  const mes = meses[time.getMonth()];
  const año = time.getFullYear();
  const divFechas = document.createElement("div")
  divFechas.innerHTML = `${diaSemana} ${diaMes} de ${mes} del ${año}`
  let fecha = diaSemana + " " + diaMes + " de " + mes + " del " + año;
  console.log(fecha);
  const hora = time.getHours()
  const minutos = time.getMinutes()
  const segundos = time.getSeconds()
  const relojTiempo = document.createElement("div")
  relojTiempo.innerHTML = `${hora} ${minutos} ${segundos}`
  reloj.append(divFechas)
  reloj.append(relojTiempo)
  
}, 1000);
