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



document.getElementById("mostarCarro").addEventListener("click", () => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoContainer = document.getElementById("carritoContainer");

  carrito.forEach((data, index) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="card">
      <img src= ${data.imageUrl} alt="Imagen del producto">
      <h2>${data.Nombre}</h2>
      <p>${data.descripcion}</p>
      <p>$${data.precio}</p>
    <button class = "boton-eliminar">Eliminar del carrito</button>
    </div> `

    carritoContainer.appendChild(card)

    const botonRem = card.querySelector(".boton-eliminar");
    botonRem.addEventListener ("click", ()=>{
      eliminarDelCarrito(data);
    });

    function eliminarDelCarrito(){
      carrito.splice(index);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      carritoContainer.removeChild(card);
      Toastify({

        text:"Se ha eliminado Correctamente",
        
        duration: 3000
        
        }).showToast();

  }
  })
});