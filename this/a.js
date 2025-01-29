persona = {
  edad: 13,
  nombre: "Gael",
  frase: function () {
    return `Mi nombre es ${this.nombre} y tengo ${this.edad} años`;
  },
};

// console.log(persona.frase()); // Mi nombre es gael y tengo 13 años

titulos = document.querySelectorAll("h1");
titulos.forEach((titulo) => {
  titulo.addEventListener("click", function () {
    console.log("Hola desde h1 ", this.textContent);
  });
});
