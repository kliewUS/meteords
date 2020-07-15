class Player{
    constructor(ctx){
        this.ctx = ctx;
        this.wpm = 0;
        this.score = 0;
        this.lives = 3;
    }

    drawText(){
        this.ctx.beginPath();
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText('WPM', 50, 750);
        this.ctx.fill();
        this.ctx.fillText('Score', 250, 750);
        this.ctx.fill();
        this.ctx.fillText('Lives', 450, 750);
        this.ctx.fill();                
        this.ctx.closePath();         
    }

}

module.exports = Player;