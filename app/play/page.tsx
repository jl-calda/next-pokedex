"use client";

//import sound
import { useEffect, useState, useMemo } from "react";
import pokemonData from "../../data/pokemon.json";
import uniqueRandom from "unique-random";
import Image from "next/image";
import { Pokemon } from "../../typings/pokemon";
import { getColor } from "../../lib/getColor";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const Play = (): JSX.Element => {
  const [answer, setAnswer] = useState<Pokemon | null>(null);
  const [choices, setChoices] = useState<Pokemon[] | undefined>(undefined);

  const handleNewGame = () => {
    setTimeout(() => {
      newGame();
    }, 1500);
  };

  const newGame = () => {
    const random = uniqueRandom(0, pokemonData.pokemons.length - 1);
    const randomChoices = [random(), random(), random(), random()];
    const answerRandom = uniqueRandom(0, randomChoices.length - 1);

    const answerIndex = randomChoices[answerRandom()];

    setChoices(randomChoices.map((choice) => pokemonData.pokemons[choice]));
    console.log(choices);
    setAnswer(() => pokemonData.pokemons[answerIndex]);
    document
      .getElementById("pokemon-image")
      ?.classList.remove("brightness-100");
    document.getElementById("pokemon-image")?.classList.add("brightness-0");
    document.getElementById("answer")?.classList.remove("flex");
    document.getElementById("answer")?.classList.add("hidden");
  };
  //   const beat = new Audio("/assets/sounds.mp3");
  useEffect(() => {
    newGame();
  }, []);

  const handleCheckAnswer = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const value = target.innerText.toLowerCase();
    // beat.play();
    if (value !== null && value === answer?.name.toLowerCase()) {
      console.log(e);
      target.classList.remove("bg-black/30");
      target.classList.add("bg-green-400");
      document.getElementById("pokemon-image")?.classList.add("ease-in");
      document.getElementById("pokemon-image")?.classList.add("brightness-100");
      document
        .getElementById("pokemon-image")
        ?.classList.remove("brightness-0");
      document.getElementById("answer")?.classList.add("flex");
      document.getElementById("answer")?.classList.remove("hidden");
      //   showImage();
    } else {
      target.classList.remove("bg-black/30");
      target.classList.add("bg-red-400");
    }
  };

  return (
    <div
      className="shadow-lg saturate-200 flex-1 flex flex-col space-y-2 p-4 rounded-md border-slate-800 border-[1px]"
      style={{
        background: `linear-gradient(45deg ,${answer?.colors.front} ,${answer?.types[0].color} , ${answer?.colors.shiny} , ${answer?.types[0].color})`,
      }}
    >
      {/* row 1 */}

      <h1 className="py-2 rounded-md text-xl shadow-xl bg-black/30 flex items-center justify-center text-white font-bold tracking-wider">
        Who's that pokemon?
      </h1>
      {/* row 1 */}
      <div className="w-[300px] flex-1 bg-white/30 rounded-md relative sm:w-[400px] md:w-[450px] lg:w-[500px] p-4">
        {answer ? (
          <Image
            src={answer.images.front}
            alt={answer.name}
            id="pokemon-image"
            fill
            className={`brightness-0 contrast-100 absolute saturate-150 cover shadow-lg`}
          />
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
      {/* row 2 */}

      <div className="flex items-center justify-center h-[50px]">
        <div
          id="answer"
          className={`hidden text-2xl bg-white/30 flex-1 items-center justify-center rounded-md py-2`}
        >
          <span>{`Its... `}</span>
          <Link href={`/learn/${answer?.id}`}>
            <span className="font-bold hover:text-slate-700">
              {` ${answer?.name}!!!`}
            </span>
          </Link>
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-[1px] gap-y-2 place-content-center">
          {choices &&
            choices.map((choice) => (
              <li
                key={uuidv4()}
                className={`hover:scale-95  transition text-xs md:text-sm duration-500 ease-in-out rounded-full py-1 sm:py-2 cursor-pointer uppercase flex items-center justify-center text-white font-bold bg-black/30 tracking-widest`}
                onClick={handleCheckAnswer}
              >
                {choice.name}
              </li>
            ))}
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="py-4 rounded-full shadow-xl flex-1 bg-black/40 text-white font-bold tracking-wider hover:bg-white/50 hover:text-slate-800 transition-all"
          onClick={handleNewGame}
        >{`Play again?`}</button>
      </div>
    </div>
  );
};

export default Play;
