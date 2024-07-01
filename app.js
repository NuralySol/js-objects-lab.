const pokemon = require('./data.js')

const game = {
    party: [], // Array to store pokemons
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
    difficulty: "Med", 
    catchPokemon(pokemonObj) {
        this.party.push(pokemonObj); 
        const pokeball = this.items.find(item => item.name === "pokeball"); 
        if (pokeball) {
            pokeball.quantity--; 
        }
    },
    gymStatus() {
        const gymTally = { completed: 0, incomplete: 0 }; 
        this.gyms.forEach(gym => {
            if (gym.completed) {
                gymTally.completed++; // Increment the completed count
            } else {
                gymTally.incomplete++; // Increment the incomplete count
            }
        });
        console.log(gymTally); // Print the gym tally
    },
    partyCount() {
        return this.party.length; // Return the number of Pokemon in the party
    }
};

const starter = pokemon.find(p => p.starter); // Find the starter Pokemon
game.party.push(starter); // Add the starter Pokemon to the party

game.party.forEach(p => console.log(p.name)); // Print the names of all Pokemon in the party
game.gyms.forEach(gym => {
    if (gym.difficulty < 3) {
        gym.completed = true; // Mark gyms with difficulty less than 3 as completed
    }
});

const evolvedPokemon = game.party.map(p => {
    if (p.number === 1) return pokemon.find(pokemon => pokemon.number === 2); // Bulbasaur evolves into Ivysaur
    return p;
});
game.party = evolvedPokemon; // Update the party with evolved Pokemon

const starterPokemon = pokemon.filter(p => p.starter); // Filter out all starter Pokemon
starterPokemon.forEach(p => console.log(p.name)); // Print the names of all starter Pokemon

game.catchPokemon(pokemon[44]); // Catch a specific Pokemon and add it to the party

game.catchPokemon(pokemon[145]); // Catch another specific Pokemon and add it to the party
console.log(game.items); // Print the updated items list

game.gyms.forEach(gym => {
    if (gym.difficulty < 6) {
        gym.completed = true; // Mark gyms with difficulty less than 6 as completed
    }
});

game.gymStatus(); // Print the updated gym status

console.log(game.partyCount()); // Print the number of Pokemon in the party

game.gyms.forEach(gym => {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
});

console.log(game); // Print the final game object

//I have removed the exercise comments from the code to make it more readable, I think I am having problem with evolving others beside bulbasaur.