let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = "Font size: " + slider.value;

slider.oninput = function () {
    output.innerHTML = "Font size: " + this.value;
}

let sliderBorder = document.getElementById("myRangeBorder");
let outputBorder = document.getElementById("demoBorder");
outputBorder.innerHTML = "Border radius: " + sliderBorder.value;

sliderBorder.oninput = function () {
    outputBorder.innerHTML = "Border radius: " + this.value;
}

let sliderBorderThickness = document.getElementById("myRangeBorderThickness");
let outputBorderThickness = document.getElementById("demoBorderThickness");
outputBorderThickness.innerHTML = "Border Thickness: " + slider.value;

sliderBorderThickness.oninput = function () {
    outputBorderThickness.innerHTML = "Border Thickness: " + this.value;
}

let sliderHeight = document.getElementById("myRangeHeight");
let outputHeight = document.getElementById("demoHeight");
outputHeight.innerHTML = "Height: " + slider.value;

sliderHeight.oninput = function () {
    outputHeight.innerHTML = "Height: " + this.value;
}

let sliderWidth = document.getElementById("myRangeWidth");
let outputWidth = document.getElementById("demoWidth");
outputWidth.innerHTML = "Width: " + slider.value;

sliderWidth.oninput = function () {
    outputWidth.innerHTML = "Width: " + this.value;
}