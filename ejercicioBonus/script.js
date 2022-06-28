//• Ejercicio Bonus: Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales.
console.log("Ejercicio Bonus");
const frase = prompt("Escriba una frase");
let conteoVocales = 0;
let vocales = '';
for (let ciclo = 0; ciclo < frase.length; ciclo++) {
    if (frase[ciclo].toLowerCase() == 'a') {
        conteoVocales++
    }
    if (frase[ciclo].toLowerCase() == 'e') {
        conteoVocales++
    }
    if (frase[ciclo].toLowerCase() == 'i') {
        conteoVocales++
    }
    if (frase[ciclo].toLowerCase() == 'o') {
        conteoVocales++
    }
    if (frase[ciclo].toLowerCase() == 'u') {
        conteoVocales++
    }
}


document.write(`La frase es '${frase}' y tiene la cantidade de '${conteoVocales}' siguientes vocales `);