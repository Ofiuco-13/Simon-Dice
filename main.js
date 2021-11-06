let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 0;

const botonComenzar = document.querySelector(".js-comenzar");
const info = document.querySelector(".js-info");
const cabecera = document.querySelector(".js-cabecera");
const contenedorCuadrados = document.querySelector(".js-contenedor");

botonComenzar.addEventListener("click", comenzarJuego);

contenedorCuadrados.addEventListener("click", (event) => {
  const { cuadrado } = event.target.dataset;

  if (cuadrado) manejarClick(cuadrado);
});

function comenzarJuego() {
  botonComenzar.classList.add("oculto");
  info.classList.remove("oculto");
  info.textContent = "Turno de la maquina";
  comenzarSiguienteRonda();
}

function comenzarSiguienteRonda() {
  ronda += 1;

  contenedorCuadrados.classList.add("unclickable");
  info.textContent = "Turno de la maquina";
  cabecera.textContent = `ronda ${ronda} de 20`;

  const siguienteRonda = [...secuenciaMaquina];
  siguienteRonda.push(comenzarSiguientePaso());
  jugarRonda(siguienteRonda);

  secuenciaMaquina = [...siguienteRonda];
  setTimeout(() => {
    turnoUsuario(ronda);
  }, ronda * 600 + 1000);
}

function comenzarSiguientePaso() {
  const tiles = ["rojo", "verde", "azul", "amarillo"];
  const random = tiles[Math.floor(Math.random() * tiles.length)];

  return random;
}

function manejarClick(cuadrado) {
  const index = secuenciaUsuario.push(cuadrado) - 1;
  const sonido = document.querySelector(`[data-sonido='${cuadrado}']`);
  sonido.play();

  const clicksRestantes = secuenciaMaquina.length - secuenciaUsuario.length;

  if (secuenciaUsuario[index] !== secuenciaMaquina[index]) {
    resetearJuego("Perdiste!");
    return;
  }

  if (secuenciaUsuario.length === secuenciaMaquina.length) {
    if (secuenciaUsuario.length === 20) {
      resetearJuego("Felicidades, completaste todas las rondas!");
      return;
    }

    secuenciaUsuario = [];
    info.textContent = "Vas bien, sigue!";
    setTimeout(() => {
      comenzarSiguienteRonda();
    }, 1000);
    return;
  }

  info.textContent = `Tu turno: ${clicksRestantes} Click${
    clicksRestantes > 1 ? "s" : ""
  }`;
}

function resetearJuego(texto) {
  alert(texto);
  secuenciaMaquina = [];
  secuenciaUsuario = [];
  ronda = 0;
  botonComenzar.classList.remove("oculto");
  cabecera.textContent = "Microsoft Dice";
  info.classList.add("oculto");
  contenedorCuadrados.classList.add("unclickable");
}

function jugarRonda(siguienteRonda) {
  siguienteRonda.forEach((color, index) => {
    setTimeout(() => {
      activarCuadrado(color);
    }, (index + 1) * 600);
  });
}

function activarCuadrado(color) {
  const cuadrado = document.querySelector(`[data-cuadrado='${color}']`);
  const sonido = document.querySelector(`[data-sonido='${color}']`);

  cuadrado.classList.add("activated");
  sonido.play();

  setTimeout(() => {
    cuadrado.classList.remove("activated");
  }, 300);
}

function turnoUsuario(ronda) {
  contenedorCuadrados.classList.remove("unclickable");
  info.textContent = `Tu turno: ${ronda} Click${ronda > 1 ? "s" : ""}`;
}
