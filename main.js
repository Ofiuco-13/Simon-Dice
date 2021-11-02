let secuenciaMaquina = [];
let secuenciaUsuario = [];

const startButton = document.querySelector('#startButton');

function startGame() {
    startButton.className = 'hidden';
}

startButton.addEventListener('click', startGame);
