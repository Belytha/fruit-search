const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const searchContainer = document.querySelector(".search-container");
const suggestionsBox = document.querySelector('.suggestions');

const fruitList = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	//iterate through fruits
	let results = fruitList.filter(function(fruit){
		return fruit.toLowerCase().includes(str.toLowerCase());
	});
	return results;
}

function searchHandler(e) {
	//resets list
	suggestions.innerHTML = "";

	//creates filtered list
	let filtList = Array.from(search(input.value));

	//iterates through filtered suggestions, creates new li for each suggestion and adds it to the list
	for(let suggestion of filtList){
		let newLi = document.createElement("li");
		newLi.innerText = suggestion;
		suggestions.append(newLi);
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = "";
	
}
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);


