// Hero card with flip animation (front = image, back = stats)

import React from "react";

export default function HeroCard({ hero }) {
  function safe(val) {
    if (!val || val === "null") return 0;
    return Number(val);
  }

  return (
    <div className="flip-card">
      <div className="flip-inner">

        {/* FRONT */}
        <div className="flip-front">
          <img src={hero.image.url} alt={hero.name} />
          <h3>{hero.name}</h3>
        </div>

        {/* BACK */}
        <div className="flip-back">
          <h3>{hero.name}</h3>

          <p>🦾 Strength: {safe(hero.powerstats.strength)}</p>
          <p>⚡ Speed: {safe(hero.powerstats.speed)}</p>
          <p>💥 Power: {safe(hero.powerstats.power)}</p>
          <p>🧠 Intelligence: {safe(hero.powerstats.intelligence)}</p>
          <p>💪 Durability: {safe(hero.powerstats.durability)}</p>
          <p>🥊 Combat: {safe(hero.powerstats.combat)}</p>
        </div>

      </div>
    </div>
  );
}