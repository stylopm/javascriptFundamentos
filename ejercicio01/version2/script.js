//Ejercicio 1: Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.
console.log('Ejercicio 01');
const numeroUno = parseInt(prompt('Digite el primer número'));
const numeroDos = parseInt(prompt('Digite el segundo número'));
const resultado = document.getElementById('resultado');
if (numeroUno === numeroDos) {
  resultado.innerHTML = `Los números son iguales ${numeroUno} `;
} else if (numeroUno > numeroDos) {
  resultado.innerHTML = `El número ${numeroUno} es mayor que ${numeroDos}`;
} else {
  resultado.innerHTML = `El número ${numeroUno} es menor que ${numeroDos}`;
}
