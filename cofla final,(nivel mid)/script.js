const getInfo = async () => {
   let aprobados = document.querySelector('.num-aprobados');
   let desaprobados = document.querySelector('.num-desaprobados');
   try {
      const res = await fetch('informacion.txt');
      const data = await res.json();
      aprobados.innerHTML = data.aprobados;
      desaprobados.innerHTML = data.desaprobados;
   } catch (e) {
      aprobados.innerHTML = 'La Api fallo';
      desaprobados.innerHTML = 'La Api fallo';
   }
};

document.querySelector('.getInfo').addEventListener('click', getInfo);
