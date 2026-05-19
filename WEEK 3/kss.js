const titulo = document.getElementById("Titulo");
titulo.textContent = "You're a Diavolo";

const parrafo = document.getElementById("Parrafo");
parrafo.textContent = "Brainrotten tomatoes";

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    parrafo.textContent = "Changed text";
});