let contador_usuario = 0;
let contador_computadora = 0;

function calcular_jugada(caso) {
    let jugada_computadora = Math.floor(Math.random() * (1 - 4) + parseInt(3));
    if (contador_usuario == 5) {
        alert("Gano el usuario");
    } else if (contador_computadora == 5) {
        alert("Gano la IA");
    } else {
        if (caso == jugada_computadora) {
            document.getElementById("texto_cambiante").innerHTML = ("Empate");
        } else if (caso == 0 && jugada_computadora == 2) {
            document.getElementById("texto_cambiante").innerHTML = ("Felicidades la piedra le gana a la tijera +1 punto");
            contador_usuario = contador_usuario + 1;

        }
        else if(caso == 1 && jugada_computadora == 0)
        {
            document.getElementById("texto_cambiante").innerHTML = ("Felicidades el papel le gana a la piedra +1 punto");
            contador_usuario = contador_usuario + 1;
        } 
        else if(caso == 2 && jugada_computadora == 1)
        {
            document.getElementById("texto_cambiante").innerHTML = ("Felicidades la tijera le gana a el papel +1 punto");
            contador_usuario = contador_usuario + 1;
        }
        else if (jugada_computadora == 0 && caso == 2) {
            document.getElementById("texto_cambiante").innerHTML = ("Lamentablemente la piedra le gana a la tijera -1 punto");
            contador_computadora = contador_computadora + 1;
        }
        else if (jugada_computadora == 1 && caso == 0) {
            document.getElementById("texto_cambiante").innerHTML = ("Lamentablemente el papel le gana a la piedra -1 punto");
            contador_computadora = contador_computadora + 1;
        }
        else if (jugada_computadora == 2 && caso == 1) {
            document.getElementById("texto_cambiante").innerHTML = ("Lamentablemente la tijera le gana a el papel -1 punto");
            contador_computadora = contador_computadora + 1;
        }
    }

    document.getElementById("puntuacion_jugador").innerHTML = contador_usuario;
    document.getElementById("puntuacion_maquina").innerHTML = contador_computadora;
}

function resetear_puntaje() {
    contador_computadora = 0;
    contador_usuario = 0;
    document.getElementById("puntuacion_jugador").innerHTML = 0;
    document.getElementById("puntuacion_maquina").innerHTML = 0;
    document.getElementById("texto_cambiante").innerHTML = ("Esperando movimiento del jugador");
}