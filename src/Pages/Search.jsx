// Page for searching superheroes
import React, { useState } from "react";
import { searchHero } from "../api/superhero";
import HeroCard from "../components/HeroCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [heroes, setHeroes] = useState([]);

  async function handleSearch() {
    const results = await searchHero(query);
    setHeroes(results);
  }

  return (
    <div className="page">
      <h1>Search Superheroes</h1>

      <div className="searchBox">
        <input
          placeholder="Enter hero name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="grid">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}