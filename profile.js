/**
 * User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
 */


let user = prompt ("¿Cuál es tu nombre de usuario?");
alert("Hola " + user +" bienvenida ");

let age = prompt ("¿Cuál es tu edad?");
let moviesFav = prompt ("¿Cuáles son tus tres películas favoritas? (Sepáralas por comas):").split(","); 
 /* split: Especifica el carácter a usar para la separación de la cadena */

console.log("Usuario:", user);
console.log("Edad:", age);
console.log("Películas:");
moviesFav.forEach(valor => {
        console.log(`- ${valor.trim()} es una de mis películas favoritas.`);
    });