var colors = [
	"rgb(107, 91, 149)",
	"rgb(236, 219, 84)",
	"rgb(233, 75, 60)",
	"rgb(111, 159, 216)",
	"rgb(148, 71, 67)",
	"rgb(122, 56, 100)"
	];

var correctColor = getRandColor();
var squares = document.querySelectorAll(".square");
var rgbHead = document.getElementById("rgbHead");
var gamePrompt = document.querySelector("#gamePrompt");
rgbHead.textContent = correctColor.toUpperCase();
for(var i = 0; i < colors.length; ++i){
	//Add colors to the boxes
	squares[i].style.background = colors[i];

	//Add click listeners
	squares[i].addEventListener("click",function(){
		//Grab the color of the clicked box
		var clickedColor = this.style.background;

		//Check if the colors are same
		if(clickedColor === correctColor){
			gamePrompt.textContent = "Correct!";
			changeColors(clickedColor);
		}
		else{
			this.style.background = "#c4c4c4";
			gamePrompt.textContent = "Try Again!";
		}
	});
}

//function to change the color of all squares
function changeColors(clickedColor){
	for(var i = 0; i < squares.length; ++i){
		squares[i].style.background = clickedColor;
	}
}

function getRandColor(){
	var randNum = Math.floor(Math.random() * colors.length);
	return colors[randNum];
}
