import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'


// promesaLenta.then( console.log )
// promesaMedia.then( console.log )
// promesaRapida.then( console.log )

Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
    .then( console.log )