const sumar = (num1, num2) => {
   return parseInt(num1) + parseInt(num2);
};
const restar = (num1, num2) => {
   return parseInt(num1) - parseInt(num2);
};
const dividir = (num1, num2) => {
   return parseInt(num1) / parseInt(num2);
};
const multiplicar = (num1, num2) => {
   return parseInt(num1) * parseInt(num2);
};

alert('¿que operacion deseas realizar?');
let operacion = prompt('1: sumar, 2: restar, 3: dividir, 4: multiplicar');

if (operacion == 1) {
   let numero1 = prompt('ingresa el primer numero para sumar');
   let numero2 = prompt('ingresa el segundo numero para sumar');
   resultado = sumar(numero1, numero2);
   alert(`El resultado de la suma es: ${resultado}`);
} else if (operacion == 2) {
   let numero1 = prompt('ingresa el primer numero para restar');
   let numero2 = prompt('ingresa el segundo numero para restar');
   resultado = restar(numero1, numero2);
   alert(`El resultado de la resta es: ${resultado}`);
} else if (operacion == 3) {
   let numero1 = prompt('ingresa el primer numero para dividir');
   let numero2 = prompt('ingresa el segundo numero para dividir');
   resultado = dividir(numero1, numero2);
   alert(`El resultado de la divicion es: ${resultado}`);
} else if (operacion == 4) {
   let numero1 = prompt('ingresa el primer numero para multiplicar');
   let numero2 = prompt('ingresa el segundo numero para multiplicar');
   resultado = multiplicar(numero1, numero2);
   alert(`El resultado de la multiplicacion es: ${resultado}`);
} else {
   alert('no se ha seleccionado una operacion valida');
}
