class Meteor {
    constructor(canvas, ctx, x, y, dy, word){
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = dy;
        this.word = word;
    }

    draw(){

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 20, 0, 2*Math.PI);
        this.ctx.fillStyle = '#654321';
        this.ctx.fill();
        this.ctx.closePath();        
    }

    drawText(){
        // debugger;
        this.ctx.beginPath();
        this.ctx.fillStyle = '#CA0B00';
        this.ctx.font = "bold 16px Space Mono";        
        this.ctx.fillText(this.word, this.x - 23, this.y - 25);
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