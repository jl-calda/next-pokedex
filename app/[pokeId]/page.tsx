import { getPokemonData } from "../../lib/pokemon";

const PokePage = async (props: any) => {
  const pokemonData = await getPokemonData(props.params.pokeId);

  return <div>{pokemon.name}</div>;
};

export default PokePage;
