import Image from "next/image";
import Link from "next/link";
import { getPokemonData } from "../lib/pokemon";

const PokePreview = async ({ pokeId }: { pokeId: number }) => {
  const pokemonData = getPokemonData(pokeId);
  const pokemon = await pokemonData;
  return (
    <Link href={`/${pokeId}`}>
      <div className="border-2 rounded-2xl ">
        <div className="flex">
          <Image
            src={pokemon.sprites.shiny}
            height={80}
            width={80}
            alt={pokemon.name}
          />
          <h3>{pokemon.name}</h3>
        </div>
        <p>{pokemon.height}</p>
        <p>{pokemon.weight}</p>
      </div>
    </Link>
  );
};

export default PokePreview;
