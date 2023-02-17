import Image from "next/image";
import Link from "next/link";
import crypto from "crypto";
import TypePreview from "./TypePreview";
import StatPreview from "./StatPreview";
import { Pokemon } from "../../typings/pokemon";
import { v4 as uuidv4 } from "uuid";

const Card = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Link
      className="relative z-100 hover:scale-95 transition-all duration-300 hover:saturate-150 hover:brightness-110 hover:contrast-110 ease-linear hover:shadow-black hover:shadow-md cursor-pointer"
      href={`/learn/${pokemon.id}`}
    >
      <div
        className="hover:scale-120 card p-2 w-[230px] h-[370px] flex flex-col space-y-1 border-2 border-slate-800 rounded-md"
        style={{
          background: `linear-gradient(45deg, ${pokemon.colors.front},${
            pokemon.colors.shiny
          } ,  ${pokemon.types.map((type) => type.color).join(", ")})`,
        }}
      >
        {/* row 1 */}
        <div className="bg-white/30 py-1 rounded-md flex items-center justify-between w-full px-2 pt-1 mb-2">
          <p className="ml-4 text-slate-800 z-50 text-md tracking-tight font-bold relative">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </p>
          <div
            className="text-transparent bg-clip-text absolute text-4xl z-1 top-1 tracking-tighter font-bold opacity-100"
            style={{
              backgroundImage: `linear-gradient(to left,${
                pokemon.colors.front
              },${pokemon.colors.shiny}, ${pokemon.types
                .map((type) => type.color)
                .join(", ")})`,
            }}
          >
            {pokemon.id}
          </div>

          {/* background-image: linear-gradient(to left, violet, indigo, green, blue, yellow, orange, red);
        -webkit-background-clip: text;${pokemon.types[0].color}
        -moz-background-clip: text;
        background-clip: text;
        color: transparent; */}
          <div className="flex justify-start space-x-[-8px]">
            {pokemon &&
              pokemon.types.map(
                (type: { type: string; color: string; icon: string }) => (
                  <TypePreview
                    key={uuidv4()}
                    type={type.type}
                    color={type.color}
                    icon={type.icon}
                  />
                )
              )}
          </div>
        </div>
        {/* row 2 */}
        <div className="bg-white/50 rounded-md flex items-center justify-center relative">
          <Image
            src={pokemon.images.front}
            height={140}
            width={140}
            className="contrast-150 saturate-150 brightness-120"
            alt={pokemon.name}
          />
        </div>

        {/* row 3 */}
        <p className="bg-white/30 px-1  py-1 rounded-md text-[8px] tracking-tighter font-bold text-slate-700">{`Ht : ${pokemon.height} m | Wt : ${pokemon.weight} kg`}</p>
        {/* row 4 */}
        <p className="ml-1py-1 rounded-md bg-white/30 px-2 italic font-bold flex-1 mt-4 text-slate-800 my-2 text-[9px] tracking-tight overflow-hidden break-words">
          {pokemon.texts}
        </p>
        {/* row 5 */}

        <div className="bg-white/30 py-1 rounded-md flex flex-col justify-end mb-2 px-2">
          <div>
            <p className="uppercase text-slate-800 text-center text-xs tracking-widest font-bold ml-2">
              Basic Stats
            </p>
            {pokemon.stats.slice(0, 3).map((stat) => (
              <StatPreview name={stat.name} value={stat.value} key={uuidv4()} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
