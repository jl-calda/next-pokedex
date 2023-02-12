import Image from "next/image";
import Link from "next/link";
import crypto from "crypto";
import { fetchOnePokemon } from "../lib/pokemon";
import TypePreview from "./TypePreview";

const PokemonPreview = async ({ url }: { url: string }) => {
  const pokemon = await fetchOnePokemon(url);

  return (
    <Link
      className="flex flex-col min-w-max px-4 space-y-2 py-2 justify-center hover:scale-105 transition-all duration-300 hover:shadow-lg border-2 rounded-3xl"
      href={`/pokemon/${pokemon.id}`}
    >
      <div className="flex items-center justify-between w-full">
        <p className="text-xs uppercase tracking-tight font-bold">
          {pokemon.name}
        </p>
        <div className="flex items-center justify-center bg-slate-300 rounded-full h-[30px] w-[30px]">
          <p className=" font-bold text-sm">{pokemon.id}</p>
        </div>
      </div>
      <Image
        src={pokemon.images.front}
        height={120}
        width={120}
        alt={pokemon.name}
      />
      <div className="flex justify-start space-x-2">
        {pokemon &&
          pokemon.types.map((type) => (
            <TypePreview
              key={crypto.randomUUID()}
              type={type.type}
              color={type.color}
              icon={type.icon}
            />
          ))}
      </div>
      <div className="flex flex-col">
        <p className="text-xs font-bold text-slate-700">{`Height : ${pokemon.height} m`}</p>
        <p className="text-xs font-bold text-slate-700">{`Weight : ${pokemon.weight} kg`}</p>
      </div>
    </Link>
  );
};

export default PokemonPreview;
