"use strict";

// Verificar si las notificaciones estan disponibles

!(Notification in window)
  ? console.log("las notificaciones no estan disponibles")
  : console.log("las notificaciones estan disponibles");

// si las notificaciones estan disponibles, new notification

Notification.requestPermission(() => {
  if (Notification.permission === "granted") {
    new Notification("Hola mundo");
  }
});
