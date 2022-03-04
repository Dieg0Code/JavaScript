# Apuntes de JavaScript

`Java` y `JavaScript` son dos lenguajes de programación diferentes, funcionan de manera diferente, se ejecutan de manera diferente y tienen un enfoque diferente.

A inicio de los años 90, la velocidad de los modems era de 28kbps lo que abrió las puertas a que se pueda construir sitios web mejores. Esto dio lugar a la necesidad de crear un lenguaje que se ejecutara del lado del cliente, para así poder lidiar con la lentitud del internet y la complejidad de las páginas web. Antes de JavaScript, el servidor lidiaba con toda la lógica de la página web, y el cliente sólo se encargaba de la parte visual.

La persona que creó inicialmente el lenguaje fue `Brendan Eich` el cual era un empleado de `Netscape` con el fin de evitar el envió constante de información al servidor. La primera version de este lenguaje fue llamada `LiveScript`, pero luego con fines de marketing decidieron cambiar el nombre a `JavaScript`, ya que `Java` estaba de moda en esa época.

`Microsoft` al ver que también tenían la necesidad de un lenguaje para el cliente, decidieron copiar `JavaScript` y le llamaron a su nueva versión `JScript`, pero era básicamente lo mismo. `Netscape` sin animo de entrar en una guerra de tecnologías, decidió estandarizar el lenguaje, de forma que en 1997 se envió la especificación del lenguaje a la asociación europea de fabricantes de computadoras o mas conocida como `ECMA` (European Computer Manufacturers Association).

`ECMA` creó un comité para estandarizar el lenguaje de script multiplataforma, sin importar la empresa que lo usara, ese comité fue el `ECMA TC39` y se creó el `ECMA-262`, el cual se definió por primera vez como el lenguaje de `ECMAScript`, por eso hay muchos programadores que prefieren referirse a este lenguaje como `ECMAScript`, pero realmente, `JavaScript` no es más que la implementación que realizó la empresa `Netscape` del estándar `ECMAScript`.

## Usos de JavaScript

Hoy en dia `JavaScript` es prácticamente un monopolio, no importa que lenguaje esté corriendo en el servidor, si quieres crear una aplicación web, en el 99% de los casos, usarás `JavaScript`. En un principio este lenguaje se acotaba unicamente al navegador web, pero hoy en dia con tecnologías como `Node.js` puede ejecutarse en el servidor, y en prácticamente cualquier lugar.

JavaScript puede ser usado en:

1. Aplicaciones web.
2. Crear presentaciones interactivas (Reveal.js).
3. Web Servers con Node.js.
4. Videojuegos.
5. Aplicaciones móviles.
6. Aplicaciones de escritorio.

## Introducción a JavaScript

### Variables y comentarios

Los comentarios son líneas de código que el intérprete de JavaScript ignorará a la hora de ejecutar el código, son usados para explicar el código o para dejar mensajes a futuros desarrolladores.

Los comentarios pueden ser de dos tipos:

    // Comentario de una línea
    /* Comentario de varias líneas */



Las variables no son mas que un contenedor de información que apunta a un lugar en memoria. Dicha información puede cambiar en el futuro.

```javascript
let nombre = "Diego";
var edad = 25;
const PI = 3.1416;
```

Lo que hace JavaScript es tomar el valor a la derecha del signo igual `=` y asignarlo al nombre de la variable a la izquierda. Cada vez que necesitemos el valor, podemos llamarlo nombrando a la variable.

Existen diferencias entre declarar variables con `var`, `let` y `const`. Con `const` no podemos reasignar el valor de la variable, pero con `let` y `var` podemos.

`var` era la forma antigua de declarar variables, actualmente no se usa ya que traía varios problemas, actualmente se prefiere usar `let` y `const`. Sin embargo podemos seguir usando `var` si queremos, ya que JavaScript es retrocompatible, es decir que podemos usar código de versiones anteriores del lenguaje y mesclarlo con el nuevo.

### Versiones de JavaScript

- 1996: LiveScript a JavaScript (estándar).
- 1997: ES1 (ECMAScript 1).
- 2009: ES5 (ECMAScript 5) Con muchas características nuevas.
- 2015: ES6 (ECMAScript 6) Que fue la actualización más grande del lenguaje hasta el momento.
- 2015: Se estableció que se lanzaría una nueva versión nueva del lenguaje cada año, con pequeñas mejoras.

### ¿Qué versión debo usar?

- ES5:
  - Soportada en todos los navegadores web.

Es la versión más extendida del lenguaje, usualmente cuando queremos la mayor compatibilidad usamos esta versión.

- ES6/ES2015, ES7/ES2016, ES8/ES2017:
  - Soportados por la mayoría de los navegadores web modernos.
  - Pero perdemos compatibilidad con los navegadores antiguos.
  - Muchas características pueden ser implementadas con `polyfill`s.

### Polyfill

Es un código que provee el funcionamiento de una característica de JavaScript (ES6), en versiones viejas como ES5.

## Fundamentos, primitivos, arreglos, objetos y funciones básicas

### Tipo de dato de una variable

JavaScript es un lenguaje débilmente tipado, esto quiere decir que nosotros no le decimos directamente que tipo de datos tendrá una variable, JavaScript lo va a inferir por nosotros.

*Esto puede ser una ventaja a la hora de programar, pero también puede ser una desventaja en el momento de ejecutar el código.*

El tipo de dato de una variable describe el valor que puede tener la variable en si.

### Primitivos

Es una información que no es un objeto y son inmutables.

Hay 6 tipos de datos primitivos en JavaScript:

- **Boolean** - `true` o `false` :: Verdadero o falso.
- **Null** - Sin valor en absoluto.
- **Undefined** - Una variable declarada que aún no se le asigna valor.
- **Number** - integers, floats, etc.
- **String** - Una cadena de caracteres, ej: Palabras, nombres de personas, etc.
- **Symbol** - Es un valor único que no es igual a ningún otro valor.

```javascript

// Boolean
let isTrue = true;
let isFalse = false;

// Null
let nulo = null;

// Undefined
let indefinido;
console.log(indefinido); // undefined

// Number
let numero = 10;
let decimal = 10.5;

// String
let cadena = "Hola";
let cadena2 = 'Hola';
let cadena3 = `Hola`;

// Symbol
let simbolo = Symbol("Hola");
let simbolo2 = Symbol("Hola");
console.log(simbolo === simbolo2); // false

```

Si queremos saber que tipo de dato posee una variable podemos hace uso del operador `typeof`:

```javascript
let numero = 10;

console.log(typeof numero); // number

let cadena = "Hola";

console.log(typeof cadena); // string
```

### Palabras reservadas y nombres de las variables

Las palabras reservadas son palabras que tienen un uso especifico para el cual fueron creadas, por lo que no pueden ser usadas como nombres de variables.

Palabras reservadas:

- `break`
- `case`
- `catch`
- `class`
- `const`
- `continue`
- `debugger`
- `default`
- `delete`
- `do`
- `else`
- `let`
- `export`
- `extends`
- `finally`
- `for`
- `function`
- `if`
- `import`
- `in`
- `instanceof`
- `new`
- `return`
- `super`
- `switch`
- `this`
- `throw`
- `try`
- `typeof`
- `var`
- `void`
- `while`
- `with`
- `yield`

Palabras reservadas en un futuro:

- `enum`
- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`
- `static`
- `await`

Evitar usar:

- `null`
- `false`
- `isNaN`
- `NaN`
- `isPrototypeOf`
- `name`
- `String`
- `alert`
- `undefined`
- `hasOwnProperty`
- `Infinity`
- `length`
- `prototype`
- `Number`
- `toString`
- `conform`
- `true`
- `isFinite`
- `Math`
- `valueOf`
- `Object`
- `prompt`


Hay una [página](https://mothereff.in/js-variables#%E0%B2%A0%5f%E0%B2%A0) que nos ayuda a saber si el nombre de una variable es valido, para evitar usar palabras reservadas.

Aunque por lo general el editor de código también nos ayuda a evitar usar palabras reservadas.

También, no debemos usar caracteres especiales para nombrar variables, existe un estándar para esto.

El estándar que se recomienda es el siguiente:

- No podemos crear nombres de variables que empiecen con números.
- Si pueden iniciar con underscore `_` o con signo de dolar `$`.
- Las variables pueden terminar con números.
- No pueden llevar espacios.
- No pueden llevar puntos `.` ni comas `,`.
- Se debe usar lower camelCase para nombres de variables.
- Se debe usar upper CamelCase para nombres de clases.
- Debemos evitar la letra `ñ`.

### Arreglos

Los `arrays` son un objeto muy parecido a una lista de información, que contienen un grupo de elementos. Usualmente, esa información dentro del array es del mismo tipo de dato, sin embargo esto no es el caso en JavaScript.

Los arreglos son definidos por llaves cuadradas `[]`.

```javascript
let videojuegos = ["Mario", "Zelda", "Donkey Kong", "Metroid", "Super Mario"];
```

Los indices de dicho arreglo empiezan en `0`. Si quiero traer el primer elemento del arreglo, podemos hacerlo de la siguiente manera:

```javascript
let primerJuego = videojuegos[0]; // Mario
console.log(primerJuego); // Mario
```

Hay varias formas de crear arreglos en JavaScript:

```javascript
const arr = new Array(10); // Arreglo de 10 elementos
```

Esta es una manera, pero no es lo mas común.

Usualmente solo usamos `arr = []` para crear un arreglo vacío.

Por lo general en otros lenguajes los elementos dentro de un arreglo suelen tener el mismo tipo de dato, pero en JavaScript no es necesario.

Por lo que podemos crear un arreglo con elementos de distinto tipo de dato:

```javascript
let arrCosas = [
  true,
  123,
  'Hola',
  1 + 2,
  function() {},
  () => {},
  {a: 1},
  ['x', 'Megaman', 'Zero', 'Dr. Light'],
];
```

¿Que pasa si queremos obtener el elemento 'Dr. Light' del arreglo?, es un elemento que esta en un arreglo dentro de otro arreglo.

Para obtener el elemento 'Dr. Light' podemos hacerlo de la siguiente manera:

```javascript
console.log(arrCosas[7][3]); // Dr. Light
```

Puede parecer un poco complicado, pero en realidad lo que hicimos fue acceder al séptimo elemento, el cual es el arreglo que contiene el elemento que queremos y luego dentro de ese arreglo acceder al tercer elemento.

Los arreglos también tienen propiedades y métodos que nos permiten manipular sus elementos.

Los métodos son funciones que vienen interna de los arreglos y las propiedades son un de alguna manera una variable que viene dentro de los arreglos.

Por ejemplo, podemos obtener el tamaño del arreglo con el método `.length`:

```javascript
let juegos = ["Mario", "Zelda", "Donkey Kong"]
console.log('Largo: ', juegos.length); // Largo: 3
```

Podemos usar este método para saber el ultimo elemento del arreglo:

```javascript
console.log('Ultimo: ', juegos[juegos.length - 1]); // Ultimo: Donkey Kong
```

En caso de que un array sea dinámico y no sepamos cuantos valores tiene dentro, podemos usar el método `.length` y restarle uno, ya que este método nos dice cuantos elementos tiene el arreglo y como nosotros sabemos que los indices empiezan en `0`, el último elemento estará en la posición `length - 1`.

En caso de que necesitemos barrer todo los elementos de un arreglo para ejecutar algún tipo de procedimiento, existe un método llamado `.forEach` que nos permite hacerlo.

```javascript
juegos.forEach((elemento, indice, arr) => {
  console.log({elemento, indice, arr});
});
```

Otro método muy util es `.push` que nos permite agregar elementos al final del arreglo. Este método nos devuelve el nuevo largo del arreglo.

```javascript
let juegos = ["Mario", "Zelda", "Donkey Kong"];

let nuevaLongitud = juegos.push('Super Mario'); // 4
console.log('Nuevo largo: ', nuevaLongitud); // Nuevo largo: 4
console.log('Ultimo: ', juegos[juegos.length - 1]); // Ultimo: Super Mario
```

¿Que pasa si queremos añadir un elemento al principio del arreglo?, para eso podemos usar el método `.unshift`:

```javascript
let juegos = ["Mario", "Zelda", "Donkey Kong"];

nuevaLongitud = juegos.unshift('Metroid'); // 4
console.log('Nuevo largo: ', nuevaLongitud); // Nuevo largo: 4
console.log('Primero: ', juegos[0]); // Primero: Metroid
```

Si quiero borrar el ultimo elemento del arreglo, podemos usar el método `.pop`:

```javascript
let juegos = ["Mario", "Zelda", "Donkey Kong"];

let ultimo = juegos.pop(); // Donkey Kong
console.log('Ultimo: ', ultimo); // Ultimo: Donkey Kong
console.log('Nuevo largo: ', juegos.length); // Nuevo largo: 2
console.log('Ultimo: ', juegos[juegos.length - 1]); // Ultimo: Zelda
```

¿Que pasa si quiero borrar un elemento en alguna posición en especifico?, para eso podemos usar el método `.splice`, este método recibe la posición del elemento que queremos borrar y la cantidad de elementos que queremos borrar a partir de esa posición.

```javascript
let juegos = ["Mario", "Zelda", "Donkey Kong"];

let juegosBorrados = juegos.splice(1, 1); // Zelda
```

Hay un método también muy util el cual nos permite saber el indice del elemento que queremos:

```javascript
let juegos = ["Mario", "Zelda", "Donkey Kong"];

let zeldaIndice = juegos.indexOf('Zelda'); // 1
```

Hay que tener en cuenta que este método es case sensitive, es decir, lo que pasemos como argumento debe ser exactamente igual al elemento que queremos buscar, las mayúsculas y minúsculas deben coincidir.

Cuando hacemos un `.indexOf` y nos devuelve `-1` significa que no encontramos el elemento que buscamos.

### Objetos literales

Javascript tiene dos tipos principales de datos, los primitivos y los objetos, ¿como sabemos cuando es un objeto?, si no es un primitivo, es un objeto.

Los objetos literales son aquellos que tienen pares de valores, una llave y un valor, por ejemplo:

```javascript
let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California'
  },
  'ultima-pelicula': 'Infinity war'
};

console.log('Nombre', personaje.nombre); // Nombre Tony Stark
console.log('Nombre', personaje['nombre']); // Nombre Tony Stark
console.log('Edad', personaje.edad); // Edad 40
console.log('Coors', personaje.coords.lat); // Coors 34.034
console.log('Numero de trajes', personaje.trajes.length); // Numero de trajes 3
console.log('último traje', personaje.trajes[personaje.trajes.length - 1]); // último traje Hulkbuster'

const x = 'vivo';
console.log('Vivo', personaje[x]); // Vivo false


console.log('Ultima película', personaje['ultima-pelicula']); // Ultima película Infinity war
```

Cabe mencionar que cuando imprimimos el objeto por consola no se imprime en el mismo orden en el que se declaró, sino que se imprimen en orden alfabético.


Si queremos eliminar alguna propiedad de un objeto, podemos usar el método `delete`

```javascript
delete personaje.edad;
```

Supongamos que necesitamos trabajar el objeto como si fuese un arreglo

```javascript
const entriesPares = Object.entries(personaje);
console.log(entriesPares); // [ [ 'nombre', 'Tony Stark' ], [ 'codeName', 'Ironman' ], [ 'vivo', false ], [ 'coords', { lat: 34.034, lng: -118.70 } ], [ 'trajes', [ 'Mark I', 'Mark V', 'Hulkbuster' ] ], [ 'direccion', { zip: '10880, 90265', ubicacion: 'Malibu, California' } ], [ 'ultima-pelicula', 'Infinity war' ] ]
```

Para crear una nueva propiedad en un objeto

```javascript
personaje.casado = true;
```

Si declaramos el objeto como constante, no podemos volver a
asignarlo directamente, pero si podemos cambiar sus propiedades

En caso de que queramos que no se pueda cambiar el contenido
del objeto, podemos usar el método `Object.freeze`

```javascript
Object.freeze(personaje);
personaje.dinero = 1000000; // No lo agrega
```


Cuando usamos el método `Object.freeze` no podemos agregar
nuevas propiedades y tampoco podemos cambiar las que ya existen

Este método congela las asignaciones de propiedades directas
pero no las de las propiedades de los objetos dentro del objeto

```javascript
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades); // [ 'nombre', 'codeName', 'vivo', 'coords', 'trajes', 'direccion', 'ultima-pelicula', 'casado', 'dinero' ]

const valores = Object.values(personaje);
console.log(valores); // [ 'Tony Stark', 'Ironman', false, { lat: 34.034, lng: -118.70 }, [ 'Mark I', 'Mark V', 'Hulkbuster' ], { zip: '10880, 90265', ubicacion: 'Malibu, California' }, 'Infinity war', true, undefined ]
```

### Funciones básicas y de flecha

```javascript
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar('Tony'); // Hola Tony
```

El objetivo principal de las funciones es centralizar la lógica de un procedimiento que podemos reutilizar varias veces.

Es buena practica que las funciones siempre estén al principio y al final el llamado a las mismas.

Declarar las funciones con la palabra reservada `function` es una forma, pero no es la única.

```javascript
const saludar1 = function(nombre) {
  console.log(`Hola ${nombre}`);
};
```

Esta forma se conoce como funciones anónimas, porque no tiene nombre, pero se la asignamos a una variable, por lo que para llamarla podemos usar el nombre de la variable.

```javascript
saludar1('Tony'); // Hola Tony
```

¿Cual es el beneficio de usar funciones anónimas?, como estamos asignando la función a una constante, no hay manera de que ese nombre que toma de la constante se pueda usar en otra parte, es como una medida de seguridad.

Un dato importante a tener en cuanta es que las funciones declaradas de la manera tradicional con `function` tienen un objeto implícito llamado `arguments`, que contiene todos los argumentos que se pasan a la función.

¿Que pasa si le pasamos mas argumentos a la función que los que se esperan?

```javascript
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar('Tony', 'Stark', 'Ironman', 40, true); // Hola Tony
```

Si cambiamos el cuerpo de la función de la siguiente manera:

```javascript
function saludar(nombre) {
  console.log(arguments);
  console.log(`Hola ${nombre}`);
}

saludar('Tony', 'Stark', 'Ironman', 40, true); // [ 'Tony', 'Stark', 'Ironman', 40, true ]
```

Nos devuelve un array con todos los argumentos que se pasaron a la función, independientemente de si se esperaban o no.

### Funciones de flecha

Las funciones de flecha también son conocidas como `lambda functions`, es algo nuevo del ES6.

```javascript
const saludarFlecha = (nombre) => {
  console.log(`Hola ${nombre}`);
};

saludarFlecha('Tony'); // Hola Tony
```

Es importante definir que todas las funciones retornar un valor, no debemos confundir los `console.log` con los valores de retorno de las funciones, en el caso de las funciones anteriores todas retornan `undefined`.

```javascript
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
  return 10;
}

const retorno = saludar('Tony'); // Hola Tony
console.log(retorno); // 10
```

Si no se declara un `return` explicito en la función, el valor de retorno será `undefined`.

Es importante que saber también que si llegásemos a escribir más lineas después del `return`, estas se ignorarían.

Los `return` pueden devolver cualquier tipo de dato.

```javascript
function ejemplo() {
  return [1, 2];
}

const retorno = ejemplo();

console.log(retorno[0], retorno[1]); // 1 2
```

Usualmente las funciones tienen como tarea ejecutar algún código y retornar algo.

```javascript
function sumar(a, b) {
  return a + b;
}


console.log(sumar(1, 2)); // 3
```

Si la función flecha tiene como cuerpo solo su  valor de retorno, podemos omitir el `return` y el `{}` y el `return` se hace implícito.

```javascript
const sumar2 = (a, b) => a + b;

console.log(sumar2(1, 2)); // 3
```

```javascript
function getAleatorio() {
  return Math.random();
}

console.log(getAleatorio());
```

```javascript

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
```

### Funciones, argumentos y desestructuración

```javascript
function crearPersona(nombre, apellido) {
  return {
    nombre,
    apellido
  }
  // return {
  //   nombre: nombre,
  //   apellido: apellido
  // }
}

const persona = crearPersona('Tony', 'Stark');
console.log(persona); // { nombre: 'Tony', apellido: 'Stark' }
```

Desde el ES6, si el nombre de la propiedad es exactamente el mismo que el argumento, podemos omitir el nombre del argumento y dejar solo el valor de la propiedad.

Si queremos retornar un objeto de la misma manera, ademas de evitar el `return`, podemos poner el objeto entre paréntesis.

```javascript
const crearPersona1 = (nombre, apellido) => ({nombre, apellido});

const persona1 = crearPersona1('Tony', 'Stark');

console.log(persona1); // { nombre: 'Tony', apellido: 'Stark' }
```

Las funciones de flecha no tiene el objeto `arguments`, esto es algo propio de las funciones tradicionales, si queremos usarlo, debemos hacerlo de la siguiente manera:

```javascript
const imprimeArgumentos = (...args) => {
  console.log(args);
}

imprimeArgumentos(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]
```

Si hacemos esto, de pasar los argumentos con `...` a la función, no podemos poner ningún otro argumento después de este

Si queremos extraer una variable antes del parámetro `rest`, podemos hacerlo de la siguiente manera:

```javascript
const imprimeArgumentos1 = (edad,...args) => {
  console.log({edad, args});
}

imprimeArgumentos1(1, 2, 3, 4, 5); // 1 [ 2, 3, 4, 5 ]
```

También podemos usar destructuración para extraer variables de los argumentos.

```javascript
const imprimeArgumentos3 = (edad, ...args) => {
  return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos3(10, true, false, 'Tony', 'Hola');

console.log({casado, vivo, nombre, saludo}); // { casado: true, vivo: false, nombre: 'Tony', saludo: 'Hola' }
```

También puedo hacer lo mismo con funciones que retornan objetos:

```javascript
const crearPersona2 = (nombre, apellido) => ({nombre, apellido});

const {apellido} = crearPersona2('Tony', 'Stark');

console.log({apellido}); // { apellido: 'Stark' }
```

Si le quiero cambiar el nombre a la variable en la desestructuración, podemos hacerlo de la siguiente manera:

```javascript
const {nombre: nombreNuevo} = crearPersona2('Tony', 'Stark');

console.log({nombreNuevo}); // { nombreNuevo: 'Tony' }
```

Al desestructurar un objeto, debemos sacar las propiedades usando su nombre, quizás no queremos seguir usando ese mismo nombre luego, por eso podemos cambiarlo de la forma anterior.

### Desestructuración de argumentos

```javascript
const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
  console.log({nombre});
  console.log({codeName});
  console.log({vivo});
  console.log({edad});
  console.log({trajes});
}

imprimePropiedades(tony)
```

Con la desestructuración de argumentos, podemos extraer las propiedades de un objeto y asignarle valores por defecto en caso de que no se encuentre la propiedad.

## Ciclos y estructuras de control

### Valor, referencia y romper la referencia

En JavaScript todo los primitivos son pasados por valor y todo los objetos son pasados por referencia.

Por ejemplo:

```javascript
let a = 10;
let b = a;
console.log({a, b}); // { a: 10, b: 10 }

a = 30;

console.log({a, b}); // { a: 30, b: 10 }
```

Cuando es un primitivo, cualquier tipo de reasignación que hagamos o cuando pasamos el valor como argumento a una función, lo estamos mandando por valor, es decir, no importa si transformamos la variable o si la asignamos a otra cosa, no estamos afectando el mismo valor en memoria.

```javascript
let juan = {nombre: 'Juan'};
let ana = juan;

console.log({juan, ana}); // { juan: { nombre: 'Juan' }, ana: { nombre: 'Juan' } }

ana.nombre = 'Ana';
console.log({juan, ana}); // { juan: { nombre: 'Ana' }, ana: { nombre: 'Ana' } }
```

Yo en ningún momento cambie el nombre en la variable `juan`, solo lo cambié en la variable `ana`, ¿Por qué pasó esto?. Porque en JavaScript todos los objetos son pasados por referencia, es decir, que cuando cambiamos el valor del nombre en la variable `ana`, estamos cambiando el valor de la variable `juan` también, porque apuntan a la misma dirección de memoria.

```javascript
const cambiarNombre = (persona) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = {nombre: 'Peter'};
ñet tony = cambiarNombre(peter);

console.log({peter, tony}); // { peter: { nombre: 'Tony' }, tony: { nombre: 'Tony' } }
```

Esto pasa porque mandamos el objeto `peter` como argumento a la función `cambiarNombre`, ese objeto es pasado por referencia a la función, entonces cualquier modificación que le hagamos dentro de la función va a ser afectado si lo retornamos.

Para resolver este tipo de problemas, es que cuando queramos crear una copia de un objeto, debemos hacerlo de la siguiente manera:

```javascript
let juan = {nombre: 'Juan'};
let ana = {...juan}; // operador spread

const cambiarNombre = ({...persona}) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);
```

De esta forma rompemos la relación entre los objetos, de esta forma ya no apuntan a la misma dirección de memoria.

Con arreglos puede llegar a pasar lo mismo

```javascript
const frutas = ['Manzana', 'Pera', 'Naranja'];

const otrasFrutas = frutas;

otrasFrutas.push('Uva');

console.log({frutas, otrasFrutas}); // { frutas: [ 'Manzana', 'Pera', 'Naranja', 'Uva' ], otrasFrutas: [ 'Manzana', 'Pera', 'Naranja', 'Uva' ] }
```

Para solucionar esto podemos ponerlo de la siguiente manera:

```javascript
const otrasFrutas = [...frutas]; // de esta forma creamos un nuevo arreglo
```

Hay otra forma de romper la relación entre los arreglos con el método `.slice()`:

```javascript
const otrasFrutas = frutas.slice(); // de esta forma también creamos un nuevo arreglo
```

¿Cual es la forma más eficiente?, para saber eso, podemos comparar el tiempo que tarda en ejecutarse cada una de las formas:

```javascript
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');
```

De esta forma se puede ver que la forma `spread` es un poco más rápido que la forma `slice`.

El usar `console.time()` y `console.timeEnd()` nos permite medir el tiempo que tarda alguna instrucción en ejecutarse, es muy util para saber escoger la mejor forma de hacer algo.

## If, else if, else

`If-else` es una estructura de control, hasta ahora el código que hemos escrito se va ejecutando linea por linea, las estructuras de control nos permiten alterar ese flujo de ejecución.

```javascript
let a = 5;

if(a >= 10) {
  console.log('a es mayor o igual a 10');
} else if(a >= 5) {
  console.log('a es mayor o igual a 5');
} else {
  console.log('a es menor a 5');
}

console.log('Fin del programa');
```

Este tipo de estructura de control resuelve en un booleano si la condición es verdadera o falsa, y dependiendo de eso ejecuta una u otra parte del código.

El  `else` sirve como un si no, si la condición no se cumple, ejecuta el código que esté dentro del `else`.

```javascript
const hoy = new Date();
let dia = hoy.getDay(); // 0: Dom, 1: Lun, 2: Mar, 3: Mie, 4: Jue, 5: Vie, 6: Sab

if (dia === 0) {
  console.log('Hoy es Domingo');
} else {
  console.log('Hoy no es Domingo');
}
```

Es importante saber la diferencia entre `=`, `==` y `===`:

  * `=` : es una asignación, es decir, se le asigna un valor a una variable.
  * `==` : es una comparación no estricta, es decir, se compara dos valores pero no se preocupa si son de tipo diferente.
  * `===` : es una comparación estricta, es decir, se compara dos valores y ambos deben ser del mismo tipo.

```javascript
console.log(5 == '5'); // true
console.log(5 === '5'); // false
```

Ejercicio:

```javascript
// Imprimir el dia son usar If-else o Switch

const hoy = new Date();
let dia = hoy.getDay();

const obtenerDia = (dia) => {

  const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  return diasDeLaSemana[dia];
}

console.log(obtenerDia(dia));
```

Otra solución:

```javascript
const diasLetras = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado'
};

console.log(diasLetras[dia] || 'No es un día válido');
```

## Lógica Booleana

La lógica booleana es una forma de trabajar con los valores `true` y `false`.

### Negación

Podemos negar un valor booleano con el operador `!`, al negarlo lo que estamos haciendo es básicamente invertir el valor.

  * `!true` = false
  * `!false` = true

```javascript
const regresaTrue = () => true;

const regresaFalse = () => false;

console.log(!regresaTrue()); // false
console.log(!regresaFalse()); // true
```

### Operador And `&&`

El operador `&&` es un operador lógico que nos devolverá `true` si todos los valores son verdaderos.

  * `true && true` = true
  * `true && false` = false
  * `false && true` = false
  * `false && false` = false
  * `true && true && true` = true
  * `true && true && false` = false
  * `true && false && true` = false
  * `true && false && false` = false

Otro uso muy común del AND es para disparar acciones unicamente si la primera condición se cumple.

```javascript
const regresaTrue = () =>  {
  console.log('Regreso true');
  return true;
}
const regresaFalse = () => {
  console.log('Regreso false');
  return false;
}

console.log(regresaFalse() && regresaTrue()); // Regreso false false
```

Cuando estamos usando el AND y la primera operación ya regresó falso, JavaScript simplemente ejecuta esa operación ya que no hay motivo para seguir evaluando lo demás, porque ya sabemos que el resultado es falso, es decir, si la primera condición es falsa, va a ignorar todo lo demás.

```javascript
const regresaTrue = () =>  {
  console.log('Regreso true');
  return true;
}
const regresaFalse = () => {
  console.log('Regreso false');
  return false;
}

console.log(regresaTrue() && regresaFalse()); // Regreso true regreso false false
```

Si es verdadera la primera, entonces ejecuta las dos.

También simplemente podemos poner el código así:

```javascript
regresaTrue() && regresaFalse();
```

Y lo que estamos diciendo es, ejecuta la segunda operación si la primera es verdadera. 

### Operador Or `||`

Es básicamente lo opuesto al AND, para que el ``OR`` regrese true al menos uno debe ser verdadero.

  * `true || true` = true
  * `true || false` = true
  * `false || true` = true
  * `false || false` = false
  * `true || true || true` = true
  * `true || true || false` = true
  * `true || false || true` = true
  * `true || false || false` = true

```javascript
const regresaTrue = () => true;
const regresaFalse = () => false;

console.log(regresaTrue() || regresaFalse()); // true
console.log(regresaFalse() || regresaTrue()); // true
console.log(regresaFalse() || regresaFalse()); // false
```

Se puede hacer lo mismo que con el AND, si la primera operación ya regresó true, entonces ignora las demás operaciones.

### Asignaciones con operadores

```javascript
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

let a1 = true && 'Hola mundo';

console.log({a1}); // {a1: 'Hola mundo'}

a1 = true && 'Hola mundo' && 150;

console.log({a1}); // {a1: 150}

a1 = false && 'Hola mundo' && 150;

console.log({a1}); // {a1: false}
```

Eso de asignar valores con el operador AND no es algo tan común, pero si es posible, si los valores son verdaderos, entonces la variable toma el ultimo valor que se le asignó.

De la misma forma si lo primero que encuentra es falso, entonces se detiene ahí y toma ese valor.

```javascript
const a2 = 'Hola' && 'mundo';

console.log({a2}); // {a2: 'mundo'}

const a3 = 'Hola' && 'mundo' && false;

console.log({a3}); // {a3: false}
```

Funciona de la misma forma que una tabla de verdad, si estamos usando AND `&&` y el resultad de la operación es falso, entonces la variable toma ese valor, de lo contrario, si es todo verdadero, entonces toma el ultimo valor que se le asignó.

Hacer uso de `&&` dentro de variables no es algo común, lo que si se suele ver es usar el operador OR `||` para asignar valores.

```javascript
const a4 = soyFalse || 'Ya no soy false';

console.log({a4}); // {a4: 'Ya no soy false'}

const a5 = soyFalse || soyUndefined || soyNull || 'Ya no soy false';

console.log({a5}); // {a5: 'Ya no soy false'}
```

Los valores `false`, `undefined` y `null` son considerados como falsos, es por eso que la variable `a5` toma el valor `Ya no soy false`.

Pero si pusiéramos `true` como ultimo valor, después de 'Ya no soy false', el valor que toma la variable seguiría siendo `Ya no soy false`, porque se detiene en el primer valor que encuentra que es verdadero.

```javascript
const a6 = soyFalse || soyUndefined || soyNull || 'Ya no soy false' || true;

console.log({a6}); // {a6: 'Ya no soy false'}
```

## Operador condicional ternario

El operador condicional ternario no es mas que una forma resumida de escribir un `if`.

Ejemplo:

```javascript
/**
 * Días de  semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9.
 */

// Un usuario entra al sitio web para consultar si está abierto hoy.

const dia = 0 // 0: Domingo, 1: Lunes, 2: Martes, 3: Miércoles, 4: Jueves, 5: Viernes, 6: Sábado
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las xx

if (dia === 0 || dia === 6) {
  console.log('Es fin de semana');
  horaApertura = 9;
} else {
  console.log('Es día de semana');
  horaApertura = 11;
}

if (horaActual >= horaApertura) {
  mensaje = 'Está abierto';
} else {
  mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({horaApertura, mensaje});
```

Esto es una forma de resolverlo, pero es muy largo y no es lo que queremos.

También podemos hacerlo de la siguiente manera:

```javascript
if ([0, 6].includes(dia)) {
  console.log('Es fin de semana');
  horaApertura = 9;
} else {
  console.log('Es día de semana');
  horaApertura = 11;
}
```

Con el método `includes` podemos saber si un valor está dentro de un arreglo y regresará un valor booleano en consecuencia.

Aún así sigue siendo muy largo, podemos simplificarlo usando el operador condicional ternario.

```javascript
horaApertura = [0, 6].includes(dia) ? 9 : 11; // Si es domingo (0) o sábado(6), entonces abrimos a las 9, sino, abrimos a las 11.

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;
```

El operador condicional ternario consiste en:

  * `condicion ? valor1 : valor2`

La condición, `?`, el valor que resuelve si es verdadero, `:` y el valor que resuelve si es falso.

### Otros usos del operador ternario

```javascript
const elMayor = (a,b) => {
  return (a > b) ? a : b;
}

console.log(elMayor(10, 20)); // 20
```

Podemos resumir la función anterior de la siguiente manera:

```javascript
const elMayor = (a,b) => (a > b) ? a : b;
```

```javascript
const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log(tieneMembresia(true)); // 2 Dólares
```

El operador ternario también es util cuando queremos generar arreglos u objetos con alguna condición dentro de estos.

Por ejemplo:

```javascript
const amigo = true;
const amigosArr = ['Peter',
 'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Loki',
];

console.log(amigosArr); // ['Peter', 'Tony', 'Dr. Strange', 'Thor']
```

```javascript
const nota = 65; // A+, A, B+
const grado = nota >= 95 'A+' :
              nota >= 90 'A' :
              nota >= 85 'B+' :
              nota >= 80 'B' :
              nota >= 75 'C+' :
              nota >= 70 'C' : 'F';

console.log({nota, grado}); // {nota: 65, grado: 'F'}
```

## Switch

Un `switch` es una estructura de control que nos permite evaluar una condición y ejecutar una serie de instrucciones dependiendo de la condición.

```javascript
const dia = 0;

switch(dia) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Lunes');
    break;
  case 2:
    console.log('Martes');
    break;
  case 3:
    console.log('Miércoles')
  case 4:
    console.log('Jueves');
    break;
  case 5:
    console.log('Viernes');
    break;
  case 6:
    console.log('Sábado');
    break;
  default:
    console.log('No es un día de la semana');
}
```

Después de cada `case` debemos de poner un `break` para que el `switch` se detenga en el caso que se cumpla la condición, de lo contrario seguirá ejecutando los siguientes `case`'s.

El `default` se ejecutará en caso de que ningún `case` se cumpla.

## While y do while

El `while` y el `do while` son estructuras de control iterativas que nos permiten ejecutar una serie de instrucciones de manera cíclica en caso de que la condición sea verdadera.

Hay que tener cuidado con las condiciones que le pasamos al `while` y al `do while` ya que estas se evalúan en cada iteración, por lo que podemos tener un bucle infinito.

```javascript
const carros = ['Ford', 'Mazda', 'Chevrolet', 'Toyota'];

i = 0

while (i < carros.length) {
  console.log(carros[i]);
  i++;
}
```

La condición tiene que ser verdadera para que se ejecute el bucle. También hay que saber que los valores `undefined`, `null` y obviamente `false` son considerados como falsos.

### Do while

El ciclo `do while` es similar al `while` pero se ejecuta al menos una vez antes de evaluar la condición.

Por decirlo de alguna manera, `while` pregunta primero y después dispara el ciclo, mientras que `do while` dispara primero y luego pregunta.

Por ejemplo:

```javascript
const carros = ['Ford', 'Mazda', 'Chevrolet', 'Toyota'];

let i = 0;

do {
  console.log(carros[i]);
  i++;
} while (i < carros.length);
```

## For - For in - For of

El ciclo `for` también es una estructura de control iterativa que nos permite ejecutar una serie de instrucciones en un rango de valores.

El ciclo `for` tiene tres partes:

  * `for (inicio; condición; incremento) {// Instrucciones}`

```javascript
const heroes = ['Batman', 'Superman', 'Flash', 'Wonder']

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}
```
### For in

También tenemos el ciclo `for in` el cual es bastante utilizado si queremos recorrer un objeto o un arreglo.

```javascript
const heroes = ['Batman', 'Superman', 'Flash', 'Wonder'];

for (let i in heroes) {
  console.log(heroes[i]);
}
```

### For of

El ciclo `for of` es bastante utilizado para poder obtener referencias a valores de objetos o arreglos de una manera más sencilla.

```javascript
const heroes = ['Batman', 'Superman', 'Flash', 'Wonder'];

for (let heroe of heroes) {
  console.log(heroe); // Batman, Superman, Flash, Wonder
}
```

Lo que hace el `for of` es extraer el valor de cada elemento y lo asigna a la variable que se está usando como iterador, en este caso `heroe`, es por eso que se acostumbra nombrar la variable iteradora como el singular del objeto o arreglo que estamos recorriendo. (heroes -> heroe).

## DOM - Document Object Model

El DOM es un conjunto de objetos anidados, para representar un documento HTML, también se puede aplicar a XML.

La idea del DOM es tener acceso dinámico a traves de programación a sus elementos y así poder manipularlos.

Por ejemplo, en HTML tenemos todo lo que es el documento, la página que se inicia con la etiqueta `<html>`, todo eso es un objeto del DOM. Dentro de ese HTML podemos tener otro objeto como `<head>`, este a su vez puede tener otro objeto dentro de el. A parte del head también podemos tener el `<body>`, el cual también es un objeto, al cual podemos hacer referencia y manipularlo como queramos, dentro del body podemos tener un `<div>`, dentro de ese div un `<input>`, un `<button>`, etc. Todo estos elementos podemos manipularlos y modificar sus propiedades. Todo esto mediante la manipulación del DOM.

Por ejemplo, si vemos una parte del código HTML:

```html
<div class="row container">
    <div class="col">
        <h1>Jugador 1 - <small>0</small></h1>
        <div id="jugador-cartas">
            <img class="carta" src="assets/cartas/2C.png">
        </div>
    </div>
</div>
```

Podemos ver que tenemos una serie de elementos uno dentro de otro, estos elementos son los objetos del DOM, los cuales podemos manipular y modificar usando unas sentencias especiales de JavaScript que solo van a funcionar si estamos ejecutando el código en un navegador web, ya que en un entorno de servidor estas sentencias no existen, ya que ahí no existe el DOM.

Por ejemplo para hacer referencia a toda la página podemos usar la sentencia `document`:

```javascript
document
```

Y nos devuelve por consola todo el HTML que hemos escrito en el archivo `index.html`.

Si queremos hacer referencia al body podemos usar la sentencia `document.body` o también `document.querySelector('body')`:

```javascript
document.querySelector('body')
```

Esta sentencia nos devuelve el elemento `<body>` que hemos creado en el archivo `index.html`. También existe la sentencia `document.querySelectorAll()` la cual nos retorna un array con todos los elementos que cumplen con la condición que le pasemos como argumento.

También podemos seleccionar una imagen con esta sentencia:

```javascript
document.querySelector('img')
```

Y nos devuelve la primera imagen que encuentre en el documento.

```html
<img class="carta" src="assets/cartas/2C.png">
```

Si queremos cambiar la imagen de la carta podemos hacerlo de la siguiente manera:

```javascript
document.querySelector('img').src = 'assets/cartas/2D.png'
```

El `.src` es un atributo que nos permite ver el path de la imagen, y para cambiarlo podemos usar la sentencia `.src = 'assets/cartas/2D.png'`

Si queremos cambiar el puntaje del jugador 1 podemos hacerlo de la siguiente manera:

```javascript
// sabemos que esta dentro de una etiqueta `<small>`
document.querySelector('small').innerText = 10
```

Si queremos poner elementos HTML dentro de la etiqueta `<small>` el `.innerText` no nos va a servir, para poder hacer eso necesitamos usar la sentencia `.innerHTML`:

```javascript
document.querySelector('small').innerHTML = '<b>Hola mundo</b>'
```

De esta manera dejamos el texto en negrita.

Otra sentencia bastante usada es el `.getElementById()` que nos permite obtener un elemento por su ID:

```javascript
document.getElementById('computadora-cartas')
```

El cual nos devuelve el elemento `<div>` que tiene como ID `computadora-cartas`.

Si intentamos hacer lo mismo usando `.querySelector()` nos va a devolver un `null` ya que esta sentencia intenta buscar un tag con ese nombre pero no lo encuentra.

Pero si pongo `.querySelector('#computadora-cartas')` nos va a devolver el elemento que buscamos.

Si queremos buscar todas las clases que tengan el nombre `carta` podemos hacerlo de la siguiente manera:

```javascript
document.querySelectorAll('.carta')
```

Podemos hacer los mismo con `.getElementsByClassName()`:

```javascript
document.getElementsByClassName('carta') // no es necesario poner el punto
```

Es mas recomendable usar el `querySelector` porque todas las demás sentencias eventualmente terminan usándolo, ademas es más fácil de recordar, ya que sirve para todo.

Si sabemos que vamos a hacer mas de una manipulación a un elemento lo ideal es que lo guardemos en una variable. Por ejemplo:

```javascript
const titulo = document.querySelector('.titulo')

// Entonces cada vez que quiera modificar el titulo solo escribo:

titulo.innerText = 'Hola mundo'
```

Esto hace el código más rápido y eficiente, ya que no tiene que estar barriendo todo el DOM cada vez que quiera modificar el titulo.

Otro tema básico sobre la manipulación del DOM es la creación de elementos que no existen.

Supongamos que quiero crear un nuevo botón. Lo primero es saber en donde vamos a colocarlo, para eso podemos ponerle un atributo `id` al `<div>` que contiene los botones, en mi caso lo pondré en `id="divBotones"`:

```javascript
const divBotones = document.querySelector('#divBotones');
```

Para crear un nuevo elemento podemos usar la sentencia `document.createElement()`

```javascript
const botonNuevo = document.createElement('button');
```

Y para colocar el botón nuevo dentro del div de los botones, podemos usar la sentencia `divBotones.append()`:

```javascript
divBotones.append(botonNuevo)
```

Al crear el botón lo coloca al final de los otros, ademas de que no tiene ningún texto, ni clase, ni estilo. Cada vez que quiera modificar el botón lo podemos hacer referencia a la variable que guardamos:

```javascript
botonNuevo.innerText = 'Nuevo botón'
botonNuevo.classList.add('btn-success')
```

De esta manera le agrego un texto y un estilo de bootstrap.

Supongamos que quiero crear un input al final del body:

```javascript
const input = document.createElement('input');
document.body.append(input);

input.classList.add('form-control')
input.placeholder = 'Ingrese su nombre'
```

## Patrón Módulo

El `patrón módulo` es el patrón de diseño mas común en JavaScript, es compatible con la version ES5 hacia arriba. Nos permite una encapsulación de código lo cual nos ayuda a protegerlo.

Cuando hablamos de encapsulación nos referimos a que nuestro código queda en una especie de contenedor privado de manera de que nadie de fuera pueda manipular mis variables o funciones.

La sintaxis del patrón módulo es la siguiente:

```javascript
(() => {
    
    const personajes = ['Goku', 'Vegeta', 'Trunks'];
    console.log(personajes);

})();
```

La idea es crear una función anónima autoinvocada, la cual crea un nuevo scope el cual no tiene una referencia por nombre por lo cual no va a ser posible llamar el objeto directamente.

Al ejecutar el código nos va a imprimir el array `['Goku', 'Vegeta', 'Trunks']`. Pero si intento acceder a la variable `personajes` escribiéndola en la consola nos va a decir que la variable no existe. Esto es porque la variable está en algún lugar de la memoria sin un identificador por nombre por lo que es muy difícil de encontrar.

Algo también muy común es encontrar el `'use strict'`, el cual básicamente le dice a JavaScript que sea estricto a la hora de evaluar el código.

Por ejemplo:

```javascript
(() => {

    personajes = ['Goku', 'Vegeta', 'Trunks'];
    console.log(personajes);

})();
```

A pesar de no haber declarado la variable `personajes`, el código funciona, pero si uso el [modo estricto](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode), el código no va a funcionar.

```javascript
(() => {
    'use strict';

    personajes = ['Goku', 'Vegeta', 'Trunks'];
    console.log(personajes);

})(); // Error: personajes is not defined
```

Esto nos ayuda a que nuestro código sea mas limpio, es recomendable habilitarlo siempre que usamos el patrón módulo ya que ayuda a evitar errores muy comunes a la hora del desarrollo.

## Clases

### Problemática y necesidad de usar clases

```javascript
const persona = {
  nombre: 'Diego',
  edad: 26,
}

const persona2 = {
  nombre: 'Pedro',
  edad: 26,
}
```

El inconveniente que tengo aquí es que estos objetos no tienen la obligación de tener las mismas propiedades, por ejemplo, podría haberme equivocado y poner `nom` en lugar de `nombre` en uno de los objetos.

Si el dia de mañana tengo que implementar algún método a estos objetos, se me haría difícil, ya que puedo tener muchos de ellos y tendría que hacerlo uno por uno.

```javascript
const persona = {
  nombre: 'Diego',
  edad: 26,
  imprimir() {
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
  }
}
```

Si creo un método `imprimir()` dentro del objeto e intento que ese método imprima alguna propiedad como `nombre` o `edad` no va a funcionar, ya que no existen dentro del scope del método.

```javascript
persona.imprimir(); // Error: nombre, edad is not defined
```

Para solucionar esto debemos usar `this.` para hacer referencia al objeto que estamos trabajando y a su vez a sus propiedades.

```javascript
const persona = {
  nombre: 'Diego',
  edad: 26,
  imprimir() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
  }
}

persona.imprimir(); // Hola, me llamo Diego y tengo 26 años
```

Trabajar los objetos de esta manera no es lo más recomendable, para solucionar este problema de objetos que tienen las misma propiedades y métodos JavaScript implementó la siguiente solución:

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
  }
  
}

const maria = new Persona('Maria', 25);
console.log(maria);
maria.imprimir(); // Hola, me llamo Maria y tengo 25 años
```

De esta forma mediante la función puedo crear tanto objetos como necesite.

```javascript
const ana = new Persona('Ana', 30);
ana.imprimir(); // Hola, me llamo Ana y tengo 30 años
```

Esto hace mucho tiempo era el estándar para crear algo similar a una clase en JavaScript, pero traía desventajas ya que no podemos crear de esta manera propiedades estáticas o propiedades privadas, todo lo que está creado de esa manera puede ser modificado y alterado.

## Clases básicas en JavaScript

Las clases en JavaScript se parecen mucho a las clases en Java, pero hay varias características que las hacen únicas.

```javascript
class Persona {

  nombre = ''; // Por defecto las propiedades son undefined
  codigo = '';
  frase = '';

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

  }
}

const spiderman = new Persona();
console.log(spiderman);
```

Si instanciamos la clase y no le pasamos ningún parámetro, el valor de las propiedades será undefined, si queremos que nos lance un error cuando esto pase debemos crearlo nosotros, no es algo que venga por defecto.

```javascript
class Persona {

  nombre = ''; // Por defecto las propiedades son undefined
  codigo = '';
  frase = '';

  constructor(nombre, codigo, frase) {
    if (!nombre) throw Error('El nombre es obligatorio');

    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

  }
}

const spiderman = new Persona();
```

También podemos poner parámetros por defecto para así evitar que instancie las propiedades con undefined.

```javascript
class Persona {
  nombre;
  codigo;
  frase;

  constructor(nombre = 'sin nombre', codigo = 'son código', frase = 'sin frase') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

  }
}

const spiderman = new Persona('Peter', 'Spiderman', 'Soy tu amigable vecino Spiderman');
```

De esta forma puedo crear nuevos objetos instanciando la clase con los parámetros que necesite.

```javascript
const ironman = new Persona('Tony', 'Ironman', 'Yo soy Ironman');
```

Esta sintaxis es mucho mas limpia y mas aceptada que la anterior en donde usamos funciones para simular clases.

## Métodos en las Clases

Los métodos son funciones internas de una clase, se acostumbra a que estén después del constructor.

```javascript
class Persona {
  nombre;
  codigo;
  frase;

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    console.log(this.frase);
  }

}

const spiderman = new Persona('Peter', 'Spiderman', 'Soy tu amigable vecino Spiderman');
spiderman.quienSoy(); // Soy Peter y mi identidad es Spiderman
```

## Setters y Getters en las clases

Los métodos setter y getter son funciones que se encargan de asignar y obtener valores de las propiedades de un objeto, esto se hace de esta manera para evitar que las propiedades sean modificadas directamente.

```javascript
class Persona {
  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

  }

  set setComidaFavorita( comida ) {
    this.comida = comida;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    console.log(this.frase);
  }

}

const spiderman = new Persona('Peter', 'Spiderman', 'Soy tu amigable vecino Spiderman');
spiderman.quienSoy();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
```

Hay también algunas peculiaridades en JavaScript con las clases, como por ejemplo puedo asignar valores a propiedades que no están declaradas.

```javascript
spiderman.nemesis = 'Duende Verde';
```

Podríamos pensar que esto dará error porque no tenemos una propiedad llamada `nemesis` en ninguna parte, pero en realidad funciona perfectamente y lo guarda como una propiedad de la clase.

Otra cosa rara, es que por ejemplo puedo modificar el valor de una propiedad directamente porque no puedo establecer propiedades privadas.

```javascript
spiderman.comida = 'Duende Verde';
```

Y no pasa nada, esto funciona perfectamente.

Las propiedades privadas son algo que nuevo que se establecerá en JavaScript, como es algo nuevo no funciona todavía en todos los navegadores, de momento solo en chrome.

### Get

Si el Set es para establecer valores a propiedades, el Get es para obtenerlos.

```javascript
get comidaFavorita() {
  return `La comida favorita de ${this.nombre} es ${this.comida}`;
}

console.log(spiderman.getComidaFavorita);
```

## Propiedades, gets y métodos estáticos

Las propiedades estáticas y los métodos estáticos nos permiten usarlos sin la necesidad de instanciar la clase.

```javascript
class Persona {

  static _conteo = 0;


  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

}
```

Si imprimo la clase en consola no nos muestra la propiedad estática, esta propiedad por ejemplo nos puede servir para contar cuantas veces se ha instanciando la clase.

```javascript
class Persona {

  static _conteo = 0;


  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

}
```

Cada vez que instanciamos una clase pasamos por su constructor por lo que es el lugar perfecto para poner el contador.

Del mismo modo, también podemos poner métodos estáticos.

```javascript
class Persona {

  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + ' instancias';
  }

  static mensaje() {
    console.log('Soy un mensaje estático');
  }


  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

}

Persona.mensaje();
```

También hay una forma en la que podemos definir propiedades estáticas fuera de la clase.

```javascript
Persona.propiedadExterna = 'Esta es una propiedad externa';
```

Referenciando directamente a la clase como si fuese un objeto.

## Extends - Clases con SubClases

Eventualmente vamos a necesitar trabajar con herencia, es decir, vamos a necesitar crear una clase que herede propiedades y métodos de otra clase.

```javascript
class Persona {
  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

  }

  set setComidaFavorita( comida ) {
    this.comida = comida;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    console.log(this.frase);
  }

}

const spiderman = new Persona('Peter', 'Spiderman', 'Soy tu amigable vecino Spiderman');
```

Supongamos que necesito crear una nueva clase llamada Heroe, la cual va a tener las mismas propiedades que Persona, en vez de reescribir el constructor, podríamos usar `extends` para heredar las propiedades y métodos de la clase Persona.

```javascript
class Heroe extends Persona {

  clan = 'sin clan';

  constructor(nombre, codigo, frase, clan) {
    super(nombre, codigo, frase); // el constructor de la clase padre siempre debe ir primero
    this.clan = clan;
  }

}
```

## Propiedades privadas

Las propiedades privadas es algo que la POO ha tenido desde hace mucho, pero en JavaScript es algo que todavía no es un estándar, pero se puede hacer.

```javascript
class Rectangulo {

  area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.area = base * altura;
  }

}

const rectangulo = new Rectangulo(10, 15); // area = 150
```

En JavaScript como el area no es una propiedad privada, puedo cambiar el valor que tiene, ya sea accidental o intencionalmente, esto no debería poder hacerlo ya que el area es un valor calculado en base a la base y la altura.

Para que el area sea una propiedad privada podemos usar el operador `#`.

```javascript
class Rectangulo {

  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;
  }

}

const rectangulo = new Rectangulo(10, 15); // area = 150
```

Lamentablemente esto aún no se puede hacer con los métodos.

Esta característica de momento no es soportada por todos los navegadores, por lo que hay que tener cuidado al usarla.

## Singleton en JavaScript

Un singleton es básicamente una instancia única de una clase. Imaginemos que necesito tener una clase la cual solo debe tener una instancia de manera global en toda la aplicación.

```javascript
class Singleton {


  static instancia;
  nombre = '';

  constructor(nombre = '') {

    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    Singleton.instancia = this;
    this.nombre = nombre;

  }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Capitan America');

console.log(`Nombre de la instancia 1: ${instancia1.nombre}`); // Ironman
console.log(`Nombre de la instancia 2: ${instancia2.nombre}`); // Ironman
```

No importa cuantas veces vuelva a instanciar la clase, siempre va a devolver la primera instancia.

## Múltiples constructores

En lenguajes como Java podemos tener múltiples constructores en los cuales puede variar la cantidad de argumentos que reciben.

En JavaScript no es posible esto, pero podemos utilizar un truco para lograr algo similar.

```javascript
class Persona {

  static porObjeto( { nombre, apellido, pais } ) {
    return new Persona( nombre, apellido, pais );
  }

  constructor( nombre, apellido, pais ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    return `Info: ${this.nombre}, ${this.apellido}, ${this.pais}`;
  }

}

const fher = {

  nombre: 'Fernando',
  apellido: 'Herrera',
  pais: 'Costa Rica'

}

const nombre1 = 'Diego',
      apellido1 = 'Obando',
      pais1 = 'Chile';

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fher);

persona1.getInfo(); // Info: Diego, Obando, Chile
persona2.getInfo(); // Info: Fernando, Herrera, Costa Rica
```

Con este truco podemos simular múltiples constructores en JavaScript.

## Módulos y Webpack

### Introducción a Node, NPM y Webpack

Cuando desarrollamos llega un punto en el que ya no podemos usar un solo archivo para toda la aplicación, es entonces cuando necesitamos separar la lógica en módulos para que sea mas fácil darles mantenimiento después.

También llegara un punto en donde necesitaremos usar tareas automáticas, como por ejemplo Live Reload para poder ver los cambios que hacemos en tiempo real, alguna herramienta para minimizar el código o alguna herramienta para incrementar la compatibilidad con otros navegadores.

Con herramientas como ``NodeJs`` podemos usar nuestra computadora como servidor de desarrollo, esto es algo muy útil, pero al momento de pasar la aplicación al computador del cliente para ver si funciona bien, nos podemos encontrar con problemas, ya que puede que estemos usando características del lenguaje que no están disponibles en navegadores muy antiguos. Para solucionar este tipo de problemas podemos tomar nuestro código y pasarlo por librerías como `babel` para convertir nuestro código moderno a una versión que pueda interpretar cualquier navegador. Este tipo de librerías están disponibles gracias a `npm`, la idea de esta herramienta es que no tengamos que reinventar la rueda, sino que solo descargamos el paquete que necesitamos y lo instalamos.

### Webpack

Webpack es un empaquetador de módulos, es decir, nos ayuda a realizar muchos trabajos de forma automática como por ejemplo:

- Gestionar las dependencias.
- Montar servidores de desarrollo y pruebas.
- Cargar módulos.
- Convertir a diferentes formatos.
- Minimizar el código.
- Compilar de SASS a CSS.
- Compilar de TS a JS.
- Nos permite trabajar con JS moderno.

## Callbacks y Promesas

Desde que introdujeron las promesas en JavaScript, la programación asíncrona se ha convertido en una de las características más importantes del lenguaje.

## Callbacks

Si bien el estándar de JavaScript está buscando usar cada vez menos los callbacks y trabajar mas con las promesas, todavía hoy en día es muy común ver y trabajar con ellos.

Imaginemos que tenemos que crear una función que haga una búsqueda en alguna base de datos. Por ejemplo:

```javascript
buscarHeroe(heroeId);
```

Esta función debería ir a la base de datos, traer la información del heroe y ejecutar algún procedimiento después. Para esto JavaScript creó el concepto de callbacks, un callback no es más que una función enviada como argumento a otra función.

```javascript
const heroeId = 'capi';

buscarHeroe(heroeId, () => {
  console.log('Callback llamado');
});
```

El objetivo de esta función enviada como un argumento es que dentro de la implementación de la función `buscarHeroe` yo pueda disparar el callback en el momento que acabe el procedimiento, es decir, luego de que busque el heroe en la base de datos se ejecutará el callback.

## Argumentos estándar de los callbacks

Debemos de tener en cuanta que nuestras funciones deben ser autosuficientes y ser claras en su funcionamiento. 

Por ejemplo, ¿como manejamos un error si es que no se encuentra el heroe?

```javascript
  export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if (heroe) {
      callback(null, heroe);
    } else {
      // Un error
      callback(`No existe un hero con el id: ${id}`);
    }

  }
```

Es un estándar que el primer argumento que recibe un callback es un error, si es que existe.

Entonces al momento de ejecutar la función podemos hacerlo de la siguiente manera:

```javascript
const heroeId = 'capi';

buscarHeroe(heroeId, (err, heroe) => {
  if (err) {
    console.error(err);
  } else {
    console.log(heroe);
  }
});
```

Esta es la forma estándar de manejar los errores en los callbacks.

## Callback Hell

Un inconveniente que nos podemos encontrar con los callbacks es que podemos anidar uno dentro de otro, es decir, un callback puede llamar a otro callback, y así sucesivamente, esto es algo muy difícil de leer y entender.

```javascript
buscarHeroe( heroeId, ( err, heroe1 ) => {

    if (err) { return console.error(err); }

    buscarHeroe(heroeId1, ( err, heroe2 ) => {

        if (err) { return console.error(err); }

        buscarHeroe( heroeId2, (err, heroe3) => {

          if (err) { return console.error( err ); }

          console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la batalla`);

        }); 
    });
});
```

Conforme voy haciendo acciones en base a la respuesta de otro callback, esto se empieza a anidar y anidar,  y se vuelve casi imposible de leer y entender.

A pesar de ser algo muy difícil de mantener, era la muy utilizado por mucho tiempo. Es por esto que JavaScript en el ES6 creo un mecanismo para poder trabajar esto de forma mas limpia, es ahí en donde nacieron las promesas.

## Promesas

Las promesas en JavaScript son iguales a como son las promesas en la vida real, por ejemplo, Juan le promete a Pedro que tendrá listo el reporte para mañana, entonces Pedro va a seguir con su vida normal haciendo las cosas que tiene que hacer, a Juan esto no le interesa para nada, el sabe que tiene su trabajo que es realizar ese reporte, mientras que Pedro sigue con la suyo a la espera de que Juan le entregue el reporte. Pero también tenemos el caso de que Juan no cumpla con su promesa, en ese caso Pedro tendrá que realizar alguna acción en base a la promesa que no cumplió Juan. Básicamente, eso es el concepto de las promesas.

Entonces podemos entender una promesa como, un acuerdo entre dos partes, a través de la cual una de ellas se compromete a realizar algo ante el cumplimiento de una condición o el vencimiento de un plazo.

Nos estamos comprometiendo a realizar algo y le vamos a avisar a la persona que le hicimos la promesa cuando terminamos de realizar el trabajo o bien notificarle si no somos capaces de cumplir esa promesa.

```javascript
export const buscarHeroe = ( id ) => {

    const heroe = heroes[id];

    return new Promise( ( resolve, reject ) => {

        if ( heroe ) {
            resolve( heroe );
        } else {
            reject( `No existe un hero con el id: ${id}` ); 
        }

    });

}
```

Una promesa recibe un callback con dos argumentos, resolve y reject, el primero es cuando la promesa se resuelve, es decir, se cumple la condición, y el segundo es cuando la promesa se rechaza, es decir, cuando hay algún error de cualquier tipo.

Entonces podemos usar la función en algún otro lado, por ejemplo:

```javascript
const heroeId = 'capi';

buscarHeroe(heroeId)
  .then(heroe => {
    console.log(heroe);
  })
  .catch(err => {
    console.error(err);
  });
```

Esta al ser una promesa tiene 3 métodos, el `then` es cuando todo sucede correctamente, el `catch` es cuando hay algún error, y el `finally` el cual por lo general es usado para hacer algún tipo de limpieza  y siempre se ejecuta después de que se ejecute el `then` o el `catch`, es como el último paso.

Una característica que hace mejor a las promesas que los callbacks, es que las promesas pasan a otro plano en donde esperan a ser resueltas para luego volver a la cola normal de procesos, esto previene que se bloquee la ejecución del programa, a diferencia de los callbacks los cuales son sincronos por lo que pueden bloquear la ejecución del programa.

## Promise.all

Las promesas están muy bien, pero que pasa si quiero recrear el código anterior con los callbacks?

```javascript
buscarHeroe( heroeId1 ).then( heroe1 => {
    // console.log(`Enviando a ${heroe.nombre} a la batalla`);
    buscarHeroe( heroeId2 ).then( heroe2 => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la batalla`);
    });
});
```

No es mucha la diferencia, de echo esto se puede convertir en un `promise hell`. Pero si nos ponemos a analizar bien el procedimiento, las funciones buscarHeroe en realidad no tienen una relación tan directa, por que realmente lo que necesito es ejecutar ambas promesas, obtener la respuesta de ambas y luego de eso hago la impresión en consola. Puedo resumir todo el código a una manera más sencilla:

```javascript
Promise.all([ buscarHeroe( heroeId1 ), buscarHeroe( heroeId2 ) ])
    .then( ([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la batalla!!!`);
    });
```

Con `Promise.all` puedo enviar un array con las promesas que necesito ejecutar, y cuando se resuelvan todas las promesas, se ejecutará el callback que le pasemos en el `then`, de esta forma estoy ejecutando ambas promesas en paralelo.

## Promise.catch

¿Que pasa si algo sale mal en una de las promesa?, de igual forma podemos usar el método `catch` para capturar el error y hacer algo con el.

```javascript
Promise.all([ buscarHeroe( heroeId1 ), buscarHeroe( heroeId2 ) ])
    .then( ([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la batalla!!!`);
    })
    .catch( err => {
        alert(err);
    });
```

Si le pasamos a una función un argumento no valido, por ejemplo, un id que no existe, entonces el método `catch` nos devolverá un error, es importante saber que si algo de lo que se encuentra dentro del array falla, no se ejecutará nada de lo que esté en el `then`, ese código solo se va a ejecutar si todas las promesas se resuelven de manera exitosa.

## Promise.race

El Promise.race nos permite ejecutar todas las promesas en conjunto y obtener el mensaje de la promesa que se resuelve mas rápido.

Por ejemplo tengo un conjunto de promesas:

```javascript
const promesaLenta = new Promise( (resolve, reject) => {

    setTimeout(() => resolve('Promesa Lenta'), 2000);

});

const promesaMedia = new Promise( (resolve, reject) => {

    setTimeout(() => resolve('Promesa Media'), 1500);

});

const promesaRapida = new Promise( (resolve, reject) => {

    setTimeout(() => resolve('Promesa Rápida'), 1000);

});
```

Y las ejecuto:

```javascript
promesaLenta.then( console.log )
promesaMedia.then( console.log )
promesaRapida.then( console.log )
```

Se ejecutan en el siguiente orden: "Promesa Rápida", "Promesa Media", "Promesa Lenta".

Pero si las ejecuto con el `Promise.race` solo se ejecutaría la "Promesa Rápida":

```javascript
Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
    .then( console.log )
```

Si bien las otras promesas se intentaron ejecutar, no fueron mas veloces, es por eso que el único mensaje que tenemos es el de la "Promesa Rápida". También hay que decir que si alguna de las promesas diera un error, JavaScript va a ignorar esa promesa, pero si la que falla es la promesa más rápida entonces si devolvería su error.

## Async

El `async` nos permite convertir una función en una promesa, su sintaxis es mas simple que las promesas tradicionales.

```javascript
export const buscarHeroeAsync = async ( id ) => {

    const heroe = heroes[id];

    if ( heroe ) {
        return heroe;
    } else {
        throw Error(`No existe un hero con el id: ${id}`); 
    }

}
```

```javascript
buscarHeroe('capi')
    .then( heroe => console.log(heroe) )
    .catch( err => console.warn(err) );

buscarHeroeAsync('iron')
    .then( heroe => console.log(heroe) )
    .catch( err => console.warn(err) );
```

El async toma una función y hace que lo que retorna sea una promesa, es decir, su ``resolve`` es el valor que tiene en el ``return``, y en lugar de poner el ``reject`` usamos el ``throw``.

## Await

El `await` es una palabra reservada que nos permite esperar a que una promesa se resuelva antes de continuar con el código.

```javascript	
import { buscarHeroeAsync } from "./promesas";



const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => {

    const heroesArr = [];

    for (const id of heroesIds) {
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }

    return heroesArr;

}
```

Por ejemplo, en la función anterior estamos usando también la función `buscarHeroeAsync` la cual es una función asíncrona, por lo que necesitamos esperar a que se resuelva la promesa para poder continuar con el código, de lo contrario cuando tratemos de imprimir el array de heroes no nos devolvería ninguno, ya que no sabemos cuando se resolverá la promesa.

Este tipo de características hay que usarlas sabiamente, porque puede que una función tarde mucho en resolverse y el await esperará hasta que este listo, esto puede hacer que nuestra aplicación se sienta lenta.