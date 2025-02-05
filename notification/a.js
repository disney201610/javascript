'use strict';

!(Notification in window)
? console.log('las notificaciones no estan disponibles')
: console.log('las notificaciones estan disponibles');


Notification.requestPermission(()=> {
    if(Notification.permission === 'granted') {
        new Notification('Hola mundo');
    }
})