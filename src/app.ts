//aca vamos a traer los datos del poke api por medio de la libreria axios y un fetch
const container : HTMLElement | any = document.getElementById("app"); //container: Se obtiene el elemento del DOM con el ID 'app' donde se mostrarán los Pokémon. 
const pokemons : number = 100; //

interface IPokemon {
    id : number;
    name : string;
    image : string;
    type : string;
}

const fetchData = (): void => {
    for (let i = 1; i <= pokemons; i++){
        getPokemon(i);
    }
}

//hacemos el llamado de la api por medio de un fetch
const getPokemon = async (id: number): Promise<void> => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await data.json();
    const pokemonType : string = pokemon.types.map((poke: any) => poke.type.name).join(', ');

    const transformedPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        image: `${pokemon.sprites.front_default}`,
        type: pokemonType
    };

    showPokemon(transformedPokemon);

};

//mostramos los datos en el html
const showPokemon = (pokemon: IPokemon): void => {
    let output : string = `
    <div class="card">
        <span class="card--id">#${pokemon.id}</span>
        <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
        <h1 class="card--name">${pokemon.name}</h1>
        <span class="card--details">${pokemon.type}</span>
    </div>
    `;
    container.innerHTML += output;
};

fetchData();



