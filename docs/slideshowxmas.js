var slides = [
	"./gallery/holiday/logo.png",
	"./gallery/holiday/carlogo.png",
	"./gallery/holiday/samples.png",
	"./gallery/holiday/heatgun.png",
	"./gallery/holiday/squeegee.png",
	"./gallery/livetint.gif",
	"./gallery/holiday/livetint2.gif"
];

var current = 0;
function nextSlide() {
	current++;
	if (current >= slides.length) current = 0;
	document.getElementById("slide").src = slides[current];
}

setInterval(nextSlide, 3000);