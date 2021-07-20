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

*/

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