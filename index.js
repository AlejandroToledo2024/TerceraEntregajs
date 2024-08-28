const cardData = [
  {
    id: 1,
    Nombre: "Producto1",
    descripcion: "Descripción tarjeta 1",
    imageUrl: "https://via.placeholder.com/200",
    precio: 1500,
  },
  {
    id: 2,
    Nombre: "Producto2",
    descripcion: "Descripción tarjeta 2",
    imageUrl: "https://via.placeholder.com/200",
    precio: 2000,
  },
  {
    id: 3,
    Nombre: "Producto3",
    descripcion: "Descripción tarjeta 3",
    imageUrl: "https://via.placeholder.com/200",
    precio: 2500,
  },
  {
    id: 4,
    Nombre: "Producto4",
    descripcion: "Descripción tarjeta 4",
    imageUrl: "https://via.placeholder.com/200",
    precio: 3000,
  },
  {
    id: 5,
    Nombre: "Producto5",
    descripcion: "Descripción tarjeta 4",
    imageUrl: "https://via.placeholder.com/200",
    precio: 3500,
  },
  {
    id: 6,
    Nombre: "Producto6",
    descripcion: "Descripción tarjeta 4",
    imageUrl: "https://via.placeholder.com/200",
    precio: 4000,
  },
  {
    id: 7,
    Nombre: "Producto7",
    descripcion: "Descripción tarjeta 4",
    imageUrl: "https://via.placeholder.com/200",
    precio: 4500,
  },
  {
    id: 8,
    Nombre: "Producto8",
    descripcion: "Descripción tarjeta 4",
    imageUrl: "https://via.placeholder.com/200",
    precio: 5000,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const contenedorDeCartas = document.getElementById("contenedorDeCartas");

  function createCard(nombre, descripcion, imageUrl, id , precio) {
    const card = document.createElement("div");
    card.className = "card";

    const cardImage = document.createElement("img");
    cardImage.src = imageUrl;
    cardImage.alt = "Imagen del producto";

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = nombre;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = descripcion;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);

    return card;
  }
  cardData.forEach((data ) => {
    const card = createCard(
      data.Nombre,
      data.descripcion,
      data.imageUrl,
      
    );
    const botonAdd = document.createElement("button");
    botonAdd.textContent = "Agregar al carrito";
    botonAdd.classList = "nuevoBtn";
    botonAdd.id = data.id;

    card.appendChild(botonAdd);
    contenedorDeCartas.appendChild(card);
    botonAdd.addEventListener ( 'click' , () => {
      const product = data;
      carrito.push({
        nombre:product.Nombre,
        precio:product.precio,
        descripcion:product.descripcion

      })
      localStorage.setItem('carrito', JSON.stringify(carrito));

    } )
  });
});

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

let carrito = [];

const botones = document.querySelectorAll('.nuevoBtn');

botones
