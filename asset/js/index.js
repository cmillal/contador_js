precio = 400000


precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const precioBase = 400000; // Definimos el precio base como una constante
const precioInicialSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const botonIncrementar = document.querySelector(".mas"); // Selecciona el primer botón dentro de .card
const botonDecrementar = document.querySelector(".menos"); // Selecciona el segundo botón dentro de .card
const valorTotalSpan = document.querySelector(".valor-total");

let cantidadProductos = 0;

// Inicializar el precio base en el HTML
precioInicialSpan.innerHTML = precioBase;
valorTotalSpan.innerHTML = 0; // Inicializar el total a pagar

// Función para actualizar la cantidad y el total
function actualizarTotal() {
  cantidadSpan.innerHTML = cantidadProductos;
  const totalAPagar = precioBase * cantidadProductos;
  valorTotalSpan.innerHTML = totalAPagar;
}

// Evento para el botón de incrementar
botonIncrementar.addEventListener("click", () => {
  cantidadProductos++;
  actualizarTotal();
});

// Evento para el botón de decrementar
botonDecrementar.addEventListener("click", () => {
  if (cantidadProductos > 0) {
    cantidadProductos--;
    actualizarTotal();
  }
});
