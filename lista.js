

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
                            personaje.species
                        );
                        return nuevoPersonaje;
                    });

                    listaPersonajes = nuevosPersonajes;

                    // Limpiamos el contenedor de filas
                    document.getElementById("contenedor").innerHTML = "";

                    // Creamos nuevas filas y llenamos con la lista actualizada
                    for (let i = 0; i < 3; i++) {
                        let nuevaFila = document.createElement("div");
                        nuevaFila.className = "row";

                        for (let j = 0; j < 6; j++) {
                            let index = i * 6 + j;
                            if (index < listaPersonajes.length) {
                                let columna = document.createElement("div");
                                columna.className = "col-lg-2 col-md-3 col-sm-4";

                                let nombrePersonaje = document.createElement("p");
                                nombrePersonaje.innerText = listaPersonajes[index].nombre;

                                let imagenPersonaje = document.createElement("img");
                                imagenPersonaje.src = listaPersonajes[index].imagen;
                                imagenPersonaje.className = "personaje-imagen img-fluid";

                                // Agregamos un evento de clic a la imagen

                                imagenPersonaje.addEventListener("click", () => {
                                    mostrarDetalles(listaPersonajes[index]);
                                });

                                columna.appendChild(imagenPersonaje);
                                //columna.appendChild(nombrePersonaje);

                                nuevaFila.appendChild(columna);
                            }
                        }

                        document.getElementById("contenedor").appendChild(nuevaFila);
                    }

                    // Actualizamos el valor de nextPageUrl
                    nextPageUrl = listaJson.info.next;
                });
        }

        function mostrarDetalles(personaje) {
            // Redirigir a la página de detalles con más información
            window.location.href = `datos.html?nombre=${encodeURIComponent(personaje.nombre)}&species=${encodeURIComponent(personaje.species)}`;
        }

        function fetchDataFromUrl(url) {
            return fetch(url)
                .then((response) => response.json());
        }
  