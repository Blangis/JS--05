/**
 * Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
 */

function palindrome (string){
    const limpia = string.replace(/[^\w\s]|_/g,"").replace(/\s+/g);
    return limpia === limpia.split('').reverse().join('');

}
// Nota para mí: Revisar replace
function rev(){
    const palin = prompt ("Escribe una palabra");
    const respuesta = palindrome(input);

    if(respuesta){
        alert(`${input} es palindrome`)
    } else{
        alert(`${input} no es palindrome`)
    }
}

rev{};


