const jokeUrl       = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios   = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloudPreset = 'xxxxxxx';
const cloudUrl    = 'xxxxxxx';

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

const subirImagen = async ( img ) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', img);

    try {
        
        const res = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (res.ok) {
            const cloudRes = await res.json();
            console.log(cloudRes);
            // return
        } else {
            throw await res.json();
        }

    } catch (err) {
        throw err;
    }

}


export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}