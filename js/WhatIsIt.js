const randomPicture = (array) => {
    let image = array[Math.floor(Math.random() * array.length)];
    document.getElementById("image").src = image.src;
    return image;
};



export {
    randomPicture
};

let guesses = 0;

const winOrLose = (answer, modal, guesses) => {

    document.getElementById("submit").addEventListener("click", (event) => {
        let guess = document.getElementById("guess").value;
        console.log(guess);

        event.preventDefault();

        if (guess == answer) {
            alert("You win! Nice, now you get 3 points!");
            modal.style.display = "none";
        } else if (guesses > 3) {
            alert("You lose, the answer was " + answer + ". Sadly, you don't get points!");
            modal.style.display = "none";
        } else {
            alert("You have " + (4 - guesses) + " left.")
            guesses++;
        }
    });

};

export {
    winOrLose
};


const guessRiddleAnswer = (answer, modal, guesses) => {
    document.getElementById("submitRiddle").addEventListener("click", (event) => {
        event.preventDefault();

        let guess = document.getElementById("guessRiddle").value;
    

        if (guess == answer) {
            alert("You win! Nice, now you get 3 points!");
            modal.style.display = "none";
        } else if (guesses > 3) {
            alert("You lose, the answer was " + answer + ". Sadly, you don't get points!");
            modal.style.display = "none";
        } else {
            alert("You have " + (4 - guesses) + " left.")
            guesses++;
        }
    });

};

export { guessRiddleAnswer };

const displayModal = (modal) => {
    // Get the modal
    modal.style.display = "block";
}

export {
    displayModal
};

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



// let randomImage = randomPicture(images);


// document.querySelector(".click").addEventListener("click", () => {
//     displayModal(myModal)
// });




// const gameOne = (input, image, modal, guesses) => {
//     document.getElementById("submit").addEventListener("click", (event) => {
//         event.preventDefault();
//         winOrLose(input, image, modal, guesses);
//     });
// };
