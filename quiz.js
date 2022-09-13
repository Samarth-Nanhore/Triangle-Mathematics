const quizForm = document.querySelector('.quizform');
const sumbitAnswerBtn = document.querySelector("#sumbit");
const output = document.querySelector('#output');

const correctAnswers = ["3", "right"]

function calculateScore() {
    let score = 0;
    let index = 0;
 const formResult = new FormData(quizForm)
    for(let value of formResult.values()){
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    console.log(score)
    output.innerText ="Your score is"+ score;
}

sumbitAnswerBtn.addEventListener('click', calculateScore);