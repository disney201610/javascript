// for (let i = 0; i < 20; i++) {
//       if (i == 13) {
//       continue;
//    }
//    document.write(i + "<br>");

// }

array1 = ['maria', 'josefa', 'roberta'];
array2 = ['pedro', 'marcelo', array1];

forRancio: for (let array in array2) {
   if (array == 2) {
      for (let array of array1) {
         document.write(array + '<br>');
         continue forRancio;
         
      }
   } else {
      document.write(array2[array] + '<br>');
   }
}
