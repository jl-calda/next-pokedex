import Image from "next/image";
import React from "react";
import { Ability, Pokemon } from "../../typings/pokemon";
import Stat from "./Stat";
import Type from "./Type";
import { v4 as uuidv4 } from "uuid";

const FullView = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div
      className="saturate-200 brightness-100 contrast-90 grid grid-cols-1 sm:grid-cols-2 p-4 rounded-md border-[1px] border-slate-800 gap-x-4 gap-y-4"
      style={{
        background: `linear-gradient(40deg,${pokemon.colors.front},${
          pokemon.colors.shiny
        },${pokemon.types.map((type) => type.color).join(" ,")} )`,
      }}
    >
      <div className="flex relative flex-col space-y-4">
        <div className="card flex space-x-[-100px] md:space-x-[-120px] lg:space-x-[-140px] items-center justify-center bg-white/30 rounded-md p-4">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon.images.front}
              alt={pokemon.name}
              width={400}
              height={400}
              className="z-20"
            />
            <p className="italic text-white text-sm">Default</p>
          </div>
          {pokemon.images.shiny && (
            <div className="flex flex-col justify-center items-center">
              <Image
                src={pokemon.images.shiny}
                alt={pokemon.name}
                width={400}
                height={400}
                className="z-1"
              />
              <p className="italic text-white text-sm">Shiny</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-2 p-2">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl md:text-6xl text-slate-800 underline-offset-4 underline tracking-wider">
            {pokemon.name}
          </h1>
          <div className="flex space-x-[-10px] md:space-x-[-8px] item-center justify-start">
            {pokemon.types.map((type) => (
              <Type key={uuidv4()} type={type} />
            ))}
          </div>
        </div>
        <div className="flex space-x-2 items-center justify-start">
          <h2 className="text-6xl md:text-9xl font-extrabold text-slate-900">
            {pokemon.id}
          </h2>
          <p className="text-sm md:text-md px-4 md:px-8 italic py-2 bg-white/30 rounded-md text-slate-800">
            {pokemon.texts}
          </p>
        </div>
        <p className="text-slate-700 text-sm md:text-lg flex justify-end items-center">{`Ht: ${pokemon.height} m | Wt: ${pokemon.weight} kg`}</p>
        <div className="flex space-x-4 items-center justify-start flex-wrap space-y-2">
          {pokemon.abilities.map((ability: Ability) => (
            <div
              key={uuidv4()}
              className="flex space-x-2 space-y-2 px-2 md:px-4 md:text-sm font-bold text-xs uppercase py-2 bg-black/60 text-white rounded-full"
            >
              <span>{ability.name}</span>
              <span>{ability.isHidden ? "(hidden)" : ""}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-6 px-4 bg-white/30 rounded-md items-center justify-center py-4">
        <p className="w-full uppercase text-center text-2xl  md:text-3xl font-bold tracking-widest">
          Base Stats
        </p>
        <div className="w-full flex flex-col space-y-4">
          {pokemon.stats.map((stat) => (
            <Stat key={uuidv4()} stat={stat} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 place-items-center">
        {pokemon.sprites.slice(0, 4).map((sprite) => (
          <>
            <Image
              src={sprite}
              alt={pokemon.name}
              width={160}
              height={160}
              className="hover:scale-110 cursor-pointer"
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default FullView;
