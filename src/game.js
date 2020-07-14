const Meteor = require("./meteor");
const Dictionary = require("./dictionary");

class Game{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.dictionary = new Dictionary();
        this.meteors = [];
        this.addMeteors();
    }

    addMeteors(){
        const meteor = new Meteor(this.canvas, this.ctx, 100, 100, this.dictionary.randomWord())
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
    }

    positionCheck(){

        for(let i = 0; i < this.meteors.length; i++){
            if(this.meteors[i].y >= 700){
                this.meteors.splice(i, 1);
            }
        }
    }

    start(){
        const that = this;

        setInterval(function(){ 
            that.draw();
            that.move();
            that.renderGround();
            that.positionCheck();
        }, 50);

        setInterval(function(){
            that.addMeteors();
        }, 10000);

    }
    //How to handle spawning meteors? Maybe every 10 seconds, spawn a new meteor.
    //As more meteors get destroyed, spawn faster.


    //WPM: (# of words typed / Time taken (input timer)) * 60 = WPM

}

module.exports = Game;