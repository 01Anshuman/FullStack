document.addEventListener('DOMContentLoaded',()=>{
 
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
    {
        question: "What is the capital of Up?",
        choices: ["Prayagraj","Varansi","Lucknow","Delhi"],
        answer: "Lucknow",
    },

    {
        question :"Which planet is known as red planet??",
        choices :["Mars","Venus","Jupiter","Saturn"],
        answer: "Mars",
    },
    {
        question: "Who wrote Rasmirathi??",
        choices: ["RamDhari Singh", "KaliDas", "Mahadevi Verma", "Lio Narhto"],
        answer: "RamDhari Singh",
    },
    {
        question: "Where MahaKumhb is going to Organise in 2025??",
        choices: ["Prayagraj","Varansi","Lucknow","Delhi"],
        answer: "Prayagraj",

    }
]

    let currentQuestionIndex = 0
    let score = 0

    //Attaching the eventlistner to start button
    startBtn.addEventListener("click", startQuiz)

    nextBtn.addEventListener("click",()=>{
        currentQuestionIndex++
        if(currentQuestionIndex < questions.length){
            showQuestion()
        }else{
            showResult()
        }
    })

    restartBtn.addEventListener('click',()=>{
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuiz();

    });

    //defining the function for the start button
    function startQuiz(){
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden")
        questionContainer.classList.remove("hidden")
        showQuestion()
    }

    //defining the functions for showing the questions
    function showQuestion(){
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "";
        questions[currentQuestionIndex].choices.forEach(choice=>{
            const li = document.createElement("li")
            li.textContent = choice
            li.addEventListener('click',selectAnswer(choice))
            choicesList.appendChild(li);
        });

    }


    function selectAnswer(choice){
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (choice === correctAnswer){
            score ++;
        }
        nextBtn.classList.remove("hidden");         
    }

    function showResult(){
        questionContainer.classList.add("hidden")
        resultContainer.classList.remove("hidden")
        scoreDisplay.textContent = `${score} out of ${questions,length}`;
    }

});