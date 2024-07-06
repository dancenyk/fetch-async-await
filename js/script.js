/*
Gestiona la paginación para mostrar diferentes conjuntos de Pokémon. De 10 en 10. añadir esto a la url más otras cosas puede limitar la cantidad `?limit=`
- Permite la búsqueda de Pokémon por nombre. Si no exite deberá aparecer un mensaje de "pokemon no encontrado"
- Mira como aceder al pokemon por nombre en la documentación.
- Maneja eventos de botones y actualiza dinámicamente la interfaz.
- aquí la documentación de pokemon `https://pokeapi.co/docs/v2`

"https://pokeapi.co/api/v2/pokemon?offset=10&limit=10"


- navegar entre las páginas de Pokémon
- buscar Pokémon específicos 
- ver detalles básicos de cada uno.
*/

const searchBtn = document.getElementById("searchBtn")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const resetBtn = document.getElementById("resetBtn")
const containerApp = document.getElementById("app")


const urlBase = "https://pokeapi.co/api/v2/pokemon";

let offset = 10; 


const getPokemons = async () => {
    try{
        const response = await fetch(`${urlBase}?offset=${offset}&limit=10`)
        const pokemons = await response.json();
        console.log(pokemons)
        const pokemonArray = pokemons.results
        return pokemonArray

        //console.log(data.results[2].url.other.dream_world.front_default)
        //console.log(data.sprites.other.dream_world.front_default)
        } catch (error) {
        console.log("Error al obtener el pokemon", error)
}};


getPokemons (); 

getPokemons().then(pokemonArray =>{
    pokemonArray.forEach(pokemon => {
       console.log(pokemon.name) 
       
       
        let template = `<div class="cardPokemon">
        <h2><span>Nombre:</span>${pokemon.name}</h2>
        </div>` 
        containerApp.innerHTML += template
    });
}); 

nextBtn.addEventListener("click", ()=>{
    offset +=10; 
})



/*


       const template = `
            <div class="card">
                <h2><span>Nombre:</span> ${pokemonName}</h2>
                <img class="imagen" src="${pokemonImage}" alt="${pokemonName}">
            </div>`;

        containerApp.innerHTML = template;
    getPokemons().then(pokemons => {
        pokemons.forEach((pokemon, index) => {
          let template = `
            <div class="card">
            <h2><span>Nombre:</span> ${pokemon.results[index].name}</h2>
             <img class="imagen" src="${pokemon.sprites.front_default}" alt="${pokemon.results[index].name}">;
            </div>` 
            
            containerApp.innerHTML += template; 
    
        })
    }); 
*/
