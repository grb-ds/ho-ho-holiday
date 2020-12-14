let score = 0;

const scoreboard = (element) => {

    switch (element) {
        case ("bluesquare"):
            score = score + 5;
            break;
        case ("yellowsquare"):
            score = score + 4;
            break;
        case ("greensquare"):
            score = score + 3;
            break;
        case ("orangesquare"):
            score = score + 2;
            break;
        case ("purplesquare"):
            score = score + 0;
            break;
    }

    return score;

    // Add document.get element innerhtml to add score to mainpage 
};