import * as CRUD from './js/crud-provider';


CRUD.getUsuario( 1 ).then( console.log );

CRUD.crearUsuario({
    name: 'Diego',
    job: 'Desarrollador'
}).then( console.log );