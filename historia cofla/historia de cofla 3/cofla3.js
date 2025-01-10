class Celular {
   constructor(color, peso, tamaño, rdc, ram) {
      this.color = color;
      this.peso = peso;
      this.tamaño = tamaño;
      this.resolucionDeCamera = rdc;
      this.memoriaRam = ram;
      this.encendido = false;
   }

   precionarBotonEncendido() {
      if (this.encendido == false) {
         alert('celular prendido');
         this.encendido = true;
      } else {
         alert('celular apagado');
         this.encendido = false;
      }
   }
   reiniciar() {
      if (this.encendido == true) {
         alert('reiniciando celular');
      } else {
         alert('el celular esta apagado');
      }
   }
   tomarFoto() {
      alert(`foto tomada en una resolucion de: ${this.resolucionDeCamera}`);
   }
   grabarVideo() {
      alert(`grabando video en ${this.resolucionDeCamera}`);
   }
   mobileInfo() {
      return `
      Color: <b>${this.color}</b></br>
      Peso: <b>${this.peso}</b></br>
      Resolucion de video: <b>${this.resolucionDeCamera}</b></br>
      Tamaño: <b>${this.tamaño}</b></br>
      Memoria ram: <b>${this.memoriaRam}</b></br>
      `;
   }
}

class CelularAltaGama extends Celular {
   constructor(color, peso, tamaño, rdc, ram, rdce) {
      super(color, peso, tamaño, rdc, ram);
      this.recolucionDeCamaraExtra = rdce;
   }
   grabarVideoLento() {
      alert('estas grabando en camara lenta');
   }
   reconocimientoFacial() {
      alert('vamos a iniciar un reconocimiento facial');
   }
   InfoAltaGama() {
    return this.mobileInfo() + `Resolucion de camara extra: ${this.recolucionDeCamaraExtra}`
   }
}

// celular1 = new Celular('rojo', '150g', "5'", ' hd', '2GB');
// celular2 = new Celular('negro', '155g', "5.4'", 'full hd', '4GB');
// celular3 = new Celular('bñanco', '146g', "5.7'", 'full hd', '4GB');

// Celular1.precionarBotonEncendido();
// Celular1.tomarFoto();
// Celular1.grabarVideo();
// Celular1.reiniciar();
// Celular1.precionarBotonEncendido();

celular1 = new CelularAltaGama('rojo', '130g', '5.2', '4k', '3GB', 'full hd');
celular2 = new CelularAltaGama('rojo', '142g', '6', '4k', '4GB', 'hd');

document.write(`
    ${celular1.InfoAltaGama()} <br> <br>
    ${celular2.InfoAltaGama()} <br>
`);
