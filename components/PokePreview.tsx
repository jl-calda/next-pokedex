import Image from "next/image";
import Link from "next/link";
import { PokemonData } from "../lib/pokemon";

const PokePreview = ({ pokemon }: PokemonData) => {
  return (
    <Link
      className="flex flex-col items-center justify-center"
      href={`/${pokemon.id}`}
    >
      <div className="border-2 rounded-2xl h-[250px] p-2">
        <div className="flex items-center justify-between">
          <p className="uppercase tracking-tight font-bold">{pokemon.name}</p>
          <div className="flex items-center justify-center bg-slate-300 rounded-full h-[30px] w-[30px]">
            <p className=" font-bold text-sm">{pokemon.id}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={pokemon.sprites.official_artwork}
            height={150}
            width={150}
            alt={pokemon.name}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-bold text-slate-700">{`Height : ${pokemon.height} m`}</p>
          <p className="text-xs font-bold text-slate-700">{`Weight : ${pokemon.weight} kg`}</p>
        </div>
      </div>
    </Link>
  );
};

export default PokePreview;
