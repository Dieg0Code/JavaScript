
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

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario
}