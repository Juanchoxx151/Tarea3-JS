
// let nombre = "Juan";
// console.log(nombre)



// let nombre = "juan";
// var edad = 21;
// const dni = 46226864;

// if (edad > 18) {
//     var apellido = "barroso";
//      console.log(nombre);
//      console.log(apellido);
// }

let nombre = prompt("Ingrese su nombre: ");
let edad = parseInt(prompt("Ingrese su edad: "));
let cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar"));

console.log("Datos ingresados:");
console.log(nombre, edad, cantidadEntradas);

if (nombre = "") {
    console.log("El nombre no puede estar vacío.");
} else if (cantidadEntradas <= 0) {
    console.log("Lo siento, no puedes comprar entradas para menores de edad.");
} else {
    console.log("Compra Válidad.")
    const precioEntrada = 1000;

    let total = precioEntrada * cantidadEntradas;
    console.log("total: " + total)

    total = total + 500
    console.log("Total con recargo: $" + total)

    console.log("Hola" + nombre + ", su compra de " + cantidadEntradas + " entradas ha sido procesada. El total a pagar es: $" + total)
    console.log(`Hola ${nombre}!!, su compra de ${cantidadEntradas} entradas por $${precioEntrada} c/u ha sido procesada. El total a pagar: $${total}`)

    {
        let tipoCliente = "Regular";
        if (cantidadEntradas >= 5) {
            tipoCliente = "VIP";
            total = total * 0.9;
            console.log("¡Felicidades! Has obetenido un descuento del 10% por comprar 5 o más entradas.");
        }
        console.log(`Tipo de cliente: ${tipoCliente}`);
    }

    console.log(`No funciona ${tipoCliente} fuera del bloque, ya que es una variable de bloque (let).`);
}