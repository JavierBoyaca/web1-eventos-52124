//seleccionar campo de contraseña
let contraInput = document.querySelector("#psw");
let mensajes = document.querySelector("#message");
let minusculas = document.querySelector("#letter");
let mayusculas = document.querySelector("#capital");
let numeros = document.querySelector("#numeros");
let minimo = document.querySelector("#length");

//console.log(contraInput);
//agregar evento focus
contraInput.addEventListener("focus", () => {
  console.log("estoy escribiendo ...");
  mensajes.style.display = "block";
});
//agregar evento blur
contraInput.addEventListener("blur", () => {
  console.log("perdi el foco");
  mensajes.style.display = "none";
});
//agregar evento del teclado
contraInput.addEventListener("keyup", (e) => {
  console.log(contraInput.value);
});
//agregar eventos al teclado
let minus = /[a-z]/g;
contraInput.addEventListener("keyup", (e) => {
  console.log(contraInput.value);
  if (contraInput.value.match(minus)) {
    minusculas.classList.add("valid");
    minusculas.classList.remove("invalid");
  } else {
    minusculas.classList.add("invalid");
    minusculas.classList.remove("valid");
  }
});
