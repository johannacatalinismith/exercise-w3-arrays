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
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(`I have ${pokemons.length} pokemons!`);
};
//Here i call the function of countThem:
//countThem();

const orderThem = () => {
  pokemons.sort();
  console.log(pokemons);
};

//Here I call the function of orderThem:
//orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
  pokemons.reverse();
  console.log(pokemons);
};

//Here I call the function of flipThem:
//flipThem();

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  for (let pokemon of pokemons) {
    //This console log runs 13 times, one for each pokemon.
    // first run, pokemon = °pikachu"
    // second run, pokemon = squirtle"
    // and so one. Therefor we print the array to the console log in singular (pokemon not pokemonS)
    console.log(pokemon.toUpperCase());
  }
};

//Here I call the function of makeThemBig:
//makeThemBig();

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  for (let pokemon of pokemons) {
    if (pokemon.startsWith("B")) {
      console.log(pokemon);
    }
  }
};

//onlyTheBs();

const notTheCs = () => {
  // remove all pokemons that starts with C
  for (let pokemon of pokemons) {
    //the ! flips the meaning of startwith, make it the opposite
    if (!pokemon.startsWith("C")) {
      console.log(pokemon);
    }
  }
};

//notTheCs();

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  // for and forEach are bascially the same. For is in most cases more practical to use
  //forEach is a method on the array. therefore pokemonS not pokemon.
  pokemons.forEach((pokemon, index) => {
    //index + 1 is there so it starts at 1 and not 0.
    console.log(`number ${index + 1} - ${pokemon}`);
  });
};

//nameAndIdThanks();

const catchPokemon = () => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push("Yoyo");
  console.log(pokemons);
};

//catchPokemon();

const didICatchIt = (name) => {
  // check the pokemons to see if a specific pokemon is in the array
  if (pokemons.includes(name)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

//didICatchIt("Pikachu");
//didICatchIt("Teddy");

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  //the 0 tells the computer not to delete anything
  pokemons.splice(2, 0, "Clefairy");
  console.log(pokemons);
};

//addInThirdPlace();

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  // pokemons.sort((a, b) => b.length - a.length);
  //console.log(pokemons[0]);
  let name = "";
  for (let pokemon of pokemons) {
    if (pokemon.length > name.length) {
      name = pokemon;
    }
  }
  console.log(name);
};

theLongestName();
