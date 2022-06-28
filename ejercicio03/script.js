// Ejercicio 3: Escribe un programa que pida un número y diga si es divisible entre 2.
console.log("Ejercicio 3");

const numero = parseInt(prompt("Digite el un número"));

if (numero % 2 === 0 ) {
    document.write('El número '+numero+' es divisible a 2');
} else {
    document.write('El número '+numero+' no es divisible a 2');
}