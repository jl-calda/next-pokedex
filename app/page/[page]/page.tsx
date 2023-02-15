import { makeArray } from "../../../lib/pokemon";
import crypto from "crypto";
import Link from "next/link";
import Card from "../../../components/Card";
import ColoredDiv from "../../../components/ColoredBg";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";

const PokemonsPage = async ({
  params: { page },
}: {
  params: { page: number };
}) => {
  const start = (page - 1) * 24;
  const end = start + 24;
  console.log(start, end);

  const folder = "data";
  const fileData = await fsPromises.readFile(`${folder}/pokemon.json`);
  const pokemons = JSON.parse(fileData.toString());
  console.log(pokemons.pokemons.length);
  const filteredPokemons =
    page == 42
      ? pokemons.pokemons.slice(24 * 42)
      : pokemons.pokemons.slice(start, end);

  const getPageDown = (page: number) => {
    if (page == 1) {
      return 42;
    } else {
      return Number(page) - 1;
    }
  };
  const getPageUp = (page: number) => {
    if (page == 42) {
      return 1;
    } else {
      return Number(page) + 1;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Link href={`/page/${getPageDown(page)}`}>
        <div className="text-3xl font-bold px-3 py-2">{`<`}</div>
      </Link>

      <div className="grid relative gap-x-2 gap-y-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPokemons.map((pokemon) => (
          // @ts-expect-error
          <Card key={crypto.randomUUID()} pokemon={pokemon} />
        ))}
      </div>
      <Link href={`/page/${getPageUp(page)}`}>
        <div className="text-3xl font-bold px-3 py-2">{`>`}</div>
      </Link>
    </div>
  );
};

export default PokemonsPage;
