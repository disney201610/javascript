// cuando mandamos un objeto a un servidor, se convierte en un string, osea en ''

const serializado = '{"variable1" : "valor1","variable2" : "valor2" }';

// la forma de serializar un objeto es con JSON.stringify
//la forma de deserializar un objeto es con JSON.parse

const deserializado = JSON.parse(serializado);
console.log( deserializado);


