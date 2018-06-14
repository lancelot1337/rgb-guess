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

var numSquares = 6;
var colors = [];
var correctColor;
var H1 = document.getElementById('H1');
var squares = document.querySelectorAll('.square');
var rgbHead = document.getElementById('rgbHead');
var gamePrompt = document.querySelector('#gamePrompt');
var resetButton = document.getElementById('resetButton');

/*
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');

easyBtn.addEventListener('click', function () {
	H1.style.background = 'steelblue';
	hardBtn.classList.remove('selected');
	easyBtn.classList.add('selected');
	numSquares = 3;
	colors = colorsArrGen(numSquares);
	correctColor = getRandSeedColor();
	rgbHead.textContent = correctColor;
	for (var i = 0; i < squares.length; ++i){
		if(colors[i]) {
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = 'none';
		}
	}

});

hardBtn.addEventListener('click', function () {
	H1.style.background = 'steelblue';
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	numSquares = 6;
	colors = colorsArrGen(numSquares);
	correctColor = getRandSeedColor();
	rgbHead.textContent = correctColor;
	for (var i = 0; i < squares.length; ++i){
		squares[i].style.background = colors[i];
		squares[i].style.display = 'block';
	}
});
*/

var modeBtn = document.querySelectorAll('.mode');

init();

function init() {
	modeBtnGen();
	squaresGen();
	resetFun();
}

function modeBtnGen(){
	for(var i = 0; i < modeBtn.length; ++i){
		modeBtn[i].addEventListener('click', function() {
			modeBtn[0].classList.remove('selected');
			modeBtn[1].classList.remove('selected');
			this.classList.add('selected');
			if (this.textContent === 'Easy'){
				numSquares = 3;
			}
			else {
				numSquares = 6;
			}
			resetFun();
		});
	}
}

function squaresGen() {
	for(var i = 0; i < squares.length; ++i){
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
}
function resetFun() {
	//Update gamePrompt
	gamePrompt.textContent = '';

	//Update the resetButton
	resetButton.textContent = 'New Colors';

	//Gen a new colors array
	colors = colorsArrGen(numSquares);

	//Gen a new correctColor
	correctColor = getRandSeedColor();

	//Update the background of squares
	for (var i = 0; i < squares.length; ++i) {
		if(colors[i]){
			squares[i].style.display = 'block';
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = 'none';
		}
	}

	//Update the header text
	rgbHead.textContent = correctColor;

	//Update the header background
	H1.style.background = 'steelblue';

	//Update resetButton textContent
	resetButton.textContent = 'New Colors';
}

resetButton.addEventListener('click', () => {
	resetFun();
});

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
/*js snippets
gi = document.getElementById('id');
fe = myArray.forEach(function(elem) {
	// body...
});
fi = for (prop in obj) {
	if (obj.hasOwnProperty(prop)) {
		// body...
	}
}
fn = function methodName (arguments) {
	// body...
}
st = setTimeout(function() {
	// body...
}, delay);
si = setInterval(function() {
	// body...
}, delay);
cl = console.log(obj);
cw = console.warn(obj);
us = 'use strict';
*/
