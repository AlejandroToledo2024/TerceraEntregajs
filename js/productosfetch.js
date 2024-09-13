const cardContenedor = document.getElementById("contenedorDeCartas");

fetch("../productos.json")
  .then((response) => response.json())
  .then((data) => {
    for (item of data){
      const card = document.createElement("div");
      card.innerHTML = `
      <div class="card">
      <img src= ${item.imageUrl} alt="Imagen del producto">
      <h2>${item.Nombre}</h2>
      <p>${item.descripcion}</p>
      <p>$${item.precio}</p>
      <button class="nuevoBtn" id="1">Agregar al carrito</button>
      </div>
      `;
      cardContenedor.appendChild(card);
    };
  });
