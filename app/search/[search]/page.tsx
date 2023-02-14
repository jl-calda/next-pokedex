"use client";

import { fetchPokemonData } from "../../../lib/pokemon";
import crypto from "crypto";
import useSWR from "swr";
import PokemonPreview from "../../../components/PokemonPreview";

const SearchPage = ({ params: { search } }: { params: { search: string } }) => {
  const { data, error, isLoading } = useSWR(fetchPokemonData);

  return (
    <>
      {!isLoading ? console.log(data) : <div>Loading...</div>}
      {/* {!isLoading ? (
        data
          .filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
          .map((pokemon) => (
            // @ts-expect-error
            <PokemonPreview id={pokemon.id} key={crypto.randomUUID()} />
          ))
      ) : (
        <div>No search</div>
      )} */}
    </>
  );
};

export default SearchPage;
