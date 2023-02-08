"use client";

import { getPokemonData } from "../../lib/pokemon";
import useSWR from "swr";

const PokePage = (props: any) => {
  const { data, error, isLoading } = useSWR(
    props.params.pokeId,
    getPokemonData
  );
  return <div>{data && data.name}</div>;
};

export default PokePage;
