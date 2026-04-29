// Compare two superheroes
import React, { useState } from "react";
import { searchHero } from "../api/superhero";

export default function Compare() {
  const [hero1, setHero1] = useState("");
  const [hero2, setHero2] = useState("");
  const [result, setResult] = useState(null);

  function getPowerScore(hero) {
    const stats = hero.powerstats;
    return Object.values(stats).reduce((sum, val) => sum + Number(val || 0), 0);
  }

  async function compareHeroes() {
    const h1 = (await searchHero(hero1))[0];
    const h2 = (await searchHero(hero2))[0];

    if (!h1 || !h2) return;

    const score1 = getPowerScore(h1);
    const score2 = getPowerScore(h2);

    let winner = "Draw";
    if (score1 > score2) winner = h1.name;
    else if (score2 > score1) winner = h2.name;

    setResult({ h1, h2, winner });
  }

  return (
    <div className="page">
      <h1>Compare Heroes</h1>

      <input placeholder="Hero 1" onChange={(e) => setHero1(e.target.value)} />
      <input placeholder="Hero 2" onChange={(e) => setHero2(e.target.value)} />
      <button onClick={compareHeroes}>Fight!</button>

      {result && (
        <div className="result">
          <h2>Winner: {result.winner}</h2>
        </div>
      )}
    </div>
  );
}