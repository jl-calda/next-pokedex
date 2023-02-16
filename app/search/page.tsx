"use client";

import { useState } from "react";
import Card from "../../components/Card/Card";
import pokemonData from "../../data/pokemon.json";
import { v4 as uuidv4 } from "uuid";
import Select from "react-select";

// const Option = (props) => {
//   return (
//     <div>
//       <components.Option {...props}>
//         <input
//           type="checkbox"
//           checked={props.isSelected}
//           onChange={() => null}
//         />{" "}
//         <label>{props.label}</label>
//       </components.Option>
//     </div>
//   );
// };

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

const SearchPage = () => {
  const [search, setSearch] = useState<string>("");
  // const [filteredTypes, setFilteredTypes] = useState<string[]>(["all"]);
  // const [increasingWt, setIncreasingWt] = useState<boolean>(false);
  // const [increasingHt, setIncreasingHt] = useState<boolean>(false);

  const filteredPokemon = pokemonData.pokemons
    .filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
    .slice(0, 12);

  return (
    <div className="h-full flex-1 flex-col space-y-8">
      {/* <Select options={options} /> */}
      <form className="flex flex-col justify-center items-center">
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-[1px] border-slate-800 rounded-md p-2 outline-none placeholder:text-sm text-slate-800"
            placeholder="Search for a pokemon"
          />
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
        {filteredPokemon.length ? (
          filteredPokemon.map((pokemon, index) => (
            <Card key={uuidv4()} pokemon={pokemon} />
          ))
        ) : (
          <div className="text-slate-800 text-2xl font-bold">
            No Pokemon Found
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
