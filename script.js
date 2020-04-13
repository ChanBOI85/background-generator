var css = document.querySelector("h3");
var body = document.getElementById("body");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");


function setLinearBackground() {
	body.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")";
	css.innerHTML = body.style.background + ";";

	console.log("Heeey! I just created my first github account!");
}




color1.addEventListener("input", setLinearBackground);
color2.addEventListener("input", setLinearBackground);
