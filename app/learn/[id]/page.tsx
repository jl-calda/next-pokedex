import Image from "next/image";
import FullView from "../../../components/FullView/FullView";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

import pokemonData from "../../../data/pokemon.json";
import Link from "next/link";

const PokePage = ({ params: { id } }: { params: { id: number } }) => {
  const pokemon = pokemonData.pokemons[id - 1];

  const getPageDown = (id: number) => {
    if (id == 1) {
      return 1008;
    } else {
      return Number(id) - 1;
    }
  };
  const getPageUp = (id: number) => {
    if (id == 1008) {
      return 1;
    } else {
      return Number(id) + 1;
    }
  };

  return (
    <div className="flex items-center justify-center space-x-6">
      <Link href={`/learn/${getPageDown(id)}`}>
        <GiPreviousButton className="text-3xl text-slate-800 hover:text-slate-600 hover:scale-105 transition-all duration-500" />
      </Link>
      <div className="relative">
        <FullView pokemon={pokemon} />
      </div>
      <Link href={`/learn/${getPageUp(id)}`}>
        <GiNextButton className="text-3xl text-slate-800 hover:text-slate-600 hover:scale-105 transition-all duration-500" />
      </Link>
    </div>
  );
};

export default PokePage;
