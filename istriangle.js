const input = document.querySelectorAll(".angle-input");
const output = document.querySelector("#output");
const btn = document.querySelector('#triangle-btn')

function calculateSumOfAngles(angle1, angle2, angle3) {
const sum = angle1 + angle2+ angle3;
//console.log(sum);
return sum;    
}


function Triangle(){
    if(input[0].value=="" || input[1].value=="" || input[2].value=="")
    {
        output.innerText = "Please enter all angles";
    }
   else{
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
} 
//   const sum = calculateSumOfAngles(45, 45, 90)



btn.addEventListener("click", Triangle)