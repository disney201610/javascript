// API
// Application programming interface

// const URL = 'https://pokeapi.co/api/v2/pokemon/'; // API URL
// const POKEMON = 'bulbasaur';

// const URL_FINAL = URL + POKEMON;

// console.log(URL_FINAL);

// async function solicitarInfoPokemon() {
//    const res = await fetch(URL_FINAL);
//    const data = await res.json();
//    data.abilities.forEach((ability) => {
//       console.log(ability.ability.name);
//    });
// }

// solicitarInfoPokemon();

const input = document.querySelector('.value-pokemon');
const btn = document.querySelector('.btn-pokemon');
const url = 'https://pokeapi.co/api/v2/pokemon/';
const pokemon = document.querySelector('.pokemon-propiedades');



btn.addEventListener('click', async function solicitarInfoPokemon() {
    const url_final = url + input.value.toLowerCase();
    const res = await fetch(url_final);
    const data = await res.json();
    pokemon.innerHTML = '';
    data.abilities.forEach((ability) => {
        const pokemoninfo = document.createElement('p');
        pokemoninfo.textContent = ability.ability.name;
        pokemon.appendChild(pokemoninfo);
    });
});