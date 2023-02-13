"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import Image from "next/image";
import tinycolor from "tinycolor2";
import { prominent } from "color.js";

interface PageProps {
  front: string;
  shiny: string;
  name: string;
}

const PokemonImage = ({ front, shiny, name }: PageProps) => {
  const [src, setSrc] = useState(front);
  const [isActive, setActive] = useState(false);
  const [vibrantColor, setVibrantColor] = useState<any>(undefined);
  const [vibrantColor2, setVibrantColor2] = useState<any>(undefined);
  const [deboucedVal, setDebouncedVal] = useState<boolean>(false);

  useEffect(() => {
    const getPalette = async () => {
      const promColor = await prominent(front, {
        amount: 3,
        group: 30,
        format: "hex",
      });
      const promColor2 = await prominent(shiny, {
        amount: 5,
        group: 50,
        format: "hex",
      });

      let bgColor: any = tinycolor(promColor[1]).isLight()
        ? promColor[2]
        : promColor[1];
      let bgColor2: any = tinycolor(promColor2[1]).isDark()
        ? promColor2[2]
        : promColor2[1];

      setVibrantColor(bgColor);
      setVibrantColor2(bgColor2);
    };
    getPalette();
  }, []);

  useDebounce(
    () => {
      setDebouncedVal(isActive);
    },
    1500,
    [isActive]
  );

  const handleMouseEnter = () => {
    setSrc(shiny);
    setActive(!isActive);
  };

  const handleMouseLeave = () => {
    setDebouncedVal(!isActive);
    setActive(!isActive);
    setSrc(front);
  };

  return (
    <div
      className="bg-gradient-tr from-amber-300 to-yellow-700 m-1 rounded-md shadow-md"
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
