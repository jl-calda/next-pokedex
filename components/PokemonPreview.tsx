import Image from "next/image";
import Link from "next/link";
import crypto from "crypto";
import { fetchOnePokemon } from "../lib/pokemon";
import TypePreview from "./TypePreview";
import PokemonImage from "./PokemonImage";
import StatPreview from "./StatPreview";

const PokemonPreview = async ({ url }: { url: string }) => {
  const pokemon = await fetchOnePokemon(url);

  return (
    <div className="bg-black">
      <Link
        className="flex flex-col min-w-max px-2 space-y-2 py-2 justify-center hover:shadow-lg border-slate-700 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-700"
        href={`/pokemon/${pokemon.id}`}
      >
        <div className="border-2 border-slate-800 p-[1px] rounded-md bg-white">
          <div className="flex items-center justify-between w-full px-2 pt-1">
            <p className="text-xs tracking-tight font-bold">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </p>
            <div className="flex justify-start space-x-[-8px]">
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
          </div>
          <PokemonImage
            front={pokemon.images.front}
            shiny={pokemon.images.shiny}
            name={pokemon.name}
          />

          <p className="ml-1 text-[8px] tracking-tighter font-bold text-slate-500">{`Ht : ${pokemon.height} m | Wt : ${pokemon.weight} kg`}</p>
          {pokemon.stats.slice(0, 3).map((stat) => (
            <StatPreview
              name={stat.name}
              value={stat.value}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default PokemonPreview;
