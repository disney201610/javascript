"use strict";

// register() es para registrar un evento de instalación

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("sw.js");
}

navigator.serviceWorker.getRegistration().then((registration) => {
  if (registration && registration.active)
    registration.active.postMessage("hola desde la página");
});

