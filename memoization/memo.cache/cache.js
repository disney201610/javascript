"use strict";

// cache.add sirve para añadir un recurso al cache

caches.open("version1").then((cache) => {
  cache.add("index.html");
});
