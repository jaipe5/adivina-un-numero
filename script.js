// Genera un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Agarra los elementos del HTML
const inputNumero = document.getElementById('guessInput');
const botonAdivinar = document.getElementById('guessButton');
const mensajeResultado = document.getElementById('resultMessage');

// Evento cuando el jugador hace clic en el botón "Adivinar"
botonAdivinar.addEventListener('click', function() {
    const intento = Number(inputNumero.value);  // Convertimos el valor del input en un número
    
    if (intento < 1 || intento > 10) {
        mensajeResultado.textContent = "Por favor, ingresa un número entre 1 y 10.";
        return;
    }

    if (intento === numeroSecreto) {
        mensajeResultado.textContent = "¡Felicidades! Adivinaste el número " + numeroSecreto;
    } else if (intento < numeroSecreto) {
        mensajeResultado.textContent = "El número secreto es mayor. ¡Inténtalo de nuevo!";
    } else {
        mensajeResultado.textContent = "El número secreto es menor. ¡Inténtalo de nuevo!";
    }
});
