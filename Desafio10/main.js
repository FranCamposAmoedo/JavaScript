
$(document).ready(() => {

    /* Guardo en una constante el URL de la API */
    const URLGET = "https://rickandmortyapi.com/api/character";
    
    /* Agrego al body un botón para obtener datos de la API */
    $("body").prepend('<button id="btn">Personajes de Rick and Morty</button>');

    /* Escucho el evento de click */
    $("#btn").click(() => {

        /* Tomo los datos de la API */
        $.get(URLGET, function (respuesta, estado) {
           
            /* Agrego dinámicamente los personajes con su imagen, su nombre y su especie */
            if (estado === "success"){
                let personajes = respuesta;
                for (let i = 0; personajes.results.length; i++){
                    $("body").append(`<div>
                                          <h2>Nombre: ${personajes.results[i].name}</h2>
                                          <h3>Especie: ${personajes.results[i].species}</h3>
                                          <img src="${personajes.results[i].image}">
                                     </div>`)
                }
            }
        })
    })
})