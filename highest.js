/**
 * Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
 */

let serie = prompt ("Escribe 10 números (separados por comas):").split(",");

function highest (array) {
    let numeros = array.map(Number);
    let highestNumber = Math.max(...numeros);
    return highestNumber; 

    }

console.log(highest(serie));




