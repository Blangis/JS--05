/**
 * Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
 */


    const alarm = prompt ("Escoge el tiempo (en segundos) para mostrar la alarma");
    var numero = parseInt(alarm);
    var miliNumero= numero*1000;

    function alarma () {
    if (numero<=0){
        console.log("Número invalido");
        alert("Ingrese un número positivo y refresque la página");
        return false; 
    }
        return true; 
        }
        
     
    function alarmaFinal () {
            console.log("Tiempo transcurrido");
            alert(`El tiempo ha transcurrido después de ${numero} segundos.`);
        }
        if (alarma()) {
            setTimeout(alarmaFinal, miliNumero);

        }

        alarma();
    


    







