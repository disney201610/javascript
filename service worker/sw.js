// self es como this, pero para el service worker

self.addEventListener("install", (e) => {
  console.log("instalando service worker");
});

// end of service worker script

self.addEventListener("activate", (e) => {
  console.log("el service worker esta activo");
});

self.addEventListener("fetch", (e) => {
  console.log("service worker interceptando la petición");
});

self.addEventListener("message", (e) => {
  console.log("se ha recibido un mensaje desde la página:");
  console.log(e.data);
});


self.addEventListener("message", (e) => {
    console.log("hemos recibido un mensaje desde el service worker:");
    console.log(e.data);
    e.source.postMessage("hola como te va");
  });

