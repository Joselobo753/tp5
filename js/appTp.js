const imagenes = [
  {
    imagen:
      "https://images.ctfassets.net/rporu91m20dc/7HLZ1zRm8g8kCgki0aa8Oq/511ab54d985e6309b6ee8d89190f1f7a/Fallout76_LargeHero_OfficialReveal.jpg",
    alt: "casco Fall out",
  },
  {
    imagen:
      "https://i.pinimg.com/236x/21/2e/19/212e1945ca46b3dfcd247e454dfb5d32.jpg",
    alt: "mario",
  },
];

function cambiarImagen() {
  const imgActual = imagenes[actual];
  const cardImg = document.querySelector(".card");
  let tarjeta = ` <img src="${imgActual.imagen}" class="card-img-top" alt="${imgActual.alt}">
    <h3>${imgActual.alt} </h3>
    <button id="cambiar" class="btn btn-primary ">Cambiar imagen</button>
    `;
  cardImg.innerHTML = tarjeta;
}

let actual = 0;
cambiarImagen();
document.getElementById("cambiar").addEventListener("click", cambiarImagen);

function empezar() {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  console.log(numeroAleatorio)
  const eje1 = document.querySelector("#Ejercicio1");
  eje1.innerHTML = "";
  let etiquetas1 = /* html*/ `<form>
  <div >
    <label >Ingresa el número misterioso</label>
    <input type="text" id="numeroMisterioso" placeholder="Número misterioso">
  </div>
  <button type="submit" class="btn btn-primary">Cebar? 🧉</button>
  </form>  `;
  eje1.innerHTML = etiquetas1
}

document.getElementById("btn1").addEventListener("click", empezar);
