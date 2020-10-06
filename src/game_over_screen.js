class GameOverScreen {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
    }    

    drawGameOver(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.95)"
        this.ctx.font = "bold 72px Space Mono";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Game Over!", (canvas.width / 2), (canvas.height / 4));
        this.ctx.fill();
        this.ctx.closePath();        
    }

    drawFinalScoreWPM(score, wpm, hiScore, hiWPM){
        let newRecordTextScore = " ";
        let newRecordTextWPM = " ";

        if(score > hiScore){
            newRecordTextScore = 'New Best Score!';         
        }

        if(wpm > hiWPM){
            newRecordTextWPM = 'New Best WPM!';
        }

        this.ctx.beginPath();
        this.ctx.fillStyle = "white"
        this.ctx.font = "bold 24px Space Mono";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`Score: ${score} WPM: ${wpm}`, (canvas.width / 2), (canvas.height / 3) + 25);
        this.ctx.fillText(`${newRecordTextScore}`, (canvas.width / 2), (canvas.height / 3) + 75);
        this.ctx.fillText(`${newRecordTextWPM}`, (canvas.width / 2), (canvas.height / 3) + 125);
        this.ctx.closePath(); 
    }
    
    drawRestartClick(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "green"
        this.ctx.font = "bold 24px Space Mono";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Click on the Screen to Start New Game", (canvas.width / 2), (canvas.height / 2) + 75);
        this.ctx.fill();
        this.ctx.closePath();        
    }
}

module.exports = GameOverScreen;