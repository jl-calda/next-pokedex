import crypto from "crypto";
import Link from "next/link";

import Card from "../../../components/Card/Card";
import pokemonData from "../../../data/pokemon.json";
import { Pokemon } from "../../../typings/pokemon";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

type PageProps = { params: { page: number } };

const PokemonsPage = async ({ params: { page } }: PageProps) => {
  const start = 12 * (page - 1);
  const end = start + 12;
  const filteredPokemons =
    page == 84
      ? pokemonData.pokemons.slice(12 * (page - 1))
      : pokemonData.pokemons.slice(12 * (page - 1), end);

  const getPageDown = (page: number) => {
    if (page == 1) {
      return 84;
    } else {
      return Number(page) - 1;
    }
  };
  const getPageUp = (page: number) => {
    if (page == 84) {
      return 1;
    } else {
      return Number(page) + 1;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Link href={`/browse/${getPageDown(page)}`}>
        <div className="text-3xl font-bold px-3 py-2">
          <GiPreviousButton className=" hover:text-slate-600 hover:scale-105 transition-all duration-500" />
        </div>
      </Link>

      <div className="grid relative gap-x-2 gap-y-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPokemons.map((pokemon) => (
          <Card key={crypto.randomUUID()} pokemon={pokemon} />
        ))}
      </div>
      <Link href={`/browse/${getPageUp(page)}`}>
        <div className="text-3xl font-bold px-3 py-2">
          <GiNextButton className=" hover:text-slate-600 hover:scale-105 transition-all duration-500" />
        </div>
      </Link>
    </div>
  );
};

export default PokemonsPage;
