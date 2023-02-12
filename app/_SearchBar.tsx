"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search/${search}`);
    setSearch("");
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value) {
      console.log("handleChange", e.target.value);
      setSearch(e.target.value);
      // router.push(`/search/${search}`);
    }
  };

  return (
    <form className="" onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Search pokemon..."
        onChange={handleChange}
      />
      <button type="submit" className="hidden"></button>
    </form>
  );
};

export default SearchBar;
