const jokeUrl       = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios   = 'https://reqres.in/api/users?page=2';

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

const obtenerUsuarios = async () => {

    const res = await fetch( urlUsuarios );
    const { data : usuarios } = await res.json();

    return usuarios;

}


export {
    obtenerChiste,
    obtenerUsuarios,
}