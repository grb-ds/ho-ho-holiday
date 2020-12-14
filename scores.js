let score = 0;
let locationPawn = 0;

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

};




function rollDice() {
    var randomDice = Math.floor(6 * Math.random()) + 1;
    return randomDice;
}


const pawnLocation = () => {

    locationPawn = rollDice();

    let pawnPlace = document.getElementById(locationPawn);

    let className = pawnPlace.className;

    scoreboard(className);

    console.log(score);

}


document.getElementById("dice").addEventListener("click", pawnLocation);