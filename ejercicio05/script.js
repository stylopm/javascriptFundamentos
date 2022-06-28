// Ejercicio 5: Escribe un programa que pida una frase y escriba las vocales que aparecen en ella.
console.log("Ejercicio 5");
const frase = prompt("Escriba una frase");
let conteoA = 0;
let conteoB = 0;
let conteoC = 0;
let conteoD = 0;
let conteoE = 0;
let vocales = '';
for (let ciclo = 0; ciclo < frase.length; ciclo++) {
    if (frase[ciclo].toLowerCase() == 'a') {
        conteoA++
    }
    if (frase[ciclo].toLowerCase() == 'e') {
        conteoB++
    }
    if (frase[ciclo].toLowerCase() == 'i') {
        conteoC++
    }
    if (frase[ciclo].toLowerCase() == 'o') {
        conteoD++
    }
    if (frase[ciclo].toLowerCase() == 'u') {
        conteoE++
    }
}

if (conteoA !==0){
    vocales+=' a '
}
if (conteoB !==0){
    vocales+=' e '
}
if (conteoC !==0){
    vocales+=' i '
}
if (conteoD !==0){
    vocales+=' o '
}
if (conteoE !==0){
    vocales+=' u '
}

document.write(`La frase es '${frase}' y tiene las siguientes vocales '${vocales}'`);