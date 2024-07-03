//aca vamos a traer los datos del poke api por medio de la libreria axios y un fetch
const container : HTMLElement | any = document.getElementById("app"); //container: Se obtiene el elemento del DOM con el ID 'app' donde se mostrarán los Pokémon. 
const pokemons : number = 100; // pokemons: Se define la cantidad de Pokémon que se mostrarán en la Pokédex.

//definimos la interfaz de los datos que vamos a traer
interface IPokemon {
    id : number;
    name : string;
    image : string;
    type : string;
}

//fetchData: Se define una función fetchData que se encargará de traer los datos de los Pokémon.
const fetchData = (): void => {
    for (let i = 1; i <= pokemons; i++){
        getPokemon(i);
    }
}

//getPokemon: Se define una función getPokemon que recibe un id de tipo number y retorna una promesa de tipo void. esto para traer los datos de los pokemones
const getPokemon = async (id: number): Promise<void> => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await data.json();
    const pokemonType : string = pokemon.types.map((poke: any) => poke.type.name).join(', ');

    // transformedPokemon: Se define un objeto de tipo IPokemon que contendrá los datos del Pokémon transformados.
    const transformedPokemon = { 
        id: pokemon.id,
        name: pokemon.name,
        image: `${pokemon.sprites.front_default}`,
        type: pokemonType
    };

    showPokemon(transformedPokemon); //se llama a la funcion showPokemon

};

//showPokemon: Se define una función showPokemon que recibe un objeto de tipo IPokemon y retorna void. esto para mostrar los pokemones en el container
const showPokemon = (pokemon: IPokemon): void => {
    let output : string = `
    <div class="card">
        <span class="card--id">#${pokemon.id}</span>
        <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
        <h1 class="card--name">${pokemon.name}</h1>
        <span class="card--details">${pokemon.type}</span>
    </div>
    `; //output: Se define una variable output de tipo string que contendrá el HTML de cada Pokémon.
    container.innerHTML += output; //se agrega el contenido al container
};

//llamamos a la funcion fetchData
fetchData();



