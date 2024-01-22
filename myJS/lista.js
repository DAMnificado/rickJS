const url = "https://rickandmortyapi.com/api/character/";
let nextPageUrl = "";
let listaPersonajes = [];

document.addEventListener("DOMContentLoaded", () => {
    cargarPersonajes(url);

    document.getElementById("cargarMasBtn").addEventListener("click", () => {
        cargarPersonajes(nextPageUrl);
    });
});

function cargarPersonajes(url) {
    fetchDataFromUrl(url)
        .then((listaJson) => {
            let nuevosPersonajes = listaJson.results.map((personaje) => {
                let nuevoPersonaje = new Personaje(
                    personaje.name,
                    personaje.image,
                    personaje.species,
                );
                return nuevoPersonaje;
            });

            listaPersonajes = nuevosPersonajes;

            // Limpiamos el contenedor de filas
            document.getElementById("contenedor").innerHTML = "";

            // Creamos nuevas filas y llenamos con la lista actualizada
           
                let nuevaFila = document.createElement("div");
                nuevaFila.className = "row row-cols-lg-5 row-cols-md-3 row-cols-1 container align-items-center justify-content-center";

              
                listaPersonajes.forEach(value => {


                let columna = document.createElement("div");
                 columna.className = " col";

                let nombrePersonaje = document.createElement("p");
                                        nombrePersonaje.innerText = value.nombre;

                let imagenPersonaje = document.createElement("img");
                                        imagenPersonaje.src = value.imagen;
                                        imagenPersonaje.className = "personaje-imagen img-fluid";

                                        // Agregamos un evento de clic a la imagen
                                        imagenPersonaje.addEventListener("click", () => {
                                            mostrarDetalles(value);
                                        });

                                        columna.appendChild(imagenPersonaje);
                                        //columna.appendChild(nombrePersonaje);

                                        nuevaFila.appendChild(columna);
                                    






                })
                       
                

                document.getElementById("contenedor").appendChild(nuevaFila);
            

            // Actualizamos el valor de nextPageUrl
            nextPageUrl = listaJson.info.next;
        });
}

function mostrarDetalles(personaje) {
    // Redirigir a la página de detalles con más información
    window.location.href = `datos.html?nombre=${(personaje.nombre)}&species=${(personaje.species)}`;
}

function fetchDataFromUrl(url) {
    return fetch(url)
        .then((response) => response.json());
}
