const libros = [
   {
      titulo: 'El señor de los anillos',
      autor: 'J.R.R. Tolkien',
      leido: true,
      categoria: 'Ciencia Ficcion'
   },
   {
      titulo: '1984',
      autor: 'George Orwell',
      leido: true,
      categoria: 'Ciencia Ficcion'
   },
   {
      titulo: 'Dune',
      autor: 'Frank Herbert',
      leido: false,
      categoria: 'Ciencia Ficcion'
   },
   {
      titulo: 'Harry Potter y la piedra filosofal',
      autor: 'J.K. Rowling',
      leido: true,
      categoria: 'Fantasia'
   },
   {
      titulo: 'El hobbit',
      autor: 'J.R.R. Tolkien',
      leido: true,
      categoria: 'Fantasia'
   },
   {
      titulo: 'El nombre del viento',
      autor: 'Patrick Rothfuss',
      leido: false,
      categoria: 'Fantasia'
   },
   {
      titulo: 'La casa de los espíritus',
      autor: 'Isabel Allende',
      leido: true,
      categoria: 'Drama'
   },
   {
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      leido: false,
      categoria: 'Drama'
   },
   {
      titulo: 'Matar a un ruiseñor',
      autor: 'Harper Lee',
      leido: true,
      categoria: 'Drama'
   },
   {
      titulo: 'El codigo Da Vinci',
      autor: 'Dan Brown',
      leido: false,
      categoria: 'Drama'
   },
   {
      titulo: 'Orgullo y prejuicio',
      autor: 'Jane Austen',
      leido: true,
      categoria: 'Drama'
   },
   {
      titulo: 'La sombra del viento',
      autor: 'Carlos Ruiz Zafon',
      leido: false,
      categoria: 'Drama'
   },
   {
      titulo: 'Drácula',
      autor: 'Bram Stoker',
      leido: true,
      categoria: 'Fantasia'
   },
   {
      titulo: 'Frankenstein',
      autor: 'Mary Shelley',
      leido: true,
      categoria: 'Ciencia Ficcion'
   },
   {
      titulo: 'Los juegos del hambre',
      autor: 'Suzanne Collins',
      leido: false,
      categoria: 'Ciencia Ficcion'
   },
   {
      titulo: 'Rayuela',
      autor: 'Julio Cortázar',
      leido: false,
      categoria: 'Drama'
   },
   {
      titulo: 'El principito',
      autor: 'Antoine de Saint-Exupéry',
      leido: true,
      categoria: 'Fantasia'
   },
   {
      titulo: 'Crimen y castigo',
      autor: 'Fiodor Dostoyevski',
      leido: true,
      categoria: 'Drama'
   },
   {
      titulo: 'El alquimista',
      autor: 'Paulo Coelho',
      leido: false,
      categoria: 'Drama'
   },
   {
      titulo: 'La metamorfosis',
      autor: 'Franz Kafka',
      leido: true,
      categoria: 'Ciencia Ficcion'
   }
];

const Drama = document.querySelector('.Drama');
const CienciaFiccion = document.querySelector('.Ciencia_Ficcion');
const Fantasìa = document.querySelector('.Fantasia');

for (let i = 0; i < libros.length; i++) {
   const libro = document.createElement('div');
   const info = `${libros[i].titulo} de ${libros[i].autor}`; // Esta de mas
   if (libros[i].leido) {
      libro.setAttribute('class', 'leido');
   } else {
      libro.setAttribute('class', 'no-leido');
   }
   libro.innerHTML = `<h2>#${i}</h2><br><h3>${info}</h3><br>`;
   // if (libros[i].categoria == 'Drama') {
   //    Drama.appendChild(libro);
   // }
   // if (libros[i].categoria == 'Ciencia Ficcion') {
   //    CienciaFiccion.appendChild(libro);
   // }
   // if (libros[i].categoria == 'Fantasia') {
   //    Fantasìa.appendChild(libro);
   // }
   switch (libros[i].categoria) {
      case 'Drama':
         Drama.appendChild(libro);
         break;
      case 'Ciencia Ficcion':
         CienciaFiccion.appendChild(libro);
         break;
      case 'Fantasia':
         Fantasìa.appendChild(libro);
         break;
   }
}
