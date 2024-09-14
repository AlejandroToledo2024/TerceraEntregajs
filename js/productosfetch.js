const cardContenedor = document.getElementById("contenedorDeCartas");
const carrito = [];
fetch("../productos.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const card = document.createElement("div");
      card.innerHTML = `
      <div class="card">
      <img src= ${item.imageUrl} alt="Imagen del producto">
      <h2>${item.Nombre}</h2>
      <p>${item.descripcion}</p>
      <p>$${item.precio}</p>
    <button class = "nuevoBtn" >Agregar al carrito</button>
    </div>
      `;
      cardContenedor.appendChild(card);

      const botonAdd = card.querySelector(".nuevoBtn");
      botonAdd.addEventListener("click", () => {
        agregarAlCarrito(item);
      });
    });
  });

function agregarAlCarrito(item) {
  carrito.push(item);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  Toastify({
    text: `${item.Nombre} fue agregado al carrito`,

    duration: 3000,
  }).showToast();
}
