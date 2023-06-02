// a. Crea un botón en HTML y añade un evento onClick que muestre un mensaje por
// consola cuando se haga clic en el botón.

const boton= document.createElement("button");
boton.textContent= "Click";
document.body.appendChild(boton);
boton.addEventListener("click", function() {
    alert("exito!");
  });

