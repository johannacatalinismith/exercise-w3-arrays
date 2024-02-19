const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey",
  "Yoyo",
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(`I have ${pokemons.length} pokemons!`);
};
//Here i call the function of countThem:
countThem();

const orderThem = () => {
  pokemons.sort();
  console.log(pokemons);
};

//Here I call the function of orderThem:
orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
  pokemons.reverse();
  console.log(pokemons);
};

//Here I call the function of flipThem:
flipThem();

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  for (let pokemon of pokemons) {
    console.log(pokemon.toUpperCase());
  }
};

//Here I call the function of makeThemBig:
makeThemBig();

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  pokemons.forEach((pokemon) => {
    if (pokemon.startsWith("B")) {
      console.log(pokemon);
    }
  });
};

onlyTheBs();

const notTheCs = () => {
  // remove all pokemons that starts with C
  pokemons.forEach((pokemon) => {
    if (!pokemon.startsWith("C")) {
      console.log(pokemon);
    }
  });
};

notTheCs();

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  pokemons.forEach((pokemon, index) => {
    console.log(`number ${index + 1} - ${pokemon}`);
  });
};

nameAndIdThanks();

const catchPokemon = (Yoyo) => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.forEach((pokemon, push) => {
    console.log(`${push} - ${pokemon}`);
  });
};

catchPokemon();

const didICatchIt = (Pikachu) => {
  // check the pokemons to see if a specific pokemon is in the array
  if (pokemons.includes("Pikachu")) {
    console.log(`${Pikachu} - ${includes}`);
  };
};

didICatchIt();








const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
};

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};
