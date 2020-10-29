const Meteor = require("./meteor");
const Dictionary = require("./dictionary");
const Player = require("./player");
const GameOverScreen = require("./game_over_screen");

class Game{
    constructor(canvas, ctx, input){
        this.canvas = canvas;
        this.ctx = ctx;
        this.input = input;

        this.inputTimer = 0;
        this.startType = 0;
        this.endType = 0;
        this.spawnTimer = 8000;
        this.hiScore = 10000;
        this.hiWPM = 100;
        this.speed = 1.5;

        this.dictionary = new Dictionary();
        this.player = new Player();
        this.gameOverScreen = new GameOverScreen(ctx, canvas)
        this.meteors = [];


        this.handleMeteor = this.handleMeteor.bind(this);
        this.drawBackground = this.drawBackground.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.meteorSpawn = this.meteorSpawn.bind(this);
        this.beginGame = this.beginGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }

    beginGame(e) {
        if (e.button === 0) {
          this.canvas.removeEventListener('click', this.beginGame);
          this.restartGame();
          this.input.style.display = "block";
          this.start();
        }
    }    

    restartGame() {
        this.inputTimer = 0;
        this.startType = 0;
        this.endType = 0;
        this.spawnTimer = 8000;
        this.player.lives = 3;
        this.player.wpm = 0;
        this.player.score = 0;
        this.player.destroyCount = 0;
        this.meteors = [];        
    }

    drawBackground() {
        this.ctx.beginPath();
          this.ctx.rect(0, 0, canvas.width, canvas.height);
          this.ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
          this.ctx.fill();
        this.ctx.closePath();
    }    

    addMeteors(){
        let randX = Math.floor(Math.random() * ((this.canvas.width - 100) - 100)) + 100;

        let meteor = new Meteor(this.canvas, this.ctx, randX, 0, this.speed, this.dictionary.randomWord())
        this.meteors.push(meteor);
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for(let i = 0; i < this.meteors.length; i++){
            this.meteors[i].draw();
            this.meteors[i].drawText();
        }
    }

    move(){
        for(let i = 0; i < this.meteors.length; i++){
            this.meteors[i].move();
        }
    }

    renderHiScoreWPM(){
        this.ctx.beginPath();
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = "16px Space Mono";        
        this.ctx.fillText(`Best Score: ${this.hiScore}`, 95, 25);
        this.ctx.fillText(`Best WPM: ${this.hiWPM}`, 515, 25);        
        this.ctx.closePath();
    }

    renderGround(){
        this.ctx.beginPath();
        this.ctx.rect(0, 500, this.canvas.width, 100);
        this.ctx.fillStyle = '#808080';
        this.ctx.fill();  
        this.ctx.strokeStyle = "#f5f5f5";      
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = '#000000';
        this.ctx.font = "20px Space Mono";
        this.ctx.fillText(`WPM: ${this.calculateWPM()}`, (this.canvas.width / 8), 575);
        this.ctx.fill();
        this.ctx.fillText(`Score: ${this.player.score}`, (this.canvas.width / 2) , 535);
        this.ctx.fill();
        this.ctx.fillText(`Lives: ${this.player.lives}`, ((this.canvas.width) * (7/8)), 575);
        this.ctx.fill();                
        this.ctx.closePath();          
    }

    calculateWPM(){
        if(this.player.destroyCount / (this.inputTimer / 60)){
            this.player.wpm = (this.player.destroyCount / (this.inputTimer / 60)).toFixed(0);
        }else{
            this.player.wpm = 0;
        }

        return this.player.wpm;
    }

    positionCheck(){
        for(let i = 0; i < this.meteors.length; i++){
            if(this.meteors[i].y >= 500){
                this.meteors.splice(i, 1);
                this.player.lives -= 1;
            }
        }
    }

    startTimer(e){
        if(this.startType === 0 || e.target.value !== ' '){
            this.startType = Date.now();
        }
    }

    handleMeteor(e){
        let value = this.input.value.trim();

        if(e.keyCode === 32 || e.keyCode === 13){
            for(let i = 0; i < this.meteors.length; i++){
                if(value === this.meteors[i].word){
                    this.meteors.splice(i, 1);
                    this.player.destroyCount += 1;
                    this.player.score += 1000;
                    this.input.value = "";
                    break;
                }
            }

            if(this.startType > 0){
                this.endType = Date.now();
                this.inputTimer += ((this.endType - this.startType) / 1000)
            }

            this.startType = 0;

        }

    }

    timerChange(){
        if(this.spawnTimer <= 3000){
            this.spawnTimer = 3000;
        }else if(this.player.destroyCount % 5 === 0 && this.player.destroyCount !== 0){
            this.spawnTimer -= 1000;
            this.speed += 0.5;           
        }
    }

    meteorSpawn(){
        this.addMeteors();
        this.timerChange();
        let meteors = setTimeout(this.meteorSpawn, this.spawnTimer);

        if(this.player.lives <= 0){
            clearTimeout(meteors);
        }
    }

    start(){
        const that = this;

        this.input.addEventListener('keydown', this.handleMeteor);
        this.input.addEventListener('input', this.startTimer);

        const game = setInterval(function(){ 
            that.draw();
            that.move();
            that.renderHiScoreWPM();
            that.renderGround();
            that.positionCheck();

            if(that.player.lives <= 0){
                that.draw();
                that.move();
                that.renderHiScoreWPM();
                that.renderGround();
                that.positionCheck();
                clearInterval(game);
                that.gameOver();
            }

        }, 50);

        this.meteorSpawn();
           
    }

    gameOver(){
        this.input.removeEventListener('keydown', this.handleMeteor);
        this.input.removeEventListener('input', this.startTimer);
        this.input.value = "";
        this.input.style.display = 'none';

        this.drawBackground();

        this.gameOverScreen.drawGameOver();

        this.gameOverScreen.drawFinalScoreWPM(this.player.score, this.player.wpm, this.hiScore, this.hiWPM);

        if(this.player.wpm > this.hiWPM){
            this.hiWPM = this.player.wpm;
        }

        if(this.player.score > this.hiScore){
            this.hiScore = this.player.score;
        }        

        this.canvas.addEventListener('click', this.beginGame);

        this.gameOverScreen.drawRestartClick();
    }

}

module.exports = Game;