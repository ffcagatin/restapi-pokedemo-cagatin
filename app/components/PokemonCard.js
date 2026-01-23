"use client";
import { useState } from "react";

export default function PokemonCard({ pokemon }) {
  const [showStats, setShowStats] = useState(false);

  if (!pokemon) return null;

  return (
    <div className="rounded-xl border-2 border-black p-1 bg-white shadow-[2px_2px_0px_#000]">
      <div className="rounded-lg border border-black bg-white p-4">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="h-24 mx-auto"
          style={{ imageRendering: "pixelated" }}
        />

        <h3 className="pixel-font mt-3 text-center text-sm font-bold uppercase">
          {pokemon.name}
        </h3>

        <p className="pixel-font mt-2 text-center text-xs capitalize">
          TYPE: {pokemon.types.map((t) => t.type.name).join(", ")}
        </p>

        <button
          onClick={() => setShowStats(!showStats)}
          className="pixel-font mt-4 w-full rounded-md border-2 border-black bg-blue-900 py-2 text-xs font-bold uppercase text-white shadow-[2px_2px_0px_#000] transition hover:bg-blue-800 active:translate-y-[1px] active:shadow-none"
        >
          {showStats ? "Hide Stats" : "Show Stats"}
        </button>

        {showStats && (
          <ul className="mt-3 text-sm space-y-1 montserrat">
            {pokemon.stats.map((s) => (
              <li key={s.stat.name} 
              className="flex justify-between capitalize"
              >
                <span>{s.stat.name.replace("-", " ")}</span>
                <span className="font-medium">{s.base_stat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}