const jokeUrl = 'https://api.chucknorris.io/jokes/random';


const obtenerChiste = async () => {

    try {
    
        const res = await fetch( jokeUrl );

        if (!res.ok) { throw 'No se puedo realizar la petición' };

        const { icon_url, id, value } = await res.json();

        return { icon_url, id, value };

    } catch (err) {
       
        throw err;

    }

    

}


export {
    obtenerChiste,
}