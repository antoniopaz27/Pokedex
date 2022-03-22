console.log("Hola Antonio Paz")

const fetchPokemon = () => {
        const pokeName = document.getElementById("pokeName");
        let pokeInput = pokeName.value.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./img/gif_cubone.gif");
            } else {

                return res.json();
            }
        }).then((data) => {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            console.log(pokeImg);
            pokeImage(pokeImg);
            // let poketype = arr.find(data.type.).types..type.name;
            // console.log(poketype);
        })
    }
    // fetchPokemon();
const pokeImage = (url) => {
        const pokeImg = document.getElementById("pokeImg");
        pokeImg.src = url;
    }
    // pokeImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png");