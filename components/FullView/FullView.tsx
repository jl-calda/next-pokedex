import Image from "next/image";
import { fetchOnePokemon } from "../../lib/pokemon";
import crypto from "crypto";

import Stat from "../Stat";
import Type from "../Type";

import PokemonImage from "../PokemonImage";

const FullView = async ({ id }: { id: number }) => {
  const pokemon = await fetchOnePokemon(id);

  return (
    <div className="w-full px-8 grid md:grid-cols-2">
      <PokemonImage
        front={pokemon.images.front}
        shiny={pokemon.images.shiny}
        name={pokemon.name}
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

export default FullView;
