/*jshint esversion: 6*/

/*
var colors = [
	'rgb(107, 91, 149)',
	'rgb(236, 219, 84)',
	'rgb(233, 75, 60)',
	'rgb(111, 159, 216)',
	'rgb(148, 71, 67)',
	'rgb(122, 56, 100)'
	];
*/

var colors = colorsArrGen(6);

// var correctColor = colors[3];
var correctColor = getRandSeedColor();
var squares = document.querySelectorAll('.square');
var rgbHead = document.getElementById('rgbHead');
var gamePrompt = document.querySelector('#gamePrompt');
var H1 = document.getElementById('H1');
var resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
	//Update the resetButton
	resetButton.textContent = 'New Colors';

	//Gen a new colors array
	colors = colorsArrGen(6);

	//Gen a new correctColor
	correctColor = getRandSeedColor();

	//Update the background of squares
	for (var i = 0; i < colors.length; ++i) {
		squares[i].style.background = colors[i];
	}

	//Update the header text
	rgbHead.textContent = correctColor.toUpperCase();

	//Update the header background
	H1.style.background = '#232323';
});

rgbHead.textContent = correctColor.toUpperCase();
for (var i = 0; i < colors.length; ++i) {
	//Add colors to the boxes
	squares[i].style.background = colors[i];

	//Add click listeners
	squares[i].addEventListener('click', function () {
		//Grab the color of the clicked box
		var clickedColor = this.style.background;

		//Check if the colors are same
		if (clickedColor === correctColor) {
			gamePrompt.textContent = 'Correct!';
			changeColors(clickedColor);
			H1.style.background = clickedColor;
			resetButton.textContent = 'Play Again';
		}
		else{
			this.style.background = '#232323';
			gamePrompt.textContent = 'Try Again!';
		}
	});
}

//function to change the color of all squares
function changeColors(clickedColor){
	for(var i = 0; i < squares.length; ++i){
		squares[i].style.background = clickedColor;
	}
}

function getRandSeedColor(){
	var randNum = Math.floor(Math.random() * colors.length);
	return colors[randNum];
}

//Function to generate new colors array
function colorsArrGen(arrSize){
	var colorsArr = new Array();
	for(var i = 0; i < arrSize; ++i){
		colorsArr.push(randColorGenerator())
	}
	return colorsArr;
}

//Helper function for colorsArrGen, returns a single random color
function randColorGenerator(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return ('rgb(' + r + ', ' + g + ', ' + b + ')');
}
