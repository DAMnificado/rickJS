
document.addEventListener("DOMContentLoaded", () => {
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);

    const nombre = urlParams.get("nombre");
    const species = urlParams.get("species");
    const imagen = urlParams.get("imagen");


    // Mostrar los detalles del personaje
    document.getElementById("nombre").innerText = `Nombre: ${nombre}`;
    document.getElementById("species").innerText = `Especie: ${species}`;
    document.getElementById("imagen").src =imagen;
    
});
