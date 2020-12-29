import { scoreboard } from "../js/scores.js";

const memoryGame = (player) => {
        //card options
        const cardArray = [
        {
            name: 'balrog',
            img: './images/images-memory-game/balrog.png'
        },
        {
            name: 'gandalf',
            img: './images/images-memory-game/gandalf.png'
        },
        {
            name: 'aragorn',
            img: './images/images-memory-game/aragorn.png'
        },
        {
            name: 'urukhai',
            img: './images/images-memory-game/urukhai.png'
        },
        {
            name: 'frodo',
            img: './images/images-memory-game/frodo.png'
        },
        {
            name: 'arwen',
            img: './images/images-memory-game/arwen.png'
        },
        {
            name: 'balrog',
            img: './images/images-memory-game/balrog.png'
        },
        {
            name: 'gandalf',
            img: './images/images-memory-game/gandalf.png'
        },
        {
            name: 'aragorn',
            img: './images/images-memory-game/aragorn.png'
        },
        {
            name: 'urukhai',
            img: './images/images-memory-game/urukhai.png'
        },
        {
            name: 'frodo',
            img: './images/images-memory-game/frodo.png'
        },
        {
            name: 'arwen',
            img: './images/images-memory-game/arwen.png'
        }
    ]
    
        cardArray.sort(() => 0.5 - Math.random())
    
        const grid = document.querySelector('.grid')
        let cardsChosen = []
        let cardsChosenId = []
        let cardsWon = []
    
        //create your board
        function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', './images/images-memory-game/blank.png')
            card.setAttribute('data-id', i)
            card.setAttribute('id', 'memoryCards')
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
        }
    
        //check for matches
        function checkForMatch() {
        let cards = document.querySelectorAll('#memoryCards')
        let optionOneId = cardsChosenId[0]
        let optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', './images/images-memory-game/blank.png')
            cards[optionTwoId].setAttribute('src', './images/images-memory-game/blank.png')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', './images/images-memory-game/white.png')
            cards[optionTwoId].setAttribute('src', './images/images-memory-game/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', './images/images-memory-game/blank.png')
            cards[optionTwoId].setAttribute('src', './images/images-memory-game/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        if (cardsWon.length === cardArray.length/2) {
            alert('Congratulations! You found them all!');
            document.querySelector("#myModal2").style.display = 'none';
            player.score += scoreboard(player.currentTile);
            document.getElementById(player.id).innerHTML += ` With ${player.score} points`;
        }
        }
    
        //flip your card
        function flipCard () {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===2) {
            setTimeout(checkForMatch, 500)
        }
        } 
        createBoard()
}

export { memoryGame };
