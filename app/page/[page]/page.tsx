import PokemonPreview from "../../../components/PokemonPreview";
import { makeArray } from "../../../lib/pokemon";
import crypto from "crypto";
import Link from "next/link";

const PokemonsPage = async ({ params: { page } }: any) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const array = makeArray(page, 24);
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
      <div className="grid gap-x-2 gap-y-2  grid-cols-2 md:grid-cols-4">
        {array.map((id) => (
          <div>
            {/* @ts-expect-error */}
            <PokemonPreview key={crypto.randomUUID()} url={`${url}${id}`} />
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
