import Image from "next/image";
import Link from "next/link";
import crypto from "crypto";
import { fetchOnePokemon } from "../lib/pokemon";
import TypePreview from "./TypePreview";
import PokemonImage from "./PokemonImage";
import StatPreview from "./StatPreview";

const Card = async ({ id }: { id: number }) => {
  const pokemon = await fetchOnePokemon(id);

  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className="w-[220px] min-h-[370px] bg-gradient-to-br from-yellow-400 to-amber-700 flex">
        <div className="p-2 min-h-full min-w-full">
          <div className="flex flex-col border-2 min-h-full border-slate-800 p-[1px] rounded-md bg-white">
            {/* row 1 */}
            <div className="flex items-center justify-between w-full px-2 pt-1 mb-2">
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
            {/* row 2 */}
            <PokemonImage
              front={pokemon.images.front}
              shiny={pokemon.images.shiny}
              name={pokemon.name}
            />
            {/* row 3 */}
            <p className="text-[8px] tracking-tighter font-bold text-slate-500">{`Ht : ${pokemon.height} m | Wt : ${pokemon.weight} kg`}</p>
            {/* row 4 */}
            <p className="px-2 italic font-bold flex-1 mt-4 text-slate-600 my-2 text-[11px] tracking-tight overflow-hidden break-words">
              {pokemon.texts}
            </p>
            {/* row 5 */}

            <div className="flex flex-col justify-end mb-2 px-2">
              <div>
                <p className="uppercase text-slate-600 text-center text-xs tracking-widest font-bold ml-2">
                  Basic Stats
                </p>
                {pokemon.stats.slice(0, 3).map((stat) => (
                  <StatPreview
                    name={stat.name}
                    value={stat.value}
                    key={crypto.randomUUID()}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
