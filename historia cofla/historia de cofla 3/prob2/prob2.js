class App {
   constructor(descargas, puntuacion, peso) {
      this.descargas = descargas;
      this.puntuacion = puntuacion;
      this.peso = peso;
      this.iniciada = false;
      this.instalada = false;
   }

   instalar() {
      if (this.instalada == false) {
         this.instalada = true;
         alert('App instalada correctamente');
      }
   }
   desinstalar() {
      if (this.instalada == true) {
         this.instalada = false;
         alert('App desinstalada correctamente');
      }
   }
   abrir() {
      if (this.iniciada == false && this.instalada == true) {
         this.iniciada = true;
         alert('App iniciada');
      }
   }
   cerrar() {
      if (this.iniciada == true && this.instalada == true) {
         this.iniciada = false;
         alert('App cerrada');
      }
   }
   appInfo() {
      return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `;
   }
}

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();

app = new App('19.000', '5 estrellas', '900MB');
app2 = new App('10.000', '4 estrellas', '400MB');
app3 = new App('16.000', '3 estrellas', '900MB');
app4 = new App('16.000', '4 estrellas', '500');
app5 = new App('17.300', '2 estrellas', '900MB');
app6 = new App('36.400', '5.2 estrellas', '600MB');
app7 = new App('42.350', '1.3 estrellas', '1GB');

document.write(`
      ${app.appInfo()}<br>
      ${app2.appInfo()}<br>
      ${app3.appInfo()}<br>
      ${app4.appInfo()}<br>
      ${app5.appInfo()}<br>
      ${app6.appInfo()}<br>
      ${app7.appInfo()}<br>
   `);
