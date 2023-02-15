import Image from "next/image";
import Link from "next/link";
import crypto from "crypto";
import { fetchOnePokemon } from "../lib/pokemon";
import TypePreview from "./TypePreview";
import StatPreview from "./StatPreview";

const Card = async ({ id }: { id: number }) => {
  const pokemon = await fetchOnePokemon(id);

  return (
    <Link
      className="z-100 cursor-pointer bg-transparent"
      href={`/pokemon/${pokemon.id}`}
    >
      <div className="p-2 min-w-full min-h-full bg-transparent flex flex-col space-y-1 border-2 border-slate-800 rounded-md overflow-hidden">
        {/* row 1 */}
        <div className="bg-white/30 py-1 rounded-md flex items-center justify-between w-full px-2 pt-1 mb-2">
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
        <div className="bg-white/50 rounded-md flex items-center justify-center">
          <Image
            src={pokemon.images.front}
            height={120}
            width={120}
            className="contrast-150 saturate-200 brightness-90"
            alt={pokemon.name}
          />
        </div>

        {/* row 3 */}
        <p className="bg-white/30 px-1  py-1 rounded-md text-[8px] tracking-tighter font-bold text-slate-700">{`Ht : ${pokemon.height} m | Wt : ${pokemon.weight} kg`}</p>
        {/* row 4 */}
        <p className="ml-1py-1 rounded-md bg-white/30 px-2 italic font-bold flex-1 mt-4 text-slate-800 my-2 text-[11px] tracking-tight overflow-hidden break-words">
          {pokemon.texts}
        </p>
        {/* row 5 */}

        <div className="bg-white/30 py-1 rounded-md flex flex-col justify-end mb-2 px-2">
          <div>
            <p className="uppercase text-slate-800 text-center text-xs tracking-widest font-bold ml-2">
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
    </Link>
  );
};

export default Card;
