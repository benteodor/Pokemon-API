let pokemons = [];

const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0")
    .then((response) => response.json())
    .then((json) => {
      pokemons = json.results;
      displayData(pokemons);
    });
};

fetchData();

const displayData = (data) => {
  const container = document.querySelector(".data");
  container.innerHTML = "";

  data.forEach((pokemon) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.innerHTML = `<h2>${pokemon.name}</h2>`;
    container.appendChild(pokemonCard);
  });
};

const searchPokemons = (searchPok) => {
  const filteredData = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchPok.toLowerCase())
  );
  displayData(filteredData);
};

document.querySelector("#search").addEventListener("input", (e) => {
  searchPokemons(e.target.value);
});
