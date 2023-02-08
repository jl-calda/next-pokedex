import Image from "next/image";
import Link from "next/link";
import { getPokemonData, PokemonData } from "../lib/pokemon";

const PokePreview2 = ({ pokemon }: PokemonData) => {
  return (
    <Link href={`/${pokemon.id}`}>
      <div className="border-2 rounded-2xl h-[300px]">
        <div className="flex">
          <Image
            src={pokemon.sprites.official_artwork}
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

export default PokePreview2;
