//Ejercicio 1: Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.
console.log('Ejercicio 01');
const numeroUno = parseInt(prompt('Digite el primer número'));
const numeroDos = parseInt(prompt('Digite el segundo número'));
if (numeroUno === numeroDos) {
  document.write('Los números son iguales '+numeroUno);
} else if (numeroUno > numeroDos) {
  document.write('El número '+numeroUno+ ' es mayor que '+numeroDos);
} else {
  document.write('El número '+numeroUno+ ' es menor que '+numeroDos);
}
