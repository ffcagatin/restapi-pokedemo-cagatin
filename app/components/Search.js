"use client";
import { useState } from "react";

export default function Search({ onSearch }) {
  const [value, setValue] = useState("");

  return (
    <input
      placeholder="Search Pokémon..."
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onSearch(e.target.value.toLowerCase());
      }}
      className="border p-1 rounded w-full mb-6 montserrat placeholder:montserrat placeholder:text-gray-400"
    />
  );
}