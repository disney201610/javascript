// let nombre = 'pedro';

// //  el reject sirve para cuando la promesa no es correcta

// // en general sirve para manejar alos errores

// const promesa = new Promise((resolve, reject) => {
//    if (nombre !== 'pedro') reject('El nombre no es Pedro');
//    else resolve(nombre);
// });

// // el then es para cuando la promesa es correcta
// // el catch es para cuando la promesa no es correcta

// promesa
//    .then((resultado) => console.log(resultado))
//    .catch((e) => {
//       console.log(e);
//    });

// const objetos = {
//    propiedad1: 'valor1',
//    propiedad2: 'valor2',
//    propiedad3: 'valor3'
// };

const obtenerInformacion = (text) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(text);
      }, Math.random() * 200);
   });
};

const mostrarData = async () => {
   data1 = obtenerInformacion('data1');
   data2 = obtenerInformacion('data2');
   data3 = obtenerInformacion('data3');
   console.log(await data1);
   console.log(await data2);
   console.log(await data3);
};

mostrarData();

// obtenerInformacion().then((resultado) => console.log(resultado));

// const mostrarResultado = async () => {
//    resultado = await obtenerInformacion();
//    console.log(resultado);
// };

// mostrarResultado();
