"use client";

import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  return (
    <div>
      <form onSubmit={() => router.push("/search")}>
        <input type="text" placeholder="Search..." />
      </form>
    </div>
  );
};

export default SearchBar;
