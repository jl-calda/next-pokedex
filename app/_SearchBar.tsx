"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { fetchPokemonData } from "../lib/pokemon";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const pokeData = async () => await fetchPokemonData();
    return () => {
      setPokemons(pokeData);
    };
  }, []);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(search);
    router.push(`/search/${search}`);
    setSearch("");
  };

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <form className="" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search pokemon..."
        value={search}
        onChange={handleOnChange}
      />
      <button type="submit" className="hidden"></button>
    </form>
  );
};

export default SearchBar;
