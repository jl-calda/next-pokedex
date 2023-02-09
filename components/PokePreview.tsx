import Image from "next/image";
import Link from "next/link";
import { PokemonData } from "../lib/pokemon";

const PokePreview = ({ pokemon }: PokemonData) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={`/${pokemon.id}`}>
        <div className="border-2 rounded-2xl h-[250px]">
          <div className="flex flex-col items-center">
            <Image
              src={pokemon.sprites.official_artwork}
              height={150}
              width={150}
              alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
          </div>
          <p>{pokemon.height}</p>
          <p>{pokemon.weight}</p>
        </div>
      </Link>
    </div>
  );
};

export default PokePreview;
