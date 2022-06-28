//Ejercicio 2: Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
console.log("Ejercicio 2");

const uno = parseInt(prompt("Digite el primer número"));
const dos = parseInt(prompt("Digite el segundo número"));
const tres = parseInt(prompt("Digite el tercer número"));

if (uno >= dos && uno >= tres) {
    document.write(uno);
}
else if (dos >= uno && dos >= tres) {
    largest = dos;
    document.write(dos);
} else {
    document.write(tres);
}