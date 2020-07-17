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


        this.dictionary = new Dictionary();
        this.player = new Player();
        this.meteors = [];
        this.addMeteors();


        this.handleMeteor = this.handleMeteor.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }

    addMeteors(){
        let randX = Math.floor(Math.random() * (this.canvas.width - 200)) + 200;

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
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText(`WPM: ${this.calculateWPM()}`, 50, 750);
        this.ctx.fill();
        this.ctx.fillText(`Score: ${this.player.score}`, 250, 750);
        this.ctx.fill();
        this.ctx.fillText(`Lives: ${this.player.lives}`, 450, 750);
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

    start(){
        const that = this;

        //Put event listener on input
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
        
        const meteors = setInterval(function(){
            that.addMeteors();

            if(that.player.lives <= 0){
                clearInterval(meteors);
            }

        }, 10000);
        
    }
    //How to handle spawning meteors? Maybe every 10 seconds, spawn a new meteor.
    //As more meteors get destroyed, spawn faster.


    //WPM: (# of words typed / Time taken (input timer)) * 60 = WPM

    //If spacebar (event code: 32) or enter (event code: 13) and input matches with
    //word, delete the meteor.
    //Iterate through the meteors to do this.
    //Get the input from index.js


}

module.exports = Game;