const Game = require("./game");

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const input = document.getElementById('type-form');
    const ctx = canvas.getContext('2d');

    const game = new Game(canvas,ctx);

    game.draw();
});
  