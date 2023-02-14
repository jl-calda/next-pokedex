"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FastAverageColor } from "fast-average-color";

interface PageProps {
  front: string;
  shiny: string;
  name: string;
}

const PokemonImage = ({ front, shiny, name }: PageProps) => {
  const [src, setSrc] = useState(front);
  const [vibrantColor, setVibrantColor] = useState<any>(undefined);
  const [vibrantColor2, setVibrantColor2] = useState<any>(undefined);

  useEffect(() => {
    const getPalette = async () => {
      const fac = new FastAverageColor();
      const colorPromiseFront = await fac.getColorAsync(front, {
        mode: "precision",
        ignoredColor: [255, 255, 255],
        algorithm: "dominant",
      });
      const colorFront = colorPromiseFront.rgba;

      const colorPromiseShiny = await fac.getColorAsync(shiny, {
        mode: "precision",
        ignoredColor: [0, 0, 0],
        algorithm: "dominant",
      });
      const colorShiny = colorPromiseShiny.rgba;

      setVibrantColor(colorFront);
      setVibrantColor2(colorShiny);
    };
    getPalette();
  }, []);

  const handleMouseEnter = () => {
    setSrc(shiny);
  };

  const handleMouseLeave = () => {
    setSrc(front);
  };

  return (
    <div
      className="flex items-center justify-center bg-gradient-tr from-amber-300 to-yellow-700 m-1 rounded-md shadow-md"
      style={{
        background: `linear-gradient(45deg, ${vibrantColor}, ${vibrantColor2})`,
      }}
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
