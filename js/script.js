/*
Gestiona la paginación para mostrar diferentes conjuntos de Pokémon. De 10 en 10. añadir esto a la url más otras cosas puede limitar la cantidad `?limit=`
- Permite la búsqueda de Pokémon por nombre. Si no exite deberá aparecer un mensaje de "pokemon no encontrado"
- Mira como aceder al pokemon por nombre en la documentación.
- Maneja eventos de botones y actualiza dinámicamente la interfaz.
- aquí la documentación de pokemon `https://pokeapi.co/docs/v2`

"https://pokeapi.co/api/v2/pokemon?offset=10&limit=10"


nombre= pokemons.results[i].name
foto = 

*/

const searchBtn = document.getElementById("searchBtn")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const resetBtn = document.getElementById("resetBtn")
const containerApp = document.getElementById("app")
let pokemonName; 

const urlBase = "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10";


const getPokemons = async () => {
    try{
        const response = await fetch(urlBase)
        const data = await response.json();
        const pokemonName = data.results[1].namename;
        const pokemonImage = data.sprites.ofront_default;
        const template = `
            <div class="card">
                <h2><span>Nombre:</span> ${pokemonName}</h2>
                <img class="imagen" src="${pokemonImage}" alt="${pokemonName}">
            </div>`;

        containerApp.innerHTML = template;
   
        } catch (error) {
        console.log("Error al obtener el pokemon", error)
}}


getPokemons (); 

/*
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
