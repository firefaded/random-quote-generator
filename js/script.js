// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array of objects for random quotes

var randomQuote = [{
	quote: "Positive anything is better than negative nothing.",
	source: "Elbert Hubbard",
	citation:"BrainyQuote.com",
	year:1859 + " - " + 1915,
	category:"Positive",
},
{
	quote:"Life is 10% what happens to you and 90% how you react to it.",
	source:"Charles R. Swindell",
	citation:"BrainyQuote.com",
	year:1934,
	category:"Motivational",
},
{
	quote:"Education is the most powerful weapon which you can use to change the world.",
	source:"Nelson Mandela",
	citation:"BrainyQuote.com",
	year:1918 + " - " + 2013,
	category:"Education",
},
{
	quote:"Coming together is a beginning; keeping together is progress; working together is success.",
	source:"Henry Ford",
	citation:"BrainyQuote.com",
	year: 1863 + " - " + 1947,
	category: "Success",
},
{
	quote:"However difficult life may seem, there is always something you can do and succeed at.",
	source:"Stephen Hawking",
	citation:"BrainyQuote.com",
	year:1942,
	category:"Success",
},
{
	quote:"A leader is one who knows the way, goes the way, and shows the way.",
	source:"John C. Maxwell",
	citation:"BrainyQuote.com",
	year:1947,
	category:"Leadership",
}
];

// function that selects a random quote from the quotes away
// returns the randomly selected quote objects

function getRandomQuote () {
	var quote = Math.floor(Math.random() * (randomQuote.length));
	return randomQuote[quote];
}


// function that calls the getRandomQuote function and stores the returned quote
// in a variable

function printQuote () {
	var selectQuote = getRandomQuote();
	var html =  '<p class="quote">' + selectQuote.quote + '</p>' + '<p class="source">' +
	selectQuote.source + '<span class="citation">' + selectQuote.citation + '</span>' + '<span class="year">' +
	selectQuote.year + '</span>' + '<span class="category">' + selectQuote.category + '</span>' + '</p>';
	document.getElementById('quote-box').innerHTML = html;	
}