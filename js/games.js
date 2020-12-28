import { randomPicture } from "../js/WhatIsIt.js"
import { displayModal } from "../js/WhatIsIt.js"
import { winOrLose } from "../js/WhatIsIt.js"
import { memoryGame } from "../js/memory.js";
import { getRandomRiddle } from "../js/riddles.js"
import { guessRiddleAnswer } from "../js/WhatIsIt.js"
import { puzzleGame } from "../js/puzzle.js"

let images = [{
    name: "my precious",
    src: "./images/guesstheimage/my-precious.jpeg"
}, {
    name: "frodo",
    src: "./images/guesstheimage/frodo.jpeg",
}, {
    name: "the shire",
    src: "./images/guesstheimage/the-shire.jpeg",
}, {
    name: "golum",
    src: "./images/guesstheimage/smeagol.jpeg",
}, {
    name: "gandalf",
    src: "./images/guesstheimage/gandalf.jpeg",
}, {
    name: "hobbit",
    src: "./images/guesstheimage/hobbit.jpeg",
}, {
    name: "elves",
    src: "./images/guesstheimage/elves.jpeg",
}, {
    name: "trilogy",
    src: "./images/guesstheimage/trilogy.jpeg",
}, {
    name: "aragorn",
    src: "./images/guesstheimage/sword.jpeg",
}, {
    name: "dwarves",
    src: "./images/guesstheimage/dwarves.jpeg",
}, {
    name: "gimli",
    src: "./images/guesstheimage/beard.jpeg",
}, {
    name: "hobbits",
    src: "./images/guesstheimage/halfling.jpeg",
}, {
    name: "mordor",
    src: "./images/guesstheimage/mordor.jpeg",
}, {
    name: "legolas",
    src: "./images/guesstheimage/bow-and-arrow.jpeg",
}, {
    name: "ents",
    src: "./images/guesstheimage/forest.jpeg",
}, {
    name: "sauron",
    src: "./images/guesstheimage/eye.jpeg",
}, {
    name: "orcs",
    src: "./images/guesstheimage/orcs.jpeg",
}, {
    name: "smaug",
    src: "./images/guesstheimage/smaug.jpeg",
}, {
    name: "smaug",
    src: "./images/guesstheimage/dragon.jpeg",
}, {
    name: "wizard",
    src: "./images/guesstheimage/wizard.jpeg",
}, {
    name: "gimli",
    src: "./images/guesstheimage/ax.jpeg",
}, {
    name: "fellowship",
    src: "./images/guesstheimage/adventure.jpeg",
}, {
    name: "frodo",
    src: "./images/guesstheimage/hero.jpeg",
}];

let riddles = [{
    riddle: "What has roots as nobody sees, is taller than trees, Up, up it goes, And yet never grows?",
    answer: "mountain",
}, {
    riddle: "Thirty white horses on a red hill,First they champ,Then they stamp,Then they stand still.",
    answer: "teeth",
}, {
    riddle: "Voiceless it cries,Wingless flutters,Toothless bites,Mouthless mutters.",
    answer: "wind"
}, {
    riddle: "An eye in a blue face, Saw an eye in a green face. That eye is like to this eye. Said the first eye. But in low place,Not in high place.",
    answer: "sun",
}, {
    riddle: "It cannot be seen, cannot be felt, Cannot be heard, cannot be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, kills laughter.",
    Answer: "dark",
}, {
    riddle: "A box without hinges, key, or lid, Yet golden treasure inside is hid.",
    answer: "egg",
}, {
    riddle: "Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking.",
    answer: "fish",
}, {
    riddle: "This thing all things devours: Birds, beasts, trees, flowers; Gnaws iron, bites steel; Grinds hard stones to meal; Slays king, ruins town, And beats high mountain down.",
    answer: "time",
}, {
    riddle: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    answer: "candle",
}, {
    riddle: "What can you break, even if you never pick it up or touch it?",
    answer: "promise",
}, {
    riddle: "I shave every day, but my beard stays the same. What am I?",
    answer: "barber",
}, {
    riddle: "What can’t talk but will reply when spoken to?",
    answer: "echo",
}, {
    riddle: "The more of this there is, the less you see. What is it?",
    answer: "darkness",
},{ 
riddle: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
answer: "map",
}, {
riddle: "What disappears as soon as you say its name?", 
answer: "silence", 
}, { 
riddle: "I have keys, but no locks and space, and no rooms. You can enter, but you can’t go outside. What am I?",
Answer: "keyboard",
}, {
riddle: "What gets wet while drying?",
answer: "towel",
}, {
riddle: "This belongs to you, but everyone else uses it.",
answer: "name",
}, {
riddle: "First, think of the color of the clouds. Next, think of the color of snow. Now, think of the color of a bright full moon. Now answer quickly what do cows drink?",
answer: "water",
}, {
riddle: "Which word in the dictionary is always spelled incorrectly?", 
answer: "incorrectly",
}, {
riddle: "What can you hold in your right hand, but never in your left hand?",
answer: "left hand",
}, {
riddle: "What room do ghosts avoid?",
answer: "living room",
}, {
riddle: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
answer: "fire",
}, {
riddle: "What has six faces, but does not wear makeup, has twenty-one eyes, but cannot see? What is it?",
answer: "dice",
}];

const randomPictureEvil = (array) => {
    let image = array[Math.floor(Math.random() * array.length)];
    document.getElementById("evil-image").src = image;
    return image;
    
};

document.querySelector(".modal-close-1").addEventListener("click", () => {
    let modal = document.querySelector("#myModal1");
    modal.style.display = "none";
    document.querySelector("#dice").disabled = false;
});

document.querySelector(".modal-close-2").addEventListener("click", () => {
    let modal = document.querySelector("#myModal2");
    modal.style.display = "none";
    document.querySelector("#dice").disabled = false;
});

document.querySelector(".modal-close-4").addEventListener("click", () => {
    let modal = document.querySelector("#myModal4");
    modal.style.display = "none";
    document.querySelector("#dice").disabled = false;
});

document.querySelector(".modal-close").addEventListener("click", () => {
    let modal = document.querySelector("#myModal");
    modal.style.display = "none";
    document.querySelector("#dice").disabled = false;
});

document.querySelector(".modal-close-3").addEventListener("click", () => {
    let modal = document.querySelector("#myModal3");
    modal.style.display = "none";
    document.querySelector("#dice").disabled = false;
});

const greengame = () => {
    let guesses = 0;
    let randomImage = randomPicture(images);
    displayModal(myModal);
    winOrLose(randomImage.name, myModal, guesses);
}

const redgame = () => {
    let evilImage = ["./img/red-game/ballrog.jpg", "./img/red-game/nazgul.png", "./img/red-game/saruman.png"]
    randomPictureEvil(evilImage);   
    displayModal(myModal1);
}

const bluegame = () => {
    displayModal(myModal2);
    memoryGame();
}

const orangeGame = () => {
    let guesses = 0;
    let randomRiddle = getRandomRiddle(riddles);
    displayModal(myModal3);
    guessRiddleAnswer(randomRiddle.answer,myModal3,guesses);
}

const yellowGame = () => {
    displayModal(myModal4);
    puzzleGame();
}


const differentGames = (element) => {

    switch (element) {
        case ("bluesquare"):
            bluegame();
            break;
        case ("yellowsquare"):
           yellowGame();
            break;
        case ("greensquare"):
            greengame();           
            break;
        case ("orangesquare"):
            orangeGame();
            break;
        case ("purplesquare"):
            redgame()
            break;
    }
};

export { differentGames }