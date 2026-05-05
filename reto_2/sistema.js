let nombre = prompt("Ingrese su nombre: "); // Le pedimos un nombre al usuario
let edad = parseInt(prompt("Ingrese su edad: ")); // Le pedimos la edad del usuario
let contraseña = prompt("Ingrese una contraseña: "); // Le pedimos que ingrese una contraseña

if (nombre === "") { // Si el nombre está vacio va a saltar el mensaje en la consola
    console.log("El nombre no puede estar vacío.");
} else if (edad < 18){ // Si la edad del usuario es menor a 18, en la consola dirá que su acceso será denegado.
    console.log("¡Acceso denegado!. Debe ser una persona mayor de edad.");
} else if (contraseña.length < 6) { // Si el largo de la contraseña es menor a 6 dígitos entonces dirá en la consola que la contraseña es corta
    console.log("La contraseña es muy corta. Debe tener un mínimo de 6 caracteres o más.");
} else { // Si todo está bien, saltará un mensaje en la consola dándonos la bienvenida.
    console.log(`¡Bienvenido al sistema!`);
    
    // Ahora, hacemos el cálculo modificando la variable original y sumándole 10.
    edad += 10;
    
    // Mostramos los datos que insertó el usuario con la variable ya modificada.
    console.log(`Tu edad dentro de 10 años será de ${edad} años.`);
    console.log(`Tus datos escritos en el sistema son: nombre: ${nombre}, edad: ${edad}, contraseña; ${contraseña}.`);
}