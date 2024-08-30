pokemonList();

function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon/zapdos")
    .then(response => response.json())
    .then(data => {      
        console.log("Nombre: ", data.name[0].toUpperCase() + data.name.slice(1),"\n");
        console.log("Habilidades:", data.abilities.map(abilityInfo => abilityInfo.ability.name),"\n");
        console.log("Tipo", data.types.map(abilityInfo => abilityInfo.type.name),"\n");
        console.log("Stats", data.stats.map(abilityInfo => abilityInfo.stat.name));
    })
    .catch(error => {
        console.error('Error:', error);
    });
}