// como trabajar con fechas

var fecha = new Date();// con esto se genera la fecha actual (time stamp)

var textoHora = `
  año: ${fecha.getFullYear()}  
  mes: ${fecha.getMonth()} 
  dia: ${fecha.getDay()}
`;

console.log(textoHora);