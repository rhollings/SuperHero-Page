/*
const API_KEY = '3621675444603381';
const baseURL = 'https://superheroapi.com/api/';
const sHERO = 'batman'
const myURL = `${baseURL}${API_KEY}/search/${sHERO}`


function myFunc1() {
    var myURL = document.getElementById("getHero").value;
    document.getElementById("demo").innerHTML = myURL.powerstats;
}

//var obj = JSON.parse(hero.json);
//document.getElementById("demo").innerHTML = obj.city + ", " + obj.age;

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));



// api url
const api_url =
	"https://www.superheroapi.com/api.php/3621675444603381/search/nightwing";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
    var blah = data.results[0];
	console.log(blah);
	
    if (response) {
		hideloader();
	}
	show('response');

	document.getElementById('heros').innerHTML = blah.powerstats.power;
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}





// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		<th>Salary</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data) {
		tab += `<tr>
	<td>${r.id} </td>
	<td>${r.name}</td>
    <td>'stuff'</td>
    </tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("hero").innerHTML = tab;
}

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
        const res = await fetch(`https://www.superheroapi.com/api.php/3976831975725162/search/${search}`);
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
            <li class="character"><a href="./profile.html?id=${character.id}">
                <h2 id="character-name">${character.name}</h2></a>
                 <p id="character-id">id: ${character.id}</p>
                 <img class="character-image" src="${character.image.url}"></img>
<h3 class="fullname">${character.appearance.gender}</h3>
       
      <h3 class="publisher">${character.biography.publisher}</h3>
      <button class="btn add-to-fav" data-id=${character.id} onClick="addToFavorites(${character.id})">
                            Add to favourites
                        </button>
                        
      </li>
      
        `
        })
        .join('');
    charactersList.innerHTML = htmlString;
};



document.getElementById('searchBar').addEventListener("keyup", loadCharacters);