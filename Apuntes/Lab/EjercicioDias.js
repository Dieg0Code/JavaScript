const hoy = new Date();
let dia = hoy.getDay();

const obtenerDia = (dia) => {

  const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

return diasDeLaSemana[dia];

}

console.log(obtenerDia(dia));