
const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async ( id ) => {

    const res = await fetch( `${ urlCRUD }/${ id }` );
    const { data } = await res.json();
    return data;
}

const crearUsuario = async ( usuario ) => {

    const res = await fetch( urlCRUD, {

        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await res.json();
}

const actualizarUsuario = async ( id, usuario ) => {

    const res = await fetch( `${ urlCRUD }/${ id }`, {

        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await res.json();
}

const borrarUsuario = async ( id ) => {

    const res = await fetch( `${ urlCRUD }/${ id }`, {
        method: 'DELETE',
    });

    return ( res.ok ) ? 'Usuario borrado' : 'No se pudo borrar el usuario';

}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}