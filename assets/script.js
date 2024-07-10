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
const bannerImg = document.querySelector("#banner .banner-img");
const bannerText = document.querySelector("#banner p");
let currentIndex = 0;

// écoute des événements pour les flèches

leftArrow.addEventListener("click", () => {
	currentIndex--;
	if (currentIndex = -1 ) {
		currentIndex = slides.length - 1;
	};
	changeSlideAndDots(currentIndex);
});

rightArrow.addEventListener("click", () => {
	currentIndex++;
	if (currentIndex === slides.length) {
		currentIndex = 0
	};
	changeSlideAndDots(currentIndex);
});

// insertion des dots d'après le nombre de slides

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);
};	

// ajout du dot sélectionné

const allDots = document.querySelectorAll(".dot");
allDots[0].classList.add("dot_selected");

// fontion pour changer le slide et les dots

function changeSlideAndDots (indexOfSlide) {
	bannerImg.src = `./assets/images/slideshow/${slides[indexOfSlide].image}`;
	bannerText.innerHTML = slides[indexOfSlide].tagLine;
	allDots.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}	
	});	
};	