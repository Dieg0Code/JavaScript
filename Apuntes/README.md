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