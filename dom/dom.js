// ---- Parte 1 ----

// const pepe = document.querySelector('h2');

// document.write(pepe);

// for (let i = 0; i < pepe.length; i++) {
//    document.write(pepe[i] + '<br>');
// }

// ---- Parte 2 ----

// const h1 = document.querySelector('h1');

// document.write(h1.getAttribute('class') + '<br><br>');

// const input = document.querySelector('input');

// document.write(input.getAttribute('type'));
// document.write(input.getAttribute('value'));

// const inputs = document.querySelectorAll('form input');

// for (let i = 0; i < inputs.length; i++) {
//    document.write(inputs[i].getAttribute('type') + '<br>');
// }

// h1.setAttribute('class', 'medio');

// input = document.querySelector("input[type='text']");
// input.setAttribute('type', 'text');

// h1.removeAttribute('class');

// ---- Parte 3 ----

// const input = document.querySelector('input');

// input.className = 'Hola';
// a = input.className;
// document.write(a);

// const titulo = document.querySelector('.titulo');
// let valor = titulo.classList.contains('grande');
// document.write(valor);

// ---- Parte 4 ----

// const h1 = document.createElement('h1');
// const body = document.body;

// => Poner texto a elemento
// Forma 1:
// h1.textContent = 'Gael sos crack <br>';
// Forma 2:
// h1.innerHTML = 'Gael sos crack <br> asd';
// Forma 3:
// h1.innerText = 'Gael sos crack <br> asd';
// Forma 4:
// const texto = document.createTextNode('Gael sos crack');
// h1.appendChild(texto);

// body.appendChild(h1);

// Mini ejercicio

// const milista = ['Manzana', 'Uvas', 'Harina', 'Huevos', 'Aceite'];
// const ol = document.getElementById('ejercicio');
// const fragment = document.createDocumentFragment();
// milista.forEach((e) => {
//    const li = document.createElement('li');
//    li.textContent = e;
//    fragment.appendChild(li);
// });

// ol.appendChild(fragment);

// for (let i = 0; i < milista.length; i++) {
//    const li = document.createElement('li');
//    li.textContent = milista[i];
//    ol.appendChild(li)
// }

// ---- Parte 5 ----
// const ol = document.querySelector('ol');
// for (let i = 0; i < ol.children.length; i++) {
//    console.log(ol.children[i].textContent);
// }

// console.log(ol.childNodes);

// const nombre = 4;
// ol.removeChild(ol.children[nombre - 1]);

// ol.replaceChild(ol.children[1], ol.children[3]);

// console.log(ol.children[0].hasChildNodes());

const li = document.getElementById('primero');

// console.log(li.parentElement.firstElementChild);

console.log(li.nextElementSibling.nextElementSibling.previousElementSibling.textContent);
