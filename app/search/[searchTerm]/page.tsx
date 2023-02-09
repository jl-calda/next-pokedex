import { getPokemonList } from "../../../lib/pokemon";
import crypto from "crypto";

const SearchPage = async ({ params: { searchTerm } }: any) => {
  const pokemonsData = getPokemonList(1000);
  const pokemons = await pokemonsData;
  const filteredPokemons = pokemons.filter((obj) =>
    JSON.stringify(obj).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-5">
        {filteredPokemons &&
          filteredPokemons.map((pokemon) => (
            <div>
              <PokePreview key={crypto.randomUUID()} pokemon={pokemon} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
