class Meteor {
    constructor(canvas, ctx, x, y, word){
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.word = word;

        //Variables that I need:
        //Canvas, so that it can be drawn in.
        //X and Y positions
        //X and Y velocities (Only moves in the Y direction)
        //Word attached

        // this.meteorImg = new Image();
        // this.meteorImg.src = __dirname + "./meteor.png";
    }

    draw(){
        // debugger;
        // this.ctx.drawImage(this.meteorImg, this.x, this.y);

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 20, 0, 2*Math.PI);
        this.ctx.fillStyle = '#A52A2A';
        this.ctx.fill();
        this.ctx.closePath();        
    }

    drawText(){
        // debugger;
        this.ctx.beginPath();
        this.ctx.fillStyle = '#008000';
        this.ctx.fillText(this.word, this.x - 20, this.y - 25);
        this.ctx.fill();
        this.ctx.closePath();
    }

    move(){
        this.x += this.dx;
        this.y += this.dy;
    }

    //draw() and move() method (To render and re-render the meteor)

}

module.exports = Meteor;