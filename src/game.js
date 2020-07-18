const Meteor = require("./meteor");
const Dictionary = require("./dictionary");
const Player = require("./player");

class Game{
    constructor(canvas, ctx, input){
        this.canvas = canvas;
        this.ctx = ctx;
        this.input = input;

        this.inputTimer = 0;
        this.startType = 0;
        this.endType = 0;
        this.spawnTimer = 8000;


        this.dictionary = new Dictionary();
        this.player = new Player();
        this.meteors = [];


        this.handleMeteor = this.handleMeteor.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.meteorSpawn = this.meteorSpawn.bind(this);
    }

    addMeteors(){
        let randX = Math.floor(Math.random() * ((this.canvas.width - 100) - 100)) + 100;

        let meteor = new Meteor(this.canvas, this.ctx, randX, 0, this.dictionary.randomWord())
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

    renderGround(){
        this.ctx.beginPath();
        this.ctx.rect(0, 700, this.canvas.width, 100);
        this.ctx.fillStyle = '#808080';
        this.ctx.fill();  
        this.ctx.strokeStyle = "#f5f5f5";      
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = '#000000';
        this.ctx.font = "24px Space Mono";
        this.ctx.fillText(`WPM: ${this.calculateWPM()}`, 45, 745);
        this.ctx.fill();
        this.ctx.fillText(`Score: ${this.player.score}`, 235, 745);
        this.ctx.fill();
        this.ctx.fillText(`Lives: ${this.player.lives}`, 445, 745);
        this.ctx.fill();                
        this.ctx.closePath();          
    }

    calculateWPM(){
        if(this.player.destroyCount / (this.inputTimer / 60)){
            this.player.wpm = (this.player.destroyCount / (this.inputTimer / 60)).toFixed(2);
        }else{
            this.player.wpm = 0;
        }

        return this.player.wpm;
    }

    positionCheck(){
        for(let i = 0; i < this.meteors.length; i++){
            if(this.meteors[i].y >= 700){
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
        }else if(this.player.destroyCount % 5 === 0){
            this.spawnTimer -= 1000;           
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
            that.renderGround();
            that.positionCheck();

            if(that.player.lives <= 0){
                alert('Game Over!');
                that.draw();
                that.move();
                that.renderGround();
                that.positionCheck();
                clearInterval(game);
            }

        }, 50);

        this.meteorSpawn();
           
    }

}

module.exports = Game;