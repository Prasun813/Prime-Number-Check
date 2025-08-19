let body = document.querySelector('body');
let button = document.getElementById('btn');
let searchBox = document.getElementById('searchBox');
let ContentSection = document.getElementById('Content-Section');


let getApi = async (query)=> {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    let res = await data.json();
    console.log(res); 
    res.abilities.forEach(pokemon => {
        let searchCard = document.createElement('div');
searchCard.classList.add('searchCard');
searchCard.innerHTML = `
                        <img src="${pokemon.url}" alt="">
                        <h3>Name:${pokemon.name} </h3>
                        <p>some</p>
                        <p>some</p>
                        <p>some</p>
`;
ContentSection.append(searchCard);
    });  
}

button.addEventListener('click',function(e){
    e.preventDefault();
    const search = searchBox.value.trim();
    getApi(search)
    searchBox.value = '';
})

body.style.backgroundColor = "black";
body.style.color = "white";