type Types =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

import bugIcon from "../public/assets/icon-types/bug.svg";
import darkIcon from "../public/assets/icon-types/dark.svg";
import fireIcon from "../public/assets/icon-types/fire.svg";
import dragonIcon from "../public/assets/icon-types/dragon.svg";
import electricIcon from "../public/assets/icon-types/electric.svg";
import fairyIcon from "../public/assets/icon-types/fairy.svg";
import fightingIcon from "../public/assets/icon-types/fighting.svg";
import flyingIcon from "../public/assets/icon-types/flying.svg";
import ghostIcon from "../public/assets/icon-types/ghost.svg";
import grassIcon from "../public/assets/icon-types/grass.svg";
import groundIcon from "../public/assets/icon-types/ground.svg";
import iceIcon from "../public/assets/icon-types/ice.svg";
import normalIcon from "../public/assets/icon-types/normal.svg";
import poisonIcon from "../public/assets/icon-types/poison.svg";
import psychicIcon from "../public/assets/icon-types/psychic.svg";
import rockIcon from "../public/assets/icon-types/rock.svg";
import steelIcon from "../public/assets/icon-types/steel.svg";
import waterIcon from "../public/assets/icon-types/water.svg";

// export const typeIcons = {
//   normal: normalIcon,
//   fire: fireIcon,
//   water: waterIcon,
//   electric: electricIcon,
//   grass: grassIcon,
//   ice: iceIcon,
//   fighting: fightingIcon,
//   poison: poisonIcon,
//   ground: groundIcon,
//   flying: flyingIcon,
//   psychic: psychicIcon,
//   bug: bugIcon,
//   rock: rockIcon,
//   ghost: ghostIcon,
//   dragon: dragonIcon,
//   dark: darkIcon,
//   steel: steelIcon,
//   fairy: fairyIcon,
// };

export const typeIcons = {
  normal: "/assets/icon-types/bug.svg",
  fire: "/assets/icon-types/fire.svg",
  water: "/assets/icon-types/water.svg",
  electric: "/assets/icon-types/electric.svg",
  grass: "/assets/icon-types/grass.svg",
  ice: "/assets/icon-types/ice.svg",
  fighting: "/assets/icon-types/fighting.svg",
  poison: "/assets/icon-types/poison.svg",
  ground: "/assets/icon-types/ground.svg",
  flying: "/assets/icon-types/flying.svg",
  psychic: "/assets/icon-types/psychic.svg",
  bug: "/assets/icon-types/bug.svg",
  rock: "/assets/icon-types/rock.svg",
  ghost: "/assets/icon-types/ghost.svg",
  dragon: "/assets/icon-types/dragon.svg",
  dark: "/assets/icon-types/dark.svg",
  steel: "/assets/icon-types/steel.svg",
  fairy: "/assets/icon-types/fairy.svg",
};

export const colours: Colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

type Colours = {
  normal: string;
  fire: string;
  water: string;
  electric: string;
  grass: string;
  ice: string;
  fighting: string;
  poison: string;
  ground: string;
  flying: string;
  psychic: string;
  bug: string;
  rock: string;
  ghost: string;
  dragon: string;
  dark: string;
  steel: string;
  fairy: string;
};

export const fetchPokemonData = async () => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0`
  );
  const data = await res.json();
  return {
    totalPokemons: data.count,
    pokemons: data.results,
  };
};

export const fetchOnePokemon = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  // const types = await Promise.all(
  //   data.types.map((type: any) => type.type.name)
  // );
  const types = await Promise.all(
    data.types.map((type: any) => {
      const pokemonType: Types = type.type.name;
      const pokemonColor = colours[pokemonType];
      const typeIcon = typeIcons[pokemonType];
      return {
        type: pokemonType,
        color: pokemonColor,
        icon: typeIcon,
      };
    })
  );

  const stats = await Promise.all(
    data.stats.map((stat: any) => {
      const name = stat.stat.name;
      const value = stat.base_stat;
      return {
        name: name,
        value: value,
      };
    })
  );

  const officialArtWork = await data.sprites.other["official-artwork"]
    .front_default;

  const officialArtWorkShiny = await data.sprites.other["official-artwork"]
    .front_shiny;

  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: types,
    url: url,
    stats: stats,
    images: {
      front: officialArtWork,
      shiny: officialArtWorkShiny,
    },
  };
};

export const fetchPokemonList = async (page: number) => {
  const pokeList = [...Array(25).keys()].map((i) => i + (page - 1) * 25 + 1);
  console.log(pokeList);
  const pokemons = pokeList.map(
    async (pokeId) =>
      await fetchOnePokemon(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
  );
  const data = await Promise.all(pokemons);
  return data;
};

export const makeArray = (key: number, multiple: number) => {
  const array = [...Array(multiple).keys()].map(
    (i) => i + (key - 1) * multiple + 1
  );
  return array;
};
