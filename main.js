let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 0;

const botonComenzar = document.querySelector("#comenzar-juego");
const mensaje = document.querySelector("#mensaje");

function siguientePaso() {
  const cuadrados = ["rojo", "amarillo", "azul", "verde"];
  const aleatorio = cuadrados[Math.floor(Math.random() * cuadrados.length)];

  return random;
}

function siguienteRonda() {
  ronda++;
  const siguienteSecuencia = [...sequence];
}

function iniciarJuego() {
  botonComenzar.className = "oculto";
  mensaje.className = "";
  mensaje.textContent = "Turno de la maquina";
}

botonComenzar.addEventListener("click", iniciarJuego);
