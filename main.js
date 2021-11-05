let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 0;

const botonComenzar = document.querySelector(".js-comenzar");
const info = document.querySelector(".info-seccion");
const cabecera = document.querySelector('.js-cabecera');
const contenedorTitulo = document.querySelector('.js-container')
function resetearJuego(texto) {
  alert(texto);
  secuenciaMaquina = [];
  secuenciaUsuario = [];
  ronda = 0;
  botonComenzar.classList.remove('oculto');
  cabecera.textContent = 'Microsoft Dice';
  info.classList.add('oculto');
  contenedorCuadrados.classList.add('unclickable');
}

function turnoUsuario(ronda) {
  contenedorTitulo.classList.remove('unclickable');
  info.textContent = `Tu turno: ${ronda} Tap${ronda > 1 ? 's' : '' }`
}

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

  secuenciaMaquina = [...siguienteSecuencia];
  setTimeout(() => {
    turnoUsuario(ronda);
  }, ronda * 600 + 1000);
}

  info.textContent = `Tu turno: ${tapsRestantes} Tap${
    tapsRestantes > 1 ? "s" : ""
  }`;
}

function iniciarJuego() {
  botonComenzar.classList.add("oculto");
  info.classList.remove("oculto");
  info.textContent = "Turno de la maquina";
  comenzarSiguienteRonda();
}

botonComenzar.addEventListener("click", iniciarJuego);
contenedorCuadrados.addEventListener("click", (event) => {
  const { cuadrado } = event.target.dataset;

  if (cuadrado) manejarClick(cuadrado);
});
