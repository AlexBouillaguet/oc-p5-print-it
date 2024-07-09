const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector("#banner .arrow_left");
const rightArrow = document.querySelector("#banner .arrow_right");
const dots = document.querySelector("#banner .dots");

// écoute des événements pour les flèches

leftArrow.addEventListener("click", () => {
	console.log("leftArrow");
});

rightArrow.addEventListener("click", () => {
	console.log("rightArrow");
});

// insertion des dots d'après le nombre de slides

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);
}

// ajout du dot sélectionné

const allDots = document.querySelectorAll(".dot");
allDots[0].classList.add("dot_selected");

