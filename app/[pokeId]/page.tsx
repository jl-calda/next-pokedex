import { getPokemonData } from "../../lib/pokemon";

const PokePage = async (props: any) => {
  const pokemon = await getPokemonData(props.params.pokeId);
  return <div>{pokemon.name}</div>;
};

export default PokePage;
