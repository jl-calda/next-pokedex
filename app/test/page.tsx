"use client";

import React, { useEffect, useState } from "react";
import { getColor } from "../../lib/getColor";
import { fetchOnePokemon, makeArray } from "../../lib/pokemon";

const page = () => {
  const array = makeArray(1, 1008);
  const [pokemons, setPokemons] = useState([]);
  const [colors, setColors] = useState();
  const [color, setColor] = useState();
  const [color2, setColor2] = useState();

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

  // const handleGetColor = async () => {
  //   console.log(pokemons);
  //   const getColors = async () => {
  //     const colors = pokemons.map(async (pokemon) => {
  //       const front = getColor(pokemon.images.front);
  //       const shiny = getColor(pokemon.images.shiny);
  //       return { front, shiny };
  //     });
  //     const resolvedColors = await Promise.all(colors);
  //     setColors(resolvedColors);
  //   };
  //   getColors();
  // };

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

// import { useState } from "react";

// function page() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch("/api/pokemon", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ firstName, lastName }),
//       });

//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input
//           type="text"
//           value={firstName}
//           onChange={(event) => setFirstName(event.target.value)}
//         />
//       </label>
//       <label>
//         Last Name:
//         <input
//           type="text"
//           value={lastName}
//           onChange={(event) => setLastName(event.target.value)}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

export default page;
