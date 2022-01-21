# Apuntes de JavaScript

`Java` y `JavaScript` son dos lenguajes de programación diferentes, funcionan de manera diferente, se ejecutan de manera diferente y tienen un enfoque diferente.

A inicio de los años 90, la velocidad de los modems era de 28kbps lo que abrió las puertas a que se pueda construir sitios web mejores. Esto dio lugar a la necesidad de crear un lenguaje que se ejecutar del lado del cliente, para así poder lidiar con la lentitud del internet y la complejidad de las páginas web. Antes de JavaScript, el servidor lidiaba con toda la lógica de la página web, y el cliente sólo se encargaba de la parte visual.

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

`var` era la forma antigua de declarar variables, actualmente no se usa ya que traía varios problemas, actualmente se prefiere usar `let` y `const`. Sin embargo podemos seguir usando `var` si queremos ya que JavaScript es retrocompatible, es decir que podemos usar código de versiones anteriores del lenguaje.

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

Es un código que provee el funcionamiento de una característica de JavaScript (ES5), en versiones viejas como ES5.