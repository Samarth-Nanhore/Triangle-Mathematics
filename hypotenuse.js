const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#btn");
const output =document.querySelector('#output');


function calculateSumOfSquares(a, b){
    const sumsquare = a*a + b*b;
    return sumsquare;
}



function calculateHypotenuse() {
    const sumsquare = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenus = Math.sqrt(sumsquare);
   output.innerText = "The length of hyptenuse is" +" "+ lengthOfHypotenus
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);