import { getPokemonData } from "../../lib/pokemon";

const PokePage = async (props: any) => {
  const pokemonData = getPokemonData(props.params.pokeId);
  const pokemon = await pokemonData;

  return <div>{pokemon.name}</div>;
};

export default PokePage;
