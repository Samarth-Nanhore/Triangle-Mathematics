var inputs = document.querySelectorAll(".side-input");
var calculatebtn = document.querySelector("#btn");
var output = document.querySelector("#output");

function calculate(base, height){
    var area = 0.5 * base * height;
    return area;
}

function showArea(){
    if(inputs[0].value=="" || inputs[1].value==""){
        output.innerText = "Please enter both fields (in numbers)";
    }
    else{
        var area = calculate(Number(inputs[0].value), Number(inputs[1].value));
    output.innerText = "The area of triangle is " + area + "cm²";
    }
}

calculatebtn.addEventListener("click", showArea);







// var inputs = document.querySelector(".side-input");
// var calculatebtn = document.querySelector("#btn");
// var output= document.querySelector("#output");



// function calculation(base, height) {
//     var area = 0.5 * base * height;
//     return area;
// }

// function showArea() {
//     if (inputs[0].value=="" || inputs[1].value=="") {
//         output.innerHTML = "Add both value";
//     }else{
//         var area = calculation(Number(inputs[0].value), Number(inputs[1].value));
//         output.innerHTML="The area of triangle is" + area +"";
//         console.log(area)
//     }
    
// }
// calculatebtn.addEventListener("click", showArea);