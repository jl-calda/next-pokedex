import { fetchPokemonData } from "../lib/pokemon";

const Homepage = async () => {
  const pokemons = await fetchPokemonData();
  return <div>Homepage</div>;
};

export default Homepage;
