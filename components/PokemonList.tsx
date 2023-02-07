import PokePreview from "./PokePreview";
import crypto from "crypto";
import Link from "next/link";
import { getPokemonData, getPokemonList } from "../lib/pokemon";
import PokePreview2 from "./PokePreview_2";

import { use } from "react";

const PokemonList = async () => {
  const pokemonToShow = 3;
  const pokemons = use(getPokemonList(pokemonToShow));
  return (
    <div className="grid grid-cols-3 cursor-pointer">
      <>
        {[...Array(pokemonToShow).keys()]
          .map((i) => i + 1)
          .map((pokeId) => (
            <>
              {/* @ts-expect-error Server Component */}
              <PokePreview key={crypto.randomUUID()} pokeId={pokeId} />
            </>
          ))}
      </>
      {pokemons?.map((pokemon) => (
        <PokePreview2 pokemon={pokemon} key={crypto.randomUUID()} />
      ))}
    </div>
  );
};

export default PokemonList;
