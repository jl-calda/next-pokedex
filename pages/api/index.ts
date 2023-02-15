import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const pokemons = req.body;

    const filePath = path.join(process.cwd(), "data", "pokemon.json");

    const data = pokemons;

    try {
      // Check if the file exists, and read its contents if it does
      const fileExists = fs.existsSync(filePath);
      let fileData = fileExists ? fs.readFileSync(filePath, "utf8") : "";

      // Parse the file data as JSON
      let json = JSON.parse(fileData);

      // Add the new data to the array
      json.push(data);

      // Write the updated array to the file
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
      res.status(200).json(json);
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

// import fs from "fs";
// import path from "path";

// export default async function handler(req, res) {
//   const { firstName, lastName } = req.body;

//   const filePath = path.join(process.cwd(), "data", "pokemon.json");

//   try {
//     // Read the existing file contents
//     const fileContents = await fs.promises.readFile(filePath, "utf-8");

//     // Parse the JSON data into an array
//     const existingData = JSON.parse(fileContents);

//     // Add the new data to the array
//     existingData.push({ firstName, lastName });

//     // Write the updated data back to the file
//     await fs.promises.writeFile(filePath, JSON.stringify(existingData));

//     res.status(200).json({ message: "Data written to file" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error writing data to file" });
//   }
// }
