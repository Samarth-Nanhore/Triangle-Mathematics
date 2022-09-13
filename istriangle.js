const input = document.querySelectorAll(".angle-input");
const output = document.querySelector("#output");
const btn = document.querySelector('#triangle-btn')

function calculateSumOfAngles(angle1, angle2, angle3) {
const sum = angle1 + angle2+ angle3;
//console.log(sum);
return sum;    
}


function Triangle(){
//   const sum = calculateSumOfAngles(45, 45, 90)
const sum = calculateSumOfAngles(Number(input[0].value),
Number(input[1].value), Number(input[2].value)
);
//chekcking
if(sum === 180){
    output.innerHTML ="Yup, This angle form a triangle";
}
else{
    output.innerHTML="Oh! the angle don't form a triangle";
}

}


btn.addEventListener("click", Triangle)