"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FastAverageColor } from "fast-average-color";
import { getColor } from "../lib/getColor";

interface PageProps {
  front: string;
  shiny: string;
  name: string;
}

const PokemonImage = ({ front, shiny, name }: PageProps) => {
  const [src, setSrc] = useState(front);

  const handleMouseEnter = () => {
    setSrc(shiny);
  };

  const handleMouseLeave = () => {
    setSrc(front);
  };

  return (
    <div
      className="flex items-center justify-center bg-gradient-tr from-amber-300 to-yellow-700 m-1 rounded-md"
      style={{}}
    >
      <Image
        src={src}
        className={` border-slate-700 cursor-pointer hover:-scale-x-100 hover:scale-120 transition-all duration-500`}
        height={120}
        width={120}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alt={name}
      />
    </div>
  );
};

export default PokemonImage;
