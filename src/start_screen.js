class StartScreen {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
    }    

    drawStartingClick(){
        console.log(this.ctx);
        this.ctx.beginPath();
        this.ctx.fillStyle = "green"
        this.ctx.font = 'bold 24px Space Mono';
        this.ctx.textAlign = "center";
        this.ctx.fillText("Click on the Screen to Start Game", (canvas.width / 2), (canvas.height / 2));
        this.ctx.fill();
        this.ctx.closePath();
    }    
}

module.exports = StartScreen;