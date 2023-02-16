import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const pokemons = req.body;

    const filePath = path.join(process.cwd(), "data", "pokemon.json");

    const data = { pokemons: pokemons };

    try {
      let fileData = fs.readFileSync(filePath);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error writing data to file." });
    }
  } else {
    const filePath = path.join(process.cwd(), "data", "pokemon.json");
    const fileExists = fs.existsSync(filePath);
    let fileData = fileExists ? fs.readFileSync(filePath, "utf8") : "";
    let json = JSON.parse(fileData);
    res.status(200).json(json);
  }
}
