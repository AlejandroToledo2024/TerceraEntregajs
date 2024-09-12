const cardContenedor = document.getElementById("contenedorDeCartas")

fetch("/productos.json")
.then((response)=> response.json())
.then((data)=> console.log(data));