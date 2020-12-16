let highscore = localStorage.getItem("highscore");

// Example for player One 
// for let colorClass = document.getElementById(scorePlayerOne).className;
        // console.log(scoreboard(colorClass, scorePlayerOne));
        

const scoreboard = (className, playerScore) => {

    if (gameWin == true) {
        switch (className) {
            case ("bluesquare"):
                playerScore = playerScore + 5;
                break;
            case ("yellowsquare"):
                playerScore = playerScore + 4;
                break;
            case ("greensquare"):
                playerScore = playerScore + 3;
                break;
            case ("orangesquare"):
                playerScore = playerScore + 2;
                break;
            case ("purplesquare"):
                playerScore = playerScore + 0;
                break;
        }

        return playerScore;
        // Add document.get element innerhtml to add score to mainpage 
    } else { 
        playerScore = playerScore;
    }

};

const showHighscore = () => {

    if (highscore !== null) {
        if (score > highscore) {
            localStorage.setItem("highscore", score);
        }
    } else {
        localStorage.setItem("highscore", score);
    }
}

export { scoreboard };