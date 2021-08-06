/*
const API_KEY = '3621675444603381';
const  = 'https://superheroapi.com/api/';
const  = `${baseURL}${API_KEY}/search/${search}`
*/

const charactersList = document.getElementById('charactersList');
let hpCharacters = {};
let results = [];
let favoritesArray = JSON.parse(localStorage.getItem("favoritesArray"));
let specificChar = {};

const addToFavorites = (id) => {
    favoritesArray.push(id);
    alert("added to favorites");
    localStorage.setItem("favoritesArray", JSON.stringify(favoritesArray));
};

const loadCharacters = async () => {
    let search = document.getElementById('searchBar').value;
    console.log(search);
    try {
        const res = await fetch(`https://www.superheroapi.com/api.php/3621675444603381/search/${search}`);
        hpCharacters = await res.json();
        results = hpCharacters.results;
        // console.log(results);
        displayCharacters(results);
    } catch (err) {
        console.error(err);
    }
};





const displayCharacters = (characters) => {
    // console.log(characters);
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character"><a href="card.html?id=${character.id}">
                <h2 id="character-name">${character.name}</h2>
                 <p id="character-id">id: ${character.id}</p>
                 <img class="character-image" src="${character.image.url}"></img></a>
       
      <h3 class="publisher">${character.biography.publisher}</h3>
                        
      </li>
      
        `
        })
        .join('');
    charactersList.innerHTML = htmlString;
};



document.getElementById('searchBar').addEventListener("keyup", loadCharacters);

/*
Adds to fav button 

<button class="btn add-to-fav" data-id=${character.id} onClick="addToFavorites(${character.id})">
                            Add to favourites
                        </button>
*/