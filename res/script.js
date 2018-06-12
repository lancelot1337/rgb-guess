var colors = [
	"rgb(107, 91, 149)",
	"rgb(236, 219, 84)",
	"rgb(233, 75, 60)",
	"rgb(111, 159, 216)",
	"rgb(148, 71, 67)",
	"rgb(122, 56, 100)"
	];

var correctColor = colors[3];
var squares = document.querySelectorAll(".square");
var rgbHead = document.getElementById("rgbHead");
rgbHead.textContent = correctColor.toUpperCase();
for(var i = 0; i < colors.length; ++i){
	squares[i].style.background = colors[i];
}
