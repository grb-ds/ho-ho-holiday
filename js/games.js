import { randomPicture } from "../js/WhatIsIt.js"
import { displayModal } from "../js/WhatIsIt.js"
import { winOrLose } from "../js/WhatIsIt.js"


let images = [{
    name: "my precious",
    src: "../images/guesstheimage/my-precious.jpeg"
}, {
    name: "frodo",
    src: "../images/guesstheimage/frodo.jpeg",
}, {
    name: "the shire",
    src: "../images/guesstheimage/the-shire.jpeg",
}, {
    name: "smeagol",
    src: "../images/guesstheimage/smeagol.jpeg",
}, {
    name: "gandalf",
    src: "../images/guesstheimage/gandalf.jpeg",
}, {
    name: "hobbit",
    src: "../images/guesstheimage/hobbit.jpeg",
}, {
    name: "elves",
    src: "../images/guesstheimage/elves.jpeg",
}, {
    name: "trilogy",
    src: "../images/guesstheimage/trilogy.jpeg",
}, {
    name: "sword",
    src: "../images/guesstheimage/sword.jpeg",
}, {
    name: "dwarves",
    src: "../images/guesstheimage/dwarves.jpeg",
}, {
    name: "beard",
    src: "../images/guesstheimage/beard.jpeg",
}, {
    name: "halfling",
    src: "../images/guesstheimage/halfling.jpeg",
}, {
    name: "mordor",
    src: "../images/guesstheimage/mordor.jpeg",
}, {
    name: "bow and arrow",
    src: "../images/guesstheimage/bow-and-arrow.jpeg",
}, {
    name: "forest",
    src: "../images/guesstheimage/forest.jpeg",
}, {
    name: "eye",
    src: "../images/guesstheimage/eye.jpeg",
}, {
    name: "orcs",
    src: "../images/guesstheimage/orcs.jpeg",
}, {
    name: "smaug",
    src: "../images/guesstheimage/smaug.jpeg",
}, {
    name: "dragon",
    src: "../images/guesstheimage/dragon.jpeg",
}, {
    name: "wizard",
    src: "../images/guesstheimage/wizard.jpeg",
}, {
    name: "ax",
    src: "../images/guesstheimage/ax.jpeg",
}, {
    name: "adventure",
    src: "../images/guesstheimage/adventure.jpeg",
}, {
    name: "hero",
    src: "../images/guesstheimage/hero.jpeg",
}];

const randomPictureEvil = (array) => {
    let image = array[Math.floor(Math.random() * array.length)];
    document.getElementById("evil-image").src = image;
    console.log(image);
    return image;
    
};

const greengame = () => {
    let guesses = 0;
    let randomImage = randomPicture(images);
    displayModal(myModal);
    winOrLose(randomImage.name, myModal, guesses);
}

const redgame = () => {
    let evilImage = ["../img/red-game/ballrog.jpg", "../img/red-game/nazgul.png", "../img/red-game/saruman.png"]
    randomPictureEvil(evilImage);   
    displayModal(myModal1);
}

const differentGames = (element) => {


    switch (element) {
        case ("bluesquare"):
            // bluegame();
            break;
        case ("yellowsquare"):
        //    yellowgame();
            break;
        case ("greensquare"):
                greengame();           
                break;
        case ("orangesquare"):
            // orangegame();
            break;
        case ("purplesquare"):
            redgame()
            break;
            
    }

};


export { differentGames };