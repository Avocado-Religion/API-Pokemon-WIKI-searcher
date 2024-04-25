
/* another method
/*fetch("htttps>//pokeapi.com/api/v2/pikatchu")
    .then(response => {

        if(!response.ok){
            throw new Error("wtf are you doing that's no Pokémon!")
        }
        return response.json()

    })
    .then(data => console.log(data))
    .catch(error => console.error()); */

async function fetchData(){

    try {

        const PokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`);

        if (!response.ok) {
            throw new Error("wtf are you doing that's no pokemon!")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }
    catch (error){
        console.error(error);
    }

}
