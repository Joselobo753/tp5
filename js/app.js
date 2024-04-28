const autor = {
    nombre: "Steve Gates",
    usuario: "",
    correo: "stevewinner@outlook.com",
    descripcion:
      "Fanático de la tecnología y profesor de las artes de programación con javascript",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsSVzcOZEqLQk9Ma142okaHnitwOAvlaCgTw&usqp=CAU",
  };
  
  const contenedorTarjeta = document.querySelector("#contenedor_tarjeta");
  
  const crearTarjeta = () => {
    contenedorTarjeta.innerHTML = "";
    const tarjeta = document.createElement("div");
    tarjeta.className = "card";
  
    let datosAutor =  `<div class="d-flex justify-content-center mt-2">
    <img src=${autor.imagen} class="card-img-top w-50" alt=${autor.nombre}>
    </div>
      <div class="card-body">
        <h5 class="card-title">${autor.nombre}</h5>
        <p class="card-text">${autor.descripcion}</p>
        <a href="#" class="btn btn-primary">Ver perfil</a>
      </div>`;
  
    tarjeta.innerHTML = datosAutor;
  
    contenedorTarjeta.append(tarjeta);
  };
  
  const modificarAutor = (event) => {
    event.preventDefault();
    console.log(event);
    autor.nombre = document.querySelector("#nombre").value;
    autor.descripcion = document.querySelector("#descripcion").value;
  
    crearTarjeta();
    limpiarForm();
  };
  
  const limpiarForm = () => {
    document.querySelector("#formulario").reset();
    document.querySelector("#nombre").focus();
  };
  
  crearTarjeta();
  
  document
    .querySelector("#formulario")
    .addEventListener("submit", modificarAutor); 



