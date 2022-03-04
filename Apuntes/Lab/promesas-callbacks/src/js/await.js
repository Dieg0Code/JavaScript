import { buscarHeroeAsync, buscarHeroe } from "./promesas";



const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);

export const obtenerHeroesArr = async () => {


    return await Promise.all(heroesIds.map( buscarHeroe ));

    // const heroesArr = [];

    // for (const id of heroesIds) {
    //     heroesArr.push(buscarHeroe(id));
        
    // }

    // return await Promise.all(heroesArr);
}

export const obtenerHeroeAwait = async ( id ) => {

    try {

        const heroe = await buscarHeroeAsync(id); 
        return heroe;

    } catch (err) {

        console.log('Catch!!');
        
        return {
            nombre: 'No encontrado',
            poder: 'No encontrado'
        }

    }

}

export const heroesCiclo = async () => {

    console.time('Heroes Ciclo')

    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }

    // const heroes = await Promise.all( heroesPromesas );

    // heroes.forEach( heroe => console.log(heroe) );

    console.timeEnd('Heroes Ciclo')
}

export const heroeIfAwait = async ( id ) => {

    if ( (await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('Naah');
    }

}