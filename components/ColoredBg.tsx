"use client";

import { useEffect, useState } from "react";
import { getColor } from "../lib/getColor";
import { fetchOnePokemon } from "../lib/pokemon";

const ColoredDiv = ({
  id,
  children,
}: {
  id: number;
  children: React.ReactNode;
}) => {
  const [color, setColor] = useState<any>(undefined);
  const [color2, setColor2] = useState<any>(undefined);
  const [color3, setColor3] = useState<any>(undefined);

  useEffect(() => {
    const getPalette = async () => {
      const pokemon = await fetchOnePokemon(id);
      const color = await getColor(pokemon.images.front);
      const color2 = await getColor(pokemon.images.shiny);
      const color3 = pokemon.types[0].color;
      setColor(() => color);
      setColor2(() => color2);
      setColor3(() => color3);
    };
    getPalette();
  }, []);

  return (
    <div className="relative w-[220px] min-h-[370px] bg-gradient-to-br p-1 from-yellow-500 to-amber-700">
      <div
        className="card w-full h-full oveflow-hidden rounded-md"
        style={{
          background: `linear-gradient(45deg,white 3%, ${color} 35% , ${color2} 70% ,white  ,${color3})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ColoredDiv;
