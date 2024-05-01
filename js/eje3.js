 const tareas = []
 const $form = document.getElementById("formulario")
 const $cuerpo = document.getElementById("cuerpo")
 let idCard = 0

function agregarTarjeta(titulo,texto,idCard) {
  const idtarjeta = idCard+"card"
  const divCuerpo = document.createElement("div")
  divCuerpo.classList.add("card","my-4","position-relative");
  divCuerpo.id =` ${idtarjeta}`
  const divCard = document.createElement("div")
  divCard.classList.add("card-body")
  const cardTitulo = document.createElement("h4")
  cardTitulo.classList.add("card-title")
  cardTitulo.innerHTML = `${titulo}`
  const cardText = document.createElement("p")
       cardText.classList.add("card-text")
  cardText.innerHTML = `${texto}`
  const divborrar = document.createElement("div")
  divborrar.classList.add("position-absolute","bottom-0","end-0","p-3")
  const borrar = document.createElement("button")
  borrar.id = "borrar"
  borrar.classList.add("btn","btn-danger")
  borrar.innerHTML = "Borrar😣"
  borrar.addEventListener("click", () => { 
    
    if (confirm("desea borrar la tarjeta")) {
      divCuerpo.remove(); 
    }
    });
  divCard.appendChild(cardTitulo)
  divCard.appendChild(cardText)
  divborrar.appendChild(borrar)
  divCard.appendChild(divborrar)
  divCuerpo.appendChild(divCard)

  $cuerpo.appendChild(divCuerpo)
  
  
}





$form.addEventListener("submit",(e)=>{
e.preventDefault()
  const texto = document.querySelector("#formTarea").value;
  const titulo = document.querySelector("#formTitulo").value;
  idCard++
  agregarTarjeta(titulo,texto,idCard)
})


/*
  const agregarTarea = (event) => {
  event.preventDefault();
  let tarea = {titulo:document.getElementById("formularioTitulo").value,texto:document.getElementById("formularioTexto").value}
  tareas.push(tarea)
  limpiarForm()
}

console.log(tareas)



  */
  
  
 
