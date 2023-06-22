const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];
let palabraAleatoria;
let time = 10;
let score = 0;
const doc = document;
const parrafo = doc.getElementById("randomWord");
const texto = doc.getElementById("text");
const timespan = doc.getElementById("timeSpan");
const scorespan = doc.getElementById("score");
const gameOverDiv = doc.getElementById("end-game-container");
const firstDiv = doc.getElementById("first-div");

texto.addEventListener("input", e => {
    let palabraIngresada = e.target.value;
    if (palabraIngresada === palabraAleatoria) {
        console.log("Coincide");
        timespan.textContent = `${time+=3}s`
        e.target.value = "";
        addToDOM();
        updateScore();
    }
});

function actualizarTiempo(){
    let intervalID = setInterval(() => {
        time--;
        timespan.textContent = `${time}s`;
        if (time === 0) {
            clearInterval((intervalID));
            gameOver();
        }
    }, 1000);
}

function updateScore(){
    score++;
    scorespan.textContent = `${score}`;
}

function gameOver(){
    let titulo = doc.createElement("h1");
    titulo.textContent = "Time Out";
    let timeOutScore = doc.createElement("p");
    timeOutScore.textContent = `Tu Puntuación es: ${score}`;
    firstDiv.classList.toggle("hidden");
    gameOverDiv.appendChild(titulo);
    gameOverDiv.appendChild(timeOutScore);
    gameOverDiv.insertAdjacentHTML("beforeend", "<button onclick='location.reload()'  class='btn'>Volve a Empezar </button> " );
}

function addToDOM(){
    palabraAleatoria = randomWords();
    parrafo.textContent = palabraAleatoria;
}

function randomWords(){
    return words[Math.floor(Math.random() * words.length)]
}

actualizarTiempo();
addToDOM();