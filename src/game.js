const Meteor = require("./meteor");
const Dictionary = require("./dictionary");

class Game{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.dictionary = new Dictionary();
        this.meteors = [];
        
        
        this.addMeteors = this.addMeteors.bind(this);
        this.draw = this.draw.bind(this);

        this.addMeteors();
    }

    addMeteors(){
        // debugger;
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

    start(){
        const that = this;
        setInterval(function(){ 
            that.draw();
            that.move();
        }, 1000);
    }


    //WPM: (# of words typed / Time taken (input timer)) * 60 = WPM

}

module.exports = Game;