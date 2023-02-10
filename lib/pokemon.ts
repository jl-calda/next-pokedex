import { prominent } from "color.js";
import tinycolor from "tinycolor2";

export const getOfficialArtwork = (pokeId: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`;

export const getFrontShiny = (pokeId: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokeId}.png`;

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    official_artwork: string;
    shiny: string;
  };
}

const getPokemon = async (pokeId: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
  const data = await response.json();
  return data;
};

export const getPokemonData = async (pokeId: number) => {
  const pokemonData = await getPokemon(pokeId);
  const pokemon: PokemonData = {
    id: pokemonData.id,
    name: pokemonData.name,
    height: pokemonData.height / 10,
    weight: pokemonData.weight / 10,
    sprites: {
      official_artwork: getOfficialArtwork(pokeId),
      shiny: getFrontShiny(pokeId),
    },
  };
  return pokemon;
};

export const getAllPokemons = async () => {
  const pokeList = [...Array(1000).keys()].map((i) => i + 1);
  console.log(pokeList);
  const pokemons = pokeList.map(async (pokeId) => await getPokemonData(pokeId));
  const data = await Promise.all(pokemons);
  return data;
};

export const getPokemonList = async (page) => {
  const pokeList = [...Array(25).keys()].map((i) => i + (page - 1) * 25 + 1);
  console.log(pokeList);
  const pokemons = pokeList.map(async (pokeId) => await getPokemonData(pokeId));
  const data = await Promise.all(pokemons);
  return data;
};
