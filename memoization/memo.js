"use strict";

const haceraAlgo = (num) => {
  const a = 20;
  const b = 12;
  let c = 0;
  for (let i = num - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      c += a * b;
    }
  }
  return c;
};

const date = new Date();

haceraAlgo(60000);

console.log(new Date() - date); 