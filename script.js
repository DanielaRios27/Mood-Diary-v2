const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const email = document.querySelector("#email");
const form = document.querySelector("form");

function mostrarInfo(evento) {
  evento.preventDefault();
  console.log("Hola la información que se envió es la siguiente:");
  console.log(nombre.value);
  console.log(edad.value);
  console.log(email.value);
}

form.addEventListener("submit", mostrarInfo);
