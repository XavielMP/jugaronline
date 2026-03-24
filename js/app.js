function playGame(file, system) {
  const url = `play.html?game=${file}&system=${system}`;
  window.location.href = url;
}

function goHome() {
  window.location.href = "index.html";
}

function loadGame() {
  const params = new URLSearchParams(window.location.search);

  const file = params.get("game");
  const system = params.get("system");

  if (!file || !system) {
    alert("Error cargando juego");
    window.location.href = "index.html";
    return;
  }

  // 🎮 Configuración EmulatorJS
  window.EJS_player = "#game";
  window.EJS_gameUrl = "roms/" + file;
  window.EJS_core = system;

  // 🔥 AQUÍ ESTÁ LA CLAVE
  window.EJS_pathtodata = "emulator/data";

  // Cargar el loader desde tu carpeta emulator
  const script = document.createElement("script");
  script.src = "emulator/data/loader.js";
  document.body.appendChild(script);
}

window.onload = function () {
  if (document.getElementById("game")) {
    loadGame();
  }
};