addEventListener("message", (e) => {
  if (e.data.length > 4) {
    console.log(e.data);
    postMessage("Mensaje 2");
  }
});
