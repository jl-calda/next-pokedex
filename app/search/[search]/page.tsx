import { fetchPokemonData } from "../../../lib/pokemon";
import crypto from "crypto";
import PokemonPreview from "../../../components/PokemonPreview";

const SearchPage = async ({
  params: { search },
}: {
  params: { search: string };
}) => {
  const pokemonData = await fetchPokemonData();
  const filteredData = await Promise.all(
    pokemonData.pokemons.filter((pokemon: { name: string; url: string }) =>
      pokemon.name.includes(search.toLowerCase())
    )
  );
  return (
    <>
      {filteredData ? (
        filteredData.map((pokemon) => (
          // @ts-expect-error

          <PokemonPreview
            id={Number(pokemon.url.charAt(34))}
            key={crypto.randomUUID()}
          />
        ))
      ) : (
        <div>No search</div>
      )}
    </>
  );
};

export default SearchPage;
