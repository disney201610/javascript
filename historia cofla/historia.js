dineroCofla = prompt('¿Cuánto dinero tienes cofla?');
dineroRoberto = prompt('¿Cuánto dinero tienes Roberto?');
dineroPedro = prompt('¿Cuánto dinero tienes Pedro?');

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
   alert('Cofla, comprate el helado de agua');
   alert('Y te sobra ' + (dineroCofla - 0.6));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
   alert('Cofla, comprate el helado de crema');
   66;
   alert('Y te sobra ' + (dineroCofla - 1));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
   alert('Cofla, comprate el helado de heladix');
   alert('Y te sobra ' + (dineroCofla - 1.6));
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
   alert('Cofla, comprate el helado de heladovich');
   alert('Y te sobra ' + (dineroCofla - 1.7));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
   alert('Cofla, comprate el helado de helardo');
   alert('Y te sobra ' + (dineroCofla - 1.8));
} else if (dineroCofla >= 2.9) {
   alert('Cofla, comprate helado con confites o el pote de 1/4kg');
   alert('Y te sobra ' + (dineroCofla - 2.9));
} else {
   alert('Lo siento cofla, no te alcanza para ningun helado');
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
   alert('Roberto, comprate el helado de agua');
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
   alert('Roberto, comprate el helado de crema');
   66;
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
   alert('Roberto, comprate el helado de heladix');
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
   alert('Roberto, comprate el helado de heladovich');
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
   alert('Roberto, comprate el helado de helardo');
} else if (dineroRoberto >= 2.9) {
   alert('Roberto, comprate helado con confites o el pote de 1/4kg');
} else {
   alert('Lo siento Roberto, no te alcanza para ningun helado');
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
   alert('Pedro, comprate el helado de agua');
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
   alert('Pedro, comprate el helado de crema');
   66;
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
   alert('Pedro, comprate el helado de heladix');
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
   alert('Pedro, comprate el helado de heladovich');
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
   alert('Pedro, comprate el helado de helardo');
} else if (dineroPedro >= 2.9) {
   alert('Pedro, comprate helado con confites o el pote de 1/4kg');
} else {
   alert('Lo siento Pedro, no te alcanza para ningun helado');
}
