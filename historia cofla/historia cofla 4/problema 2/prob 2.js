const materias = {
   fisica: ['Martinez', 'perez', 'pedro', 'pepito', 'cofla', 'maria'],
   programacion: ['Gutierres', 'pepito', 'juan', 'maria'],
   logica: [
      'Rodrigues',
      'hernandez',
      'pedro',
      'pepito',
      'juan',
      'maria',
      'maria'
   ],
   quimica: ['Dalto', 'gomez', 'pedro', 'pepito', 'juan', 'maria', 'cofla']
};

const obtenerInformacion = (materia) => materias[materia] || null;

const mostrarInformacion = (materia) => {
   const info = obtenerInformacion(materia);
   if (info) {
      const [profesor, ...alumnos] = info;
      document.write(`
           El profesor de <b>${materia}</b> es: <b style="color:red">${profesor}</b><br>
           Los alumnos son: <b style="color:blue">${alumnos.join(
              ', '
           )}</b><br><br>
       `);
   }
};

const cantidadDeClases = (alumno) => {
   const totalClases = Object.values(materias).filter((clase) =>
      clase.includes(alumno)
   ).length;
   return `<b style="color:blue">${alumno}</b> está inscrito en <b style="color:red">${totalClases}</b> clases.`;
};

// Mostrar información de las materias
['fisica', 'programacion', 'logica', 'quimica'].forEach(mostrarInformacion);

// Mostrar cantidad de clases de un alumno
document.write(cantidadDeClases('cofla'));
