// dynamic background using variables
window.onload = () => {
  const randomId = Math.floor(Math.random() * maxPokemon);
  const backgroundURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomId}.png`;

  document.body.style.setProperty("--poke-bg", `url(${backgroundURL})`);
};

const maxPokemon = 898;
const btn = document.getElementById("pokemon-random");
const display = document.getElementById("pokemon-display");

// RANDOM
btn.addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * maxPokemon) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  display.style = "visibility: visible;";
  display.innerHTML = `<p style="font-size: 0.8rem;">Loading Pokémon...</p>`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showPokemon(data);
    })
    .catch((error) => {
      console.error(error);
      display.innerHTML = "Failed to load Pokémon 😢";
    });
});

// CATCH
const searchBtn = document.getElementById("pokemon-catch");
const searchInput = document.getElementById("search-input");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    display.style.visibility = "visible";
    display.innerHTML = "Please enter a Pokémon!";
    return;
  }

  display.style.visibility = "visible";
  display.innerHTML = `<p style="font-size: 0.8rem;">Loading Pokémon...</p>`;

  const urlByName = `https://pokeapi.co/api/v2/pokemon/${query}`;
  const urlByType = `https://pokeapi.co/api/v2/type/${query}`;

  fetch(urlByName)
    .then((res) => {
      if (!res.ok) throw new Error("Not a Pokémon name");
      return res.json();
    })
    .then((data) => {
      showPokemon(data); // function already in-use for display
    })
    .catch(() => {
      // Not a Pokémon? Try type instead
      fetch(urlByType)
        .then((res) => {
          if (!res.ok) throw new Error("Invalid type");
          return res.json();
        })
        .then((typeData) => {
          const pokemonList = typeData.pokemon;
          const randomIndex = Math.floor(Math.random() * pokemonList.length);
          const pokemonUrl = pokemonList[randomIndex].pokemon.url;

          return fetch(pokemonUrl);
        })
        .then((res) => res.json())
        .then((data) => {
          showPokemon(data);
        })
        .catch(() => {
          display.innerHTML = `<p style="color: red; font-size: 0.8rem;">No matching Pokémon or type.</p>`;
        });
    });
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});

// Functions:
function showPokemon(data) {
  const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  const sprite =
    data.sprites.other.showdown.front_default || data.sprites.front_default;
  const hp = data.stats?.find((s) => s.stat.name === "hp")?.base_stat ?? "??";
  const cry = new Audio(data.cries.legacy || data.cries.latest);
  cry.volume = 0.1;
  cry.play();
  const weight = data.weight * 0.1;
  const height = data.height * 0.1;
  const id = data.id;
  const icon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png`;
  const types = data.types.map((t) => t.type.name).join(", ");
  const moves = data.moves.map(
    (m) => m.move.name.charAt(0).toUpperCase() + m.move.name.slice(1)
  );
  const attacks = moves.sort(() => Math.random() - 0.5).slice(0, 2);
  console.log(attacks);
  const moveRows = attacks
    .map(
      (mv, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${mv}</td>
          </tr>
        `
    )
    .join("");
  console.log(moveRows);
  const abilities = data.abilities
    .map(
      (t, i) => `
            <tr>
              <td>${i + 1}</td>
              <td>${
                t.ability.name.charAt(0).toUpperCase() + t.ability.name.slice(1)
              }</td>
            </tr>
          `
    )
    .join("");

  document.getElementById("background-pokemon").src =
    data.sprites.other["official-artwork"].front_default ||
    data.sprites.other["dream_world"].front_default;

  display.style.opacity = "0"; // Fade out

  setTimeout(() => {
    display.innerHTML = `
            <h3>${name}</h3>
              <p style='font-size: 0.9rem; color: #ffcb05; text-align: left;'></p>
                <div class="lists">
                  <!-- Card on top -->
                  <div class="extra-info">
                    <div class="card-inner">
                      <div class="card-header">
                        <div class="card-type">${types}</div>
                        <div class="card-name">${name}</div>
                        <div class="card-hp">HP ${hp}</div>
                      </div>

                      <div class="card-art">
                        <img src="${sprite}" alt="${name}">
                      </div>

                      <div class="card-body">
                        <h4><strong>${attacks.join("<br>")}</strong></h4>
                        <p class="tiny"> <img src="${
                          icon || "•"
                        }" alt="Icon"> </p>
                        <p><strong>Abilities: </strong> ${data.abilities
                          .map(
                            (a) =>
                              a.ability.name.charAt(0).toUpperCase() +
                              a.ability.name.slice(1)
                          )
                          .join(", ")}</p>
                      </div>

                      <div class="card-footer">
                        <span class="badge tiny">${height.toFixed(
                          2
                        )}m <br /> ${weight.toFixed(1)}kg</span>
                        <span class="badge"><strong>Lvl: </strong> ${Math.ceil(
                          Math.random() * 100
                        )} </span>
                        <span class="badge"><strong>Dex No.</strong> ${id}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Tables under the card -->
                  <div class="tables">
                    <table class="gameboy-table">
                      <thead>
                        <tr><th>#</th><th>Ability List</th></tr>
                      </thead>
                      <tbody>${abilities}</tbody>
                    </table>

                    <table class="gameboy-table2">
                      <thead>
                        <tr><th>#</th><th>Move List</th></tr>
                      </thead>
                      <tbody>${moveRows}</tbody>
                    </table>
                  </div>
                </div>

          `;
    display.style.opacity = "1"; // Fade back in
  }, 150);
}
