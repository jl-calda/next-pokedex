import { getColor } from "./getColor";

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
  const array = makeArray(1, 1008);
  const pokemons = array.map(async (pokeId) => await fetchOnePokemon(pokeId));
  const data = await Promise.all(pokemons);
  return data;
};

export const fetchOnePokemon = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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

  const abilities = await Promise.all(
    data.abilities.map((ability: any) => {
      const name = ability.ability.name;
      const isHidden = ability.is_hidden;
      return {
        name: name,
        isHidden: isHidden,
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

  const textRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const textData = await textRes.json();

  const texts = await Promise.all(
    textData["flavor_text_entries"]
      .filter((text: any) => text.language.name === "en")
      .slice(0, 1)
      .map((text: any) => text.flavor_text)
  );

  const sprites = await Promise.all(
    [
      data.sprites.front_default,
      data.sprites.front_shiny,
      data.sprites.back_default,
      data.sprites.back_shiny,
      data.sprites.back_female,
      data.sprites.back_shiny_female,
      data.sprites.front_female,
      data.sprites.front_shiny_female,
    ].filter((sprite) => sprite)
  );

  const officialArtWork = await data.sprites.other["official-artwork"]
    .front_default;

  const colorOfficial = await getColor(officialArtWork);

  const officialArtWorkShiny = await data.sprites.other["official-artwork"]
    .front_shiny;
  const colorShiny = await getColor(officialArtWorkShiny);

  return {
    id: data.id,
    name: data.name,
    abilities: abilities,
    height: data.height / 10,
    weight: data.weight / 10,
    types: types,
    stats: stats,
    sprites: sprites,
    texts: texts[0]
      ? texts[0]?.replace(/(\n)/gm, " ").replace(/(\f)/gm, " ")
      : "This pokemon is so rare that it hasn't been well documented aside from few photos.",
    images: {
      front: officialArtWork,
      shiny: officialArtWorkShiny,
    },
    colors: {
      front: colorOfficial,
      shiny: colorShiny,
    },
  };
};

export const fetchPokemonList = async (page: number) => {
  const pokeList = [...Array(25).keys()].map((i) => i + (page - 1) * 25 + 1);
  console.log(pokeList);
  const pokemons = pokeList.map(
    async (pokeId) => await fetchOnePokemon(pokeId)
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
