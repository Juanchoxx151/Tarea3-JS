const persona = {
  nombre: "Juan",
  edad: 19,
  status: "admin" // "guest", "user"
}

// if (persona.edad > 18) {
//   console.log("Es mayor de edad");
// } else if (persona.edad === 18) {
//   console.log("Tiene justo 18 años");
// } else {
//   console.log("Es menor de edad");
// }

// switch (persona.status) {
//   case "admin":
// //    console.log("Tiene acceso total");
//     break;
//   case "user":
// //    console.log("Tiene acceso limitado");
//     break;
//   default:
// //    console.log("No tiene acceso");
//     break;
// }

// let visibilidad = persona.status === "admin" && "visible"
// let visibilidad2 = persona.status === "admin" ? "visible" : "hidden";

// if (persona.status === "admin") {
// //  console.log("Permiso para editar: true");
// } else {
// //  console.log("Permiso para editar: false");
// }

// console.log(visibilidad);

// function saludar(nombre = "Mundo") {
function operador(numero1, numero2, operador){
  let resultado;
  if (typeof numero1 == "number" && typeof numero2 == "number") {
    console.log(`Ambos son números`);
    switch (operador) {
      case "+":
        resultado = numero1 + numero2;
        console.log(`El resultado es: ${resultado}`);
       break;
      case "-":
        resultado = numero1 - numero2,
        console.log(`El resultado es: ${resultado}`);
        break;
      default:
        resultado = "Operador no reconocido";
        console.log(`El resultado es; ${resultado}`);
    }
  } else {
    console.log(`No ingresó números!!!`);
  }
}
operador("Juan Manuel")
// saludar("Juan");
// saludar("Ramiro");
// saludar("Guachin");
/*
let array = [1, 2, 3, 4, 5];

array.map((num) => {
  return num * 2;
}
*/
// function multiplicar(a, b) {
//   return a * b;
// }

// const multiplicarArrow = (a, b) => a * b;

//  console.log(multiplicar(4, 5));
// console.log(multiplicar(4, 5));