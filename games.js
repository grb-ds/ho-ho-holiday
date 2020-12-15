
const differentGames = (element) => {

    switch (element) {
        case ("bluesquare"):
            bluegame();
            break;
        case ("yellowsquare"):
           yellowgame();
            break;
        case ("greensquare"):
            greengame();
            break;
        case ("orangesquare"):
            orangegame();
            break;
        case ("purplesquare"):
            console.log("That's a purple square, sadly this means you don't get any points...")
            break;
    }

};