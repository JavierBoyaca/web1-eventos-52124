//seleccionar el boton del menu
let boton = document.querySelector(".icon");
console.log(boton);

boton.addEventListener("click", () =>{
    //alerta ("diste click al boton")
    let menu = document.querySelector ("#myNavbar");
    //console.log(menu)
    menu.classList.toggle("responsive")
})