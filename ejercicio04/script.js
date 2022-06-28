// Ejercicio 4: Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.
console.log("Ejercicio 4");
const frase = prompt("Escriba una frase");
let conteo = 0;
for (let ciclo = 0; ciclo < frase.length; ciclo++) {
    if(frase[ciclo].toLowerCase() == 'a'){
        conteo++
    }
}
document.write(`La frase es '${frase}' y tiene una cantidad de repeticiones de la letra 'a' ${conteo}`);