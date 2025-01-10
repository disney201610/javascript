const materiasHTML = document.querySelector('.materias');
const materias = [
   {
      nombre: 'Matemáticas',
      nota: 7
   },
   {
      nombre: 'Historia',
      nota: 8
   },
   {
      nombre: 'Geografía',
      nota: 9
   },
   {
      nombre: 'Lengua',
      nota: 7
   },
   {
      nombre: 'Física',
      nota: 8
   }
];

const obtenerMateria = (id) => {
   return new Promise((resolve, reject) => {
      materia = materias[id];
      if (materia == undefined) reject('la materia no existe');
      else
         setTimeout(() => {
            resolve(materia);
         }, Math.random() * 1400);
   });
};

const devolverMaterias = async () => {
   let materia = [];
   for (let i = 0; i < materias.length; i++) {
      materia[i] = await obtenerMateria(i);
      console.log(materia[i]);
      let newHTMLCode = `
         <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
         </div>`;
         materiasHTML.innerHTML += newHTMLCode;
   }
};

devolverMaterias();
