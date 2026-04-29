
const TOKEN = "7ddab36f9f7a19c6f0131f383343d063";
const BASE_URL = `https://superheroapi.com/api.php/${TOKEN}`;

// this is like the search stuff
export async function searchHero(name) {
  const res = await fetch(`${BASE_URL}/search/${name}`);
  const data = await res.json();

  if (data.response === "error") return [];

  return data.results;
}

export async function getHeroById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data = await res.json();

  return data;
}