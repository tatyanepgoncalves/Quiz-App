const quizData = [
    {
        question: "Qual é a capital da França?",
        options: ["Roma", "Paris", "Madri", "Berlim", "Brasília"],
        answer: "Paris"
    },
    {
        question: "Qual é o planeta que é conhecido como Planeta Vermelho?",
        options: ["Venus", "Marte", "Jupiter", "Saturno", "Terra"],
        answer: "Marte"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Miguel de Cervantes", "William Shakespeare", "Leo Tolstoy", "Fyodor Dostoevsky", "Charles Dickens"],
        answer: "Miguel de Cervantes"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Marte", "Júpiter", "Vênus", "Saturno", "Urano"],
        answer: "Júpiter"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Michelangelo", "Leonardo da Vinci", "Rembrandt"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual é o maior oceano do mundo em área?",
        options: ["Oceano Índico", "Oceano Ártico", "Oceano Atlântico", "Oceano Pacífico", "Oceano Antártico"],
        answer: "Oceano Pacífico"
    },
    {
        question: "Qual é o nome do rio que passa pela cidade de Paris?",
        options: ["Danúbio", "Tâmisa", "Nilo", "Amazonas", "Sena"],
        answer: "Sena"
    },
    {
        question: "Quem descobriu o Brasil?",
        options: ["Albert Einstein", "Mahatma Gandhi", "Napoleão Bonaparte", "Cristovão Colombo", "Pedro Álvares Cabral"],
        answer: "Pedro Álvares Cabral"
    },
    {
        question: "Quem foi o primeiro presidente do Brasil",
        options: ["Getúlio Vargas", "Fernando Henrique Cardoso", "Deodoro da Fonseca", "Floriano Peixoto", "Juscelino Kubitschek"],
        answer: ""
    },
    {
        question: "Quem foi o imperador da França entre 1804 a 1814?",
        options: ["Napoleão Bonaparte", "Charles de Gaulle", "Voltaire", "Herbert Hoover", "Franklin Delano Roosevelt"],
        answer: "Napoleão Bonaparte"
    },
];

let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.getElementById('quiz-container');
const btnIniciar = document.getElementById('restart');

let questionIndex = 0;
let pontuacao = 0;

// mostrar question 
function showQuestion() {
    const currentQuestion = quizData[questionIndex];

    questionElement.innerHTML = `${questionIndex + 1} - ${currentQuestion.question}`;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.innerHTML = option;
        optionElement.addEventListener("click", () => selectOption(option));
        optionsElement.appendChild(optionElement)
    });
}



// selecionar opção
function selectOption(selectedOption) {
    const currentQuestion = quizData[questionIndex];

    if (selectedOption === currentQuestion.answer) {
        pontuacao++;
    }
    questionIndex++;
    if (questionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// mostrar resultado
function showResult() {
    questionElement.innerHTML = "";
    optionsElement.innerHTML = "";
    resultContainer.classList.remove("hidden");
    quizContainer.style.display = "none";
    resultElement.innerHTML = `Você acertou ${pontuacao} de ${quizData.length}.`;
}


// reiniciar 
btnIniciar.addEventListener('click', restartQuiz);


function restartQuiz() {
    questionIndex = 0;
    pontuacao = 0;
    resultContainer.classList.add("hidden");
    quizContainer.style.display = "block";
    showQuestion();
}

// modo light e dark 
trilho.addEventListener("click", () => {
    trilho.classList.toggle("dark");
    body.classList.toggle("dark");
})

showQuestion();