const quizForm = document.querySelector('.quizform');
const sumbitAnswerBtn = document.querySelector("#sumbit");
const output = document.querySelector('#output');

const correctAnswers = ["A geometric figure","Polygon","3","Equilateral","Geometry","2","Scalene","3","Isosceles","Hypotenuse"]

function calculateScore() {
    let score = 0;
    let index = 0;
 const formResult = new FormData(quizForm)
 console.log(formResult);
    for(let value of formResult.values()){
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    console.log(score)
    if(score>=8){
        output.innerText ="Your score is"+" "+ score +" "+ "keep it up 👍"
    }else{
        output.innerText ="Your score is"+" "+ score +" "+ "try again 💪"
    }
    
}

sumbitAnswerBtn.addEventListener('click', calculateScore);