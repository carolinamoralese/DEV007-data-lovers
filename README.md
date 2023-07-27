# Data Lovers

https://dev-007-data-lovers-qqihui5de-carolinamoralese.vercel.app/
## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [2.1 Listado de problemas que detectaste a través de tests de usabilidad](#2.1-Listado-de-problemas-que-dectectaste-a-través-de-tests-de-usabilidad)
* [2.2 Historia de usuarios](#2.2-Historia-de-usuario)
* [3. Consideraciones técnicas](#3-Consideraciones-técnicas)
* [4. Pistas, tips y lecturas complementarias](#4-pistas-tips-y-lecturas-complementarias)
* [5. Checklist](#5-checklist)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por las
usuarias, al lado derecho.

## 2. Resumen del proyecto

En este proyecto construímos una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que los fans de la cinematografía del
Estudio Ghbili deseen ver.

Tenemos una página web estilo galería que nos permite visualizar data,
filtrarla, ordenarla y interactuar con imágenes de personajes, paisajes y vehículos de las películas
de éste universo. 

Buscamos entender quién es nuestro usuario, y qué necesita saber o ver exactamente; 
para ésto hicimos una breve encuesta donde los fanáticos nos dijeron qué caracteríscas corresponderían
mejor con su búsqueda, qué les gustaría encontrar y qué otras películas pueden conocer según el director y
el productor de ésta.
Luego construímos la interfaz que
les ayude a interactuar y entender mejor esos datos.

Nos basamos en ésta API, proporcionada anteriormente:
* [Studio Ghibli](src/data/ghibli/ghibli.json).
  Tiene incluída la lista de las animaciones y sus personajes del
  [Studio Ghibli](https://ghiblicollection.com/).
  - [Investigación con seguidores de las animaciones del Studio Ghibli](src/data/ghibli/README.md)

El objetivo principal de este proyecto fue que aprendimos a diseñar y construir una
interfaz web donde el usuario puede visualizar y manipular data, encontrar la informacion que necesita y 
recrearse con nuestra interfaz.

Fuimos fieles al primer diseño en Figma que adaptamos para nuestro objetivo:

En el siguiente link encontraremos el prototipo de alta fidelidad

(https://www.figma.com/file/V9s8qZDiOlmUPoUPZXYSf3/Untitled?type=design&node-id=0-1&t=Fedv9tNBBzXHta7H-0),

En el siguiente link encontraremos el prototipo de baja fidelidad

https://www.figma.com/file/oLsLUKQjKjoDO81uimet37/Untitled?type=design&node-id=0-1&t=VNYlTwVYpTT2YxnA-0

Prototipo de baja fidelidad:
![Captura de pantalla 2023-05-23 a la(s) 9 31 41 a m](https://github.com/carolinamoralese/DEV007-data-lovers/assets/130382737/18389236-a56e-4a0c-98a6-a7ea3db3fc5f)
![Captura de pantalla 2023-05-23 a la(s) 9 31 28 a m](https://github.com/carolinamoralese/DEV007-data-lovers/assets/130382737/c15cae41-7ced-40c9-b229-cd16182fc2e5)

Resultado del proyecto:
![Prototipo Figma](https://github.com/annmora13/DEV007-data-lovers/blob/main/Prototipo1.png)
![Prototipo2 Figma](https://github.com/annmora13/DEV007-data-lovers/blob/main/Prototipo2.png)
![Prototipo3 Figma](https://github.com/carolinamoralese/DEV007-data-lovers/blob/312a60891f6a4a70308c61790dcfdcda3d5b764d/src/imagenes/Captura%20de%20pantalla%202023-07-27%20a%20la(s)%2012.41.46%20p.m..png)

### 2.1 Listado de problemas que detectaste a través de tests de usabilidad
- En el prototipo de alta fidelidad en los filtros se opto por el color verde, pero despues
de solicitar feedback a un grupo de persona nos recomendaron cambiar de color por uno gris oscuro,
ya que se veia mas agradable visualmente.
- En el prototipo de alta fidelidad al momento de mostrar las peliculas se visualizaban un un cuadrado
con puntas redondas pero al momento de solicitar feedback del proyecto el grupo de personas nos recomendo
dejarlo mas cuadrado para que pareciera mas a una caratula de libro o pelicula.

### 2.2 Historia de usuario
Al momento de realizar las encuentas para empezar nuestro proyecto el grupo de personas indico que queria
hacer filtros para poder encontrar variar informacion de Studio Ghibli.
Para poder realizar lo anterior se distribuyo las historias de usuarios en los diferentes Sprint:

- En el primer Sprint se hizo el filtro por director, para que cuando el usuario diera click en un director
enseñara las peliculas de ese director en particular.

- En el segundo Sprint se hizo el filtro por año de lanzamiento de pelicula y el buscador, para que cuado el 
usuario empezara a digitar el nombre de la pelicula empezara a mostrar las peliculas relacionado con lo que 
el usuario estuviera digitando.

- En el tercer Sprint se hizo el filtro para que ordenara las peliculas de la AZ o ZA segun lo que el usuario seleccione 
Por ultimo se realizaron los test a todas las funciones que se realizaron para pover verificar que se este filtrando
de manera correcta.

Cabe aclarar que durante cada Sprint el proyecto era responsive, como nos recomendaron en un principio.


## 3. Consideraciones técnicas

La lógica del proyecto se implementó completamente en JavaScript
(ES6), HTML y CSS. No utilizamos librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
y con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |  |  ├── rickandmorty.js
|  |  |  ├── rickandmorty.json
|  |  |  └── README.md
|  |  └── athletes
|  |  |  ├── athletes.js
|  |  |  ├── athletes.json
|  |  |  └── README.md
|  |  └── ghibli
|  |  |  ├── ghibli.js
|  |  |  ├── ghibli.json
|  |  |  └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 7 file: 20
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

En este archivo encontrarás una serie de _imports_ _comentados_. Para _cargar_
las diferentes fuentes de datos tendrás que _descomentar_ la línea
correspondiente.

Por ejemplo, si "descomentamos" la siguiente línea:

```js
// import data from './data/lol/lol.js';
```

La línea quedaría así:

```js
import data from './data/lol/lol.js';
```

Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## 4. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.


### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

## 5. Checklist

* [X] Usa VanillaJS.
* [X] Pasa linter (`npm run pretest`)
* [X] Pasa tests (`npm test`)
* [X] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [X] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [X] Incluye historias de usuario en `README.md`.
* [X] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [X] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [X] Incluye link a Zeplin en `README.md`.
* [X] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [X] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [X] UI: Permite ordenar data por uno o más campos (asc y desc).
* [X] UI: Permite filtrar data en base a una condición.
* [X] UI: Es _responsive_.
