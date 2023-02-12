import Image from "next/image";
import { fetchOnePokemon } from "../lib/pokemon";
import crypto from "crypto";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Stat from "./Stat";
import Type from "./Type";

const PokemonFull = async ({ url }: { url: string }) => {
  const pokemon = await fetchOnePokemon(url);

  return (
    <div className="w-full px-8 grid md:grid-cols-2">
      <Image
        src={pokemon.images.front}
        height={250}
        width={250}
        alt={pokemon.name}
      />
      <div className="flex flex-col space-y-2 px-4 py-2 justify-center">
        <h1 className="font-press-p2 text-3xl uppercase font-bold">
          {pokemon.name}
        </h1>
        <div className="flex space-x-2">
          {pokemon.types &&
            pokemon.types.map((type) => (
              <Type
                key={crypto.randomUUID()}
                type={type.type}
                color={type.color}
                icon={type.icon}
              />
            ))}
        </div>
        <p>{`Weight : ${pokemon.weight / 10} kg`}</p>
        <p>{`Height : ${pokemon.height / 10} m`}</p>
      </div>
      <div className="flex flex-col space-y-2 md:col-span-2 px-2 md:px-6">
        {pokemon.stats &&
          pokemon.stats.map((stat) => (
            <Stat
              name={stat.name}
              value={stat.value}
              key={crypto.randomUUID()}
            />
          ))}
      </div>
    </div>
  );
};

export default PokemonFull;
