import PokePreview from "../../../components/PokePreview";
import PokePreview2 from "../../../components/PokePreview";
import { getPokemonList } from "../../../lib/pokemon";
import crypto from "crypto";
import Link from "next/link";

const PokemonsPage = async ({ params: { page } }: any) => {
  const pokemonsData = getPokemonList(page);
  const pokemons = await pokemonsData;
  const getPageDown = (page: number) => {
    if (page == 1) {
      return 40;
    } else {
      return Number(page) - 1;
    }
  };
  const getPageUp = (page: number) => {
    if (page == 40) {
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
      <div className="grid gap-x-2 gap-y-2 grid-cols-4">
        {pokemons &&
          pokemons.map((pokemon) => (
            <div>
              <PokePreview key={crypto.randomUUID()} pokemon={pokemon} />
            </div>
          ))}
      </div>
      <Link href={`/page/${getPageUp(page)}`}>
        <div className="text-3xl font-bold px-3 py-2">{`>`}</div>
      </Link>
    </div>
  );
};

export default PokemonsPage;
