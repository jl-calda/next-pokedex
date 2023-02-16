"use client";

import React, { useEffect, useState } from "react";

import { fetchOnePokemon, makeArray } from "../../lib/pokemon";

const page = () => {
  const array = makeArray(1, 1008);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemons = array.map(async (id) => await fetchOnePokemon(id));
      const resolvedPokemons = await Promise.all(pokemons);
      // const newList = resolvedPokemons?.map(async (pokemon) => {
      //   const colorFront = await getColor(pokemon.images.front);
      //   const colorShiny = await getColor(pokemon.images.shiny);
      //   return { ...pokemon, front: colorFront, shiny: colorShiny };
      // });
      // const resolvedList = await Promise.all(newList);
      setPokemons(resolvedPokemons);
    };
    getPokemons();
  }, []);

  const handleSendData = async () => {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...pokemons]),
    });

    const data = await response.json();
    return data;
  };
  return (
    <>
      {/* <button onClick={handleGetColor}>Send Data</button> */}
      <button onClick={handleSendData}>getColor</button>
      <div>
        {console.log(array)}
        {JSON.stringify([...pokemons])}
      </div>
    </>
  );
};

export default page;
