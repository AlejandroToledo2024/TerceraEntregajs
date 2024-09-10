


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
setTimeout(() => {Swal.fire("No te olvides de seguirnos en nuetras redes sociales y no perderte nuestros sorteos");

}, 4000); 