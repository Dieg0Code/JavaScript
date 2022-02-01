

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A' ,'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias del DOM
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');

// Crear una nueva baraja
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
}

crearDeck();

// Seleccionar una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en la baraja';
    }

    const carta = deck.pop();
    return carta;

}

// pedirCarta();


// Mostrar el valor asignado a una carta
const valorCarta = (carta) => {

    // const valor = carta[0]; Todas las strings pueden ser tratadas como arrays
    const valor = carta.substring(0, carta.length - 1); // Nos devuelve un string
    
    return (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1;
}

// Turno de la computadora

const turnoComputadora = (puntosMinimos) => {

    do {

        const carta = pedirCarta();

        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;
    
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

        
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() => {
         
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Ganó la computadora');
        } else if (puntosComputadora > 21) {
            alert('Ganó el jugador');
        } else {
            alert('Computadora gana');
        }

    }, 20);

}



// Eventos

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);


    if (puntosJugador > 21) {
        console.warn('Lamentablemente Perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    } else if (puntosJugador === 21) {
        console.warn('Felicidades, ganaste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }

});

btnDetener.addEventListener('click', () => {

    console.warn('Has detenido el juego');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

});

btnNuevoJuego.addEventListener('click', () => {

    console.clear();
    deck = [];

    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

} );