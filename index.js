const cuerpo = document.body;
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el contenedor donde se agregarán las tarjetas
  const contenedorDeCartas = document.getElementById("contenedorDeCartas");

  // Array de objetos que contiene la información para cada tarjeta
  const cardData = [
    {
      Nombre: "Producto1",
      descripcion: "Descripción tarjeta 1",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      Nombre: "Producto2",
      descripcion: "Descripción tarjeta 2",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      Nombre: "Producto3",
      descripcion: "Descripción tarjeta 3",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      Nombre: "Producto4",
      descripcion: "Descripción tarjeta 4",
      imageUrl: "https://via.placeholder.com/200",
    },
  ];

  // Función para crear una tarjeta
  function createCard(nombre, descripcion, imageUrl) {
    // Crea un nuevo elemento div para la tarjeta
    const card = document.createElement("div");
    card.className = "card";

    // Crea el elemento de la imagen de la tarjeta
    const cardImage = document.createElement("img");
    cardImage.src = imageUrl;
    cardImage.alt = "Imagen del producto";

    // Crea el título de la tarjeta
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = nombre;

    // Crea la descripción de la tarjeta
    const cardDescription = document.createElement("p");
    cardDescription.textContent = descripcion;

    // Agrega los elementos de la tarjeta al div de la tarjeta
    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);

    // Retorna el div de la tarjeta creada
    return card;
  }

  // Recorre el array de datos y crea una tarjeta para cada objeto
  cardData.forEach((data) => {
    // Llama a la función createCard con los datos de la tarjeta
    const card = createCard(data.Nombre, data.descripcion, data.imageUrl);

    // Agrega la tarjeta al contenedor
    contenedorDeCartas.appendChild(card);
  });
});
const boton = document.getElementById("toggle-button");
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("toggle-button");
  boton.className = "mode-dark";
  boton.addEventListener("click", () => {
    cuerpo.classList.toggle("mode-dark");
    cambiarTexto()
  });

document.addEventListener('DOMContentLoaded' , function(){
    let modoObscuro = document.getElementById('toggle-button')
    modoObscuro.addEventListener('click', () => {
        const infoBoton = modoObscuro.getAttribute('data-info');
        localStorage.setItem ('infoBoton' , info);
        console.log(infoBoton);
    })
})


  function cambiarTexto() {
    if (cuerpo.classList.contains("mode-dark")) {
      boton.textContent = " Modo Claro";
      boton.style.backgroundColor = 'white';
      boton.style.color = 'black';
    } else {
      boton.textContent = " Modo Oscuro";
      boton.style.backgroundColor = 'black';
      boton.style.color = 'white';
    }
  }
  function guardarModoObscuroLStorage (){
    localStorage.setItem("modoObscuro", "mode-dark") 
  }
  
  cambiarTexto()
});
