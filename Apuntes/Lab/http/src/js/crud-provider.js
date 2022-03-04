
const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async ( id ) => {

    const res = await fetch( `${ urlCRUD }/${ id }` );
    const { data } = await res.json();

    return data;

}

export {
    getUsuario
}