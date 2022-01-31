

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A' ,'J', 'Q', 'K'];

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
    console.log(deck);
    console.log(carta);
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
    // let puntos = 0;

    // if (isNaN(valor)) {

    //     puntos = (valor === 'A') ? 11 : 10;

    // } else {
    //     console.log('Es un numero');
    //     puntos = valor * 1; // Lo convierte a numero
    // }

    // console.log(puntos);

}

const valor = valorCarta(pedirCarta());

console.log(valor);