"use client";

import useSWR from "swr";
import { useState } from "react";

import PokePreview2 from "./PokePreview_2";
import { getPokemonData, getPokemonList } from "../lib/pokemon";

const PokemonList = () => {
  const pokemonToShow = 20;
  // const { data, error, isLoading } = useSWR(pokemonToShow, getPokemonData);
  const { data, error, isLoading } = useSWR(pokemonToShow, getPokemonList);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <>
      <div className="grid grid-cols-3 cursor-pointer">
        {data && data.map((pokemon) => <PokePreview2 pokemon={pokemon} />)}
      </div>
    </>
  );
};

export default PokemonList;
