document.addEventListener('DOMContentLoaded', function(){
    const pokeInput = document.getElementById('pokemonInput');
    const submitBtn = document.getElementById ('submitButton');
    const pokeInfo = document.getElementById('pokemon-container');
    const POKE_API =`https://pokeapi.co/api/v2/pokemon/`;

    submitBtn.addEventListener('click', function(){
        const pokeSearch= pokeInput.value.toLowerCase();
        const url = `${POKE_API}${pokeSearch}` 

        fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error('Error al cargar el JSON');
            } return response.json();
        })
        .then (data=> {
            pokeInfo.innerHTML = `
            <h2 id="nombre">${data.name.toUpperCase()} </h2>
            
            <div id="img-container">
            <img src="${data.sprites.front_default}" class="img">
            <img src="${data.sprites.back_default}"  class="img">
            </div>

            <div id="info-container">
            <p class="parrafo">Tipo: ${data.types[0].type.name} </p>
            <p class="parrafo">Habilidades: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name} </p>
            <p class="parrafo">Movimientos: ${data.moves[0].move.name}, ${data.moves[1].move.name} </p>
            <p class="parrafo">Altura: ${data.height} mts. </p>
            </div>

            `; console.log(data);
        })
        .catch (error =>{
            console.error("Hubo un error", error);
        });
    })
})