const p = console.log
const questions = [
    {
        question: "who invented Java Programming?",
        answers: [
            {text: "Dennis Ritchie",correct:false},
            {text:"Guido van Rossum",correct:false},
            {text:"Bjarne Stroustrup",correct:false},
            {text:"James Gosling",correct:true}
        ]  
    },
    {
        question: "Which Stream is used for input?",
        answers: [
            {text: "System",correct:false},
            {text:"Scanner",correct:false},
            {text:"System.in",correct:true},
            {text:"System.out",correct:false}
        ]
    },
    {
        question: "Which of the following is a smallest integer Datatype?",
        answers: [
            {text: "Short",correct:false},
            {text:"int",correct:false},
            {text:"long",correct:false},
            {text:"byte",correct:true}
        ]
    },
    {
        question: "What is the purpose  of using loop?",
        answers: [
            {text: "For repeation",correct:true},
            {text:"Check condition",correct:false},
            {text:"Finding errors",correct:false},
            {text:"None of these",correct:false}
        ]
    }
];
 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz (){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();  
 }

 function showQuestion() {
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerText = questionNo + "," + currentQuestion.question; 
   currentQuestion.answers.forEach((answer, index) =>{
    const button = document.getElementById(`button-${index + 1}`)
    // const button = document.createElement("button");
    button.innerText = answer.text;  
    // button.classList.add("btn");
    // answerButtons.appendChild(button);
    if (answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
   });
 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
 }
 function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add ("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");   
        }
        // button.disabled = true;
    });
    nextButton.style.display = "block";
 }
 function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }
 function handleNextButton(){
    
    currentQuestionIndex++;
    if (currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }

 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
 })


 startQuiz();