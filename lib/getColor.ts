import { FastAverageColor } from "fast-average-color";

export const getColor = async (url: string | null) => {
  if (url) {
    const fac = new FastAverageColor();
    const color = await fac.getColorAsync(url, {
      mode: "precision",
      ignoredColor: [255, 255, 255],
      algorithm: "simple",
    });
    const imageColor = color.rgba;
    return imageColor;
  } else {
    return "rgba(255, 255, 255, 1)";
  }
};
