var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var ranBtn = document.getElementById('random')

function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function ranColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const random = Math.random();
    const bit = (random * 6) | 0;
    color += (bit).toString(16);
  }
  return color;
}

function randomColors() {
	color1.value = ranColor();
	color2.value = ranColor();

	setGradient();
}

ranBtn.addEventListener("click", randomColors);	
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

setGradient();





