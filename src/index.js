const Game = require("./game");
const StartScreen = require("./start_screen");

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const input = document.getElementById('type-form');
    const ctx = canvas.getContext('2d');

    const menuScreen = new StartScreen(ctx, canvas)
    const game = new Game(canvas, ctx, input);

    game.drawBackground();
    menuScreen.drawStartingClick();
    input.style.display = 'none';

    canvas.addEventListener('click', game.beginGame);
});
  