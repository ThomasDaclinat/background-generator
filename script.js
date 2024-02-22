var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var gradientProperty = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
var randomButton = document.querySelector("#random");
var randomColor1 = Math.random();
var randomColor2;

css.textContent = gradientProperty //"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function setGradient(){
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value
        + ", " 
        + color2.value 
        + ")";
        
        css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

console.log(randomColor)