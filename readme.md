# Rick y Morty Personajes

Este proyecto es una aplicación web simple que muestra una lista de personajes de la serie Rick y Morty, utilizando la [Rick and Morty API](https://rickandmortyapi.com/). Los personajes se cargan de forma dinámica. Puedes cargar más personajes haciendo clic en el botón correspondiente y si haces click en una de las fotos de los personajes iras a otro html donde puedes ver algún dato mas de interés sobre el personaje y la serie. 

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- [Bootstrap](https://getbootstrap.com/) (v5.3.0-alpha3) - Para estilos y diseño responsivo

## Estructura del Proyecto

- `index.html`: Página principal que muestra la lista de personajes.
- `css/style.css`: Archivo de estilo personalizado (solo es para darle forma al nav).
- `myJS/personaje.js`: Archivo JavaScript que define la clase `Personaje`.
- `myJS/lista.js`: Archivo JavaScript principal que maneja la lógica de carga de personajes.
- `lista.html`: Página que enseña una lista de personajes. Permite cargar más haciendo clic en "Cargar mas personajes"
- `datos.js`: "El script datos.js utiliza JavaScript para extraer parámetros de la URL y mostrar los detalles del personaje
- `datos.html`: Página que presentan detalles como el nombre, especie e imagen del personaje seleccionado. La información se obtiene de los parámetros de la URL mediante JavaScript.
- `img/`: Carpeta que contiene imágenes que se usan en todo el proyecto.
- `README.md`: Este archivo.

## Cómo Iniciar

1. Clona este repositorio: `git clone [URL del repositorio]`.
2. Abre `index.html` en tu navegador web.


## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).

**Nota:** Asegúrate de tener una conexión a Internet activa para cargar los datos de la API.

