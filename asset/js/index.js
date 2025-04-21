precio = 400000


const precioBase = 400000; 
const precioInicialSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const botonIncrementar = document.querySelector(".mas"); 
const botonDecrementar = document.querySelector(".menos"); 
const valorTotalSpan = document.querySelector(".valor-total");

let cantidadProductos = 0;

precioInicialSpan.innerHTML = precioBase;
valorTotalSpan.innerHTML = 0; 

function actualizarTotal() {
  cantidadSpan.innerHTML = cantidadProductos;
  const totalAPagar = precioBase * cantidadProductos;
  valorTotalSpan.innerHTML = totalAPagar;
}

botonIncrementar.addEventListener("click", () => {
  cantidadProductos++;
  actualizarTotal();
});


botonDecrementar.addEventListener("click", () => {
  if (cantidadProductos > 0) {
    cantidadProductos--;
    actualizarTotal();
  }
});
