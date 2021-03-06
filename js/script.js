import {
	rollDice
} from "../js/dice.js";
import {
	differentGames
} from "../js/games.js";

import { 
	winner
} from "../js/games.js";

let partyPeople = [];
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let scorePlayerThree = 0;
let scorePlayerFour = 0;
let indexGame = 0;
const playersArray = [];

function Player() {
	this.id = "";
	this.score = 0;
	this.position = 0;
	//this.ball = {};
	this.ball = "";
	this.currentDice = 0;
	this.turn = false;
	this.currentTile = "";
}

// start button
document.querySelector("#start").addEventListener("click", () => {

	let amountPeople = 0;
	do { 
		amountPeople = prompt("How many people are playing?", "1 to 4 players.")
	} while (amountPeople > 4 || amountPeople < 1 || isNaN(amountPeople));

	partyPeople.push(amountPeople);
	
	document.querySelector("#party-people").innerHTML = `There are ${amountPeople} people playing.`;

	let addBalls = ['addRedBall', 'addBrownBall', 'addVioletBall', 'addBlackBall'];

	for (let i = 0; i < amountPeople; i++) {
		let addBall = addBalls[i];
		addBall = document.createElement("p");
		addBall.setAttribute("class", addBalls[i]);
		document.getElementById('0').append(addBall);
		//for player Object
		let newPlayer = new Player();
		newPlayer.ball = addBalls[i];
		playersArray.push(newPlayer);
	}

	document.querySelector("#start").disabled = true;

})


// roll dice button
document.querySelector("#dice").addEventListener("click", () => {

	let partyPeopleGame = Number(partyPeople[0]);
	
	let diceRoll = Math.floor(Math.random() * (6 - 1) + 1);
	rollDice(diceRoll);

	// player one
	if (indexGame == 0) {

		let child = document.querySelector(".addRedBall");

		document.getElementById(`${scorePlayerOne}`).removeChild(child);
		let addRedBall = document.createElement("p");

		scorePlayerOne += diceRoll;

		if (scorePlayerOne >= 26) { 

			// Add highscore option when play alone 

			playersArray[indexGame].score += 5;
			winner(playersArray);
			//let winnerId = playersArray[0].id + 1; 
			let winnerId = indexGame + 1;
			alert("The game is finished! Player " + winnerId + " wins, with a score of " + playersArray[indexGame].score)
		} 

		addRedBall.setAttribute("class", "addRedBall");
		document.getElementById(`${scorePlayerOne}`).appendChild(addRedBall);

		document.querySelector("#player-one").innerHTML = `Player one just threw ${diceRoll} and is on tile ${scorePlayerOne}.`
		//indexGame ++;
		let colorClass = document.getElementById(scorePlayerOne).className;
		//for player object
		playersArray[indexGame].id = "player-one";
		playersArray[indexGame].currentTile = colorClass;
		differentGames(colorClass, playersArray[indexGame]);
		indexGame++;
		if (indexGame == partyPeopleGame) {
			indexGame = 0;
			return;
		}
	}

	// player Two
	else if (indexGame == 1 && indexGame !== partyPeopleGame) {
		let child = document.querySelector(".addBrownBall");
		document.getElementById(`${scorePlayerTwo}`).removeChild(child);

		let addBrownBall = document.createElement("p");
		addBrownBall.setAttribute("class", "addBrownBall");

		scorePlayerTwo += diceRoll;
			
		if (scorePlayerTwo >= 26) { 
			playersArray[indexGame].score += 5;
			winner(playersArray);
			//let winnerId = playersArray[0].id + 1; 
			let winnerId = indexGame + 1;
			alert("The game is finished! Player " + winnerId + " wins, with a score of " + playersArray[indexGame].score)
		} 

		document.getElementById(`${scorePlayerTwo}`).appendChild(addBrownBall);
		document.querySelector("#player-two").innerHTML = `Player two just threw ${diceRoll} and is on tile ${scorePlayerTwo}.`
		//indexGame ++;
		let colorClass = document.getElementById(scorePlayerTwo).className;
		//for player object
		playersArray[indexGame].id = "player-two";
		playersArray[indexGame].currentTile = colorClass;
		differentGames(colorClass, playersArray[indexGame]);
		indexGame++;
		if (indexGame == partyPeopleGame) {
			indexGame = 0;
			return;
		}
	}

	// player Three
	else if (indexGame == 2 && indexGame !== partyPeopleGame) {
		let child = document.querySelector(".addVioletBall");
		document.getElementById(`${scorePlayerThree}`).removeChild(child);

		let addVioletBall = document.createElement("p");
		addVioletBall.setAttribute("class", "addVioletBall");

		scorePlayerThree += diceRoll;
	
		if (scorePlayerThree >= 26) { 
			playersArray[indexGame].score += 5;
			winner(playersArray);
			//let winnerId = playersArray[0].id + 1; 
			let winnerId = indexGame + 1;
			alert("The game is finished! Player " + winnerId + " wins, with a score of " + playersArray[indexGame].score)
		} 

		document.getElementById(`${scorePlayerThree}`).appendChild(addVioletBall);
		document.querySelector("#player-three").innerHTML = `Player three just threw ${diceRoll} and is on tile ${scorePlayerThree}.`
		//indexGame ++;
		let colorClass = document.getElementById(scorePlayerThree).className;
		//for player object
		playersArray[indexGame].id = "player-three";
		playersArray[indexGame].currentTile = colorClass;
		differentGames(colorClass, playersArray[indexGame]);
		indexGame++;
		if (indexGame == partyPeopleGame) {
			indexGame = 0;
			return;
		}
	}

	// player Four
	else if (indexGame == 3 && indexGame !== partyPeopleGame) {
		let child = document.querySelector(".addBlackBall");
		document.getElementById(`${scorePlayerFour}`).removeChild(child);

		let addBlackBall = document.createElement("p");
		addBlackBall.setAttribute("class", "addBlackBall");

		scorePlayerFour += diceRoll;
	
		if (scorePlayerFour >= 26) { 
			playersArray[indexGame].score += 5;
			winner(playersArray);
			//let winnerId = playersArray[0].id + 1; 
			let winnerId = indexGame + 1;
			alert("The game is finished! Player " + winnerId + " wins, with a score of " + playersArray[indexGame].score)
		} 

		document.getElementById(`${scorePlayerFour}`).appendChild(addBlackBall);
		document.querySelector("#player-four").innerHTML = `Player four just threw ${diceRoll} and is on tile ${scorePlayerFour}.`
		//indexGame ++;
		let colorClass = document.getElementById(scorePlayerFour).className;
		//for player object
		playersArray[indexGame].id = "player-four";
		playersArray[indexGame].currentTile = colorClass;
		differentGames(colorClass, playersArray[indexGame]);
		indexGame++;
		if (indexGame == partyPeopleGame) {
			indexGame = 0;
			return;
		}
	}

	console.log(playersArray);
})

document.querySelector("#reset").addEventListener("click", () => {
	location.reload();
})