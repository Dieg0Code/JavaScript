// import { init } from "./js/chistes-page";

// import { obtenerUsuarios } from "./js/http-provider";
import { init } from "./js/usuarios-page";

init();

obtenerUsuarios().then( console.log );