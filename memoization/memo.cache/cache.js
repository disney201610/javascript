"use strict";

// cache.add sirve para añadir un recurso al cache
//cache.addALL sirve para añadir varios recursos al cache
//cache.match sirve para buscar un recurso en el cache
//cache.matchAll sirve para buscar varios recursos en el cache
//cache.put sirve para añadir un recurso al cache
//cache.delete sirve para eliminar un recurso del cache
//cache.keys sirve para obtener todos los recursos del cache

caches.open("version1").then((cache) => {
  cache.add("index.html");
  cache.keys().then(keys => {
    console.log(keys);
  });
});