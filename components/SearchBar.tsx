"use client";
import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  return (
    <div>
      <form onSubmit={() => router.push("/search")}>
        <input type="text" placeholder="Search..." />
      </form>
    </div>
  );
};

export default SearchBar;
