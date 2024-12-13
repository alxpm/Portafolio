alert("Bienvenido a mi portfolio!")
// alert("Bienvenido a mi portfolio!")

const nombre = prompt("Cómo te llamas?")
alert("Hola " + nombre + "! Bienvenido a mi portfolio!")

// Array de frases
const frases = [
        "deja de quejarte, bobo, tu vida ya es una mierda, quejarte no solucionará nada.",
        "motivacional mis huevos.",
        "no cuentes los dias, cuenta las horas porque no son muchas las que te quedan",
   
    ];
    // Función para generar una frase aleatoria
    function generarFrase() {
        // Genera un índice aleatorio dentro del rango de la longitud del array de frases
        const indice = Math.floor(Math.random() * frases.length);
        // Obtiene la frase correspondiente al índice generado
        const fraseAleatoria = frases[indice];
        // Muestra la frase en el footer
        document.getElementById("frase").innerText = fraseAleatoria;
    }
    // Agrega un listener al botón para ejecutar la función generarFrase cuando se haga clic
    document.getElementById("btn-generar").addEventListener("click", generarFrase);
    