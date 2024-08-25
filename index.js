const cardData = [
  {
    id: 1,
    Nombre: "Producto1",
    descripcion: "Descripción tarjeta 1",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    Nombre: "Producto2",
    descripcion: "Descripción tarjeta 2",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    Nombre: "Producto3",
    descripcion: "Descripción tarjeta 3",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    Nombre: "Producto4",
    descripcion: "Descripción tarjeta 4",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    Nombre: "Producto4",
    descripcion: "Descripción tarjeta 4",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    Nombre: "Producto4",
    descripcion: "Descripción tarjeta 4",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    id: 7,
    Nombre: "Producto4",
    descripcion: "Descripción tarjeta 4",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    id: 8,
    Nombre: "Producto4",
    descripcion: "Descripción tarjeta 4",
    imageUrl: "https://via.placeholder.com/200",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const contenedorDeCartas = document.getElementById("contenedorDeCartas");


  function createCard(nombre, descripcion, imageUrl) {
    const card = document.createElement("div");
    card.className = "card";

    const cardImage = document.createElement("img");
    cardImage.src = imageUrl;
    cardImage.alt = "Imagen del producto";

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = nombre;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = descripcion;

    const botonAdd = document.createElement("button");
    botonAdd.textContent = "Agregar al carrito";    
    botonAdd.id = 'botonAdd'
    botonAdd.classList = 'nuevoBtn'

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(botonAdd);

    return card;
  }

  cardData.forEach((data) => {
    const card = createCard(data.Nombre, data.descripcion, data.imageUrl);

    contenedorDeCartas.appendChild(card);
  });
});
// document.querySelectorAll('.button').forEach(button => {
//     button.addEventListener('click', () => {
//         const idProducto = Event.AT_TARGET.getAttribute('data-id'); 
//         agregarAlCarrito(idProducto);
// });
// function agregarAlCarrito(idProducto){
//     let carrito = JSON.parse(localStorage.getItem ('carrito')) || [] ;
//     if (!carrito.includes(idProducto)){
//         carrito.push(idProducto);
//         localStorage.setItem('carrito', JSON.stringify(carrito));
//     } 
//     }
// });

let modo = localStorage.getItem("Modo");

document.addEventListener("DOMContentLoaded", function () {
  const cuerpo = document.body;
  const boton = document.getElementById("toggle-button");

  if (modo === "mode-dark") {
    cuerpo.classList.add("mode-dark");
  }

  function cambiarTexto() {
    if (cuerpo.classList.contains("mode-dark")) {
      boton.textContent = "Modo Claro";
      boton.style.backgroundColor = "white";
      boton.style.color = "black";
    } else {
      boton.textContent = "Modo Oscuro";
      boton.style.backgroundColor = "black";
      boton.style.color = "white";
    }
  }

  function guardarModoObscuroLstorage() {
    if (cuerpo.classList.contains("mode-dark")) {
      localStorage.setItem("Modo", "mode-dark");
    } else {
      localStorage.removeItem("Modo");
    }
  }

  cambiarTexto();

  boton.addEventListener("click", () => {
    cuerpo.classList.toggle("mode-dark");

    guardarModoObscuroLstorage();

    cambiarTexto();
  });
});
