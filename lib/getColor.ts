"use client";

import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";

export const ColoredDiv = (url, children) => {
  const [color, setColor] = useState<string>("#000000");
  useEffect(() => {
    const getColor = async () => {
      const fac = new FastAverageColor();
      const color = await fac.getColorAsync(url);
      const imageColor = color.rgba;
      setColor(imageColor);
    };
    getColor();
  }, []);
  return <div style={{ backgroundColor: color }}>{children}</div>;
};
