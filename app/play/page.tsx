"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetchOnePokemon } from "../../lib/pokemon";
import crypto from "crypto";

const Play = () => {
  const [id, setId] = useState(undefined);

  useEffect(() => {
    const getRandomId = async () => {
      const randomId = Math.floor(Math.random() * 898) + 1;
      const pokemon = await fetchOnePokemon(randomId);
      setId((prev) => pokemon.id);
    };
    getRandomId();
  }, []);

  const handleCheckAnswer = (e: any) => {};
  const handleNewGame = (e: any) => {};

  return (
    <div>
      <h1>Who's that pokemon</h1>
      <div>Image Here</div>
      <div className="grid-cols-2">
        {["A", "B", "C", "D"].map((letter) => (
          <div>{`${letter}. ${id}`}</div>
        ))}
      </div>
    </div>
  );
};

export default Play;
