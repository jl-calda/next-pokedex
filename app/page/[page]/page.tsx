import PokePreview from "../../../components/PokePreview";
import PokePreview2 from "../../../components/PokePreview";
import { getPokemonList } from "../../../lib/pokemon";

const PokemonsPage = async ({ params: { page } }: any) => {
  const pokemonsData = getPokemonList(page);
  const pokemons = await pokemonsData;
  return (
    <div className="grid grid-cols-4">
      {pokemons && pokemons.map((pokemon) => <PokePreview pokemon={pokemon} />)}
    </div>
  );
};

export default PokemonsPage;
