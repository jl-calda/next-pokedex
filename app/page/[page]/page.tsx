import PokePreview from "../../../components/PokePreview";
import { getPokemonList } from "../../../lib/pokemon";

const makeArray = (key: number, multiple: number) => {
  const array = [...Array(multiple).keys()].map(
    (i) => i + (key - 1) * multiple + 1
  );
  return array;
};

const PokemonsPage = async ({ params: page }: any) => {
  const pokeList = makeArray(page, 20);

  //   const pokemons = await getPokemonList(page)
  return (
    <>{pokeList && pokeList.map((pokeId) => <PokePreview id={pokeId} />)}</>
  );
};

export default PokemonsPage;
