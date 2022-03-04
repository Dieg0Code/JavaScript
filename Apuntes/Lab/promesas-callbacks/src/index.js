import { buscarHeroe, buscarHeroeAsync } from './js/promesas';


buscarHeroe('capi')
    .then( heroe => console.log(heroe) )
    .catch( err => console.warn(err) );

buscarHeroeAsync('iron')
    .then( heroe => console.log(heroe) )
    .catch( err => console.warn(err) );