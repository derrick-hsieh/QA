const quizData = [
    {
        question: "How old is Derrick ?",
        a: " 10",
        b: " 20",
        c: " 25",
        d: " 100",
        correct:"c"

    },
    {
        question:"Which programing language did Derrick learn lately?",
        a:" Java",
        b:" c",
        c:" Python",
        d:" JavaScript",  
        correct:"d"  
    },
    {
        question:"Who's the winner of the best album at Grammy in 2020?",
        a:" Billie Elish",
        b:" Ariana Grande",
        c:" Dua Lipa",
        d:" Lil Nas X",
        correct:"a"
    },
    {
        question:"Who's the favorite artist of Billie Elish?",
        a:" Herself",
        b:" Tyler the Creator",
        c:" Justin Bieber",
        d:" Well... it depends",
        correct:"b"
    }
]

const question = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected(){
    let answer = undefined;
    answers.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;

}

function deselectAnswers(){
    answers.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submit.addEventListener("click", function(){
    //check to see the answer
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
    }
    if(currentQuestion < quizData.length)
{
    loadQuiz();
}else{
    quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
    <h2>🥳 🥳 🥳 🥳 🥳</h2> <button onclick ="location.reload()">Reload</button>`;
}  

});