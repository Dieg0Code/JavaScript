import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId = 'capi';
const heroeId1 = 'iron';


buscarHeroe( heroeId, ( err, heroe1 ) => {

    if (err) { return console.error(err); }

    buscarHeroe(heroeId1, ( err, heroe2 ) => {

        if (err) { return console.error(err); }

        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la batalla`); 


    });


});