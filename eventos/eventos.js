//seleccionar las etiquetas
let h2 = document.querySelector("h2");
let cambiarTexto = () => {
  h2.textContent = "ok 👽";
  h2.style.color = "blue";
};
let volverTexto = () => {
  h2.textContent = "pasar el raton";
  h2.style.color = "grey";
};
//manejador de eventos
h2.addEventListener("mouseover", cambiarTexto);
h2.addEventListener("mouseout", volverTexto);
h2.addEventListener("dblclick", () => {
  alert("diste doble click");
});
