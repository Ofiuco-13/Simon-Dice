let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 0;

const botonComenzar = document.querySelector(".js-comenzar");
const info = document.querySelector(".info-seccion");

function activarCuadrado(color) {
  const cuadrado = document.querySelector(`[data-cuadrado='${color}']`);
  const sonido = document.querySelector(`[data-sonido='${color}']`);

  cuadrado.classList.add("activated");
  sonido.play();

  setTimeout(() => {
    tile.classList.remove("activated");
  }, 300);
}

function jugarRonda(siguienteSecuencia) {
  siguienteSecuencia.forEach((color, i) => {
    setTimeout(() => {
      activarCuadrado(color);
    }, (i + 1) * 600);
  });
}

function comenzarSiguientePaso() {
  const cuadrados = ["rojo", "verde", "azul", "amarillo"];
  const aleatorio = cuadrados[Math.floor(Math.random() * cuadrados.length)];

  return aleatorio;
}

function comenzarSiguienteRonda() {
  ronda++;

  const siguienteSecuencia = [...secuenciaMaquina];
  siguienteSecuencia.push(comenzarSiguientePaso());
  jugarRonda(siguienteSecuencia);
}

function iniciarJuego() {
  botonComenzar.classList.add("oculto");
  info.classList.remove("oculto");
  info.textContent = "Turno de la maquina";
  comenzarSiguienteRonda();
}

botonComenzar.addEventListener("click", iniciarJuego);
