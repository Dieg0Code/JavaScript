# DOM - Document Object Model

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