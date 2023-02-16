"use client";

import { fetchPokemonData } from "../../../lib/pokemon";
import crypto from "crypto";
import useSWR from "swr";
import PokemonPreview from "../../../components/Card";

const SearchPage = ({ params: { search } }: { params: { search: string } }) => {
  // const { data, error, isLoading } = useSWR(fetchPokemonData);

  return <div>test</div>;
};

export default SearchPage;
