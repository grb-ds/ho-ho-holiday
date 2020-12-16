let partyPeople = [];
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let scorePlayerThree = 0;
let scorePlayerFour = 0;
let indexStart = 0;
let indexGame = 0;
const playersArray = [];

const squares = [
	{ name: "bluesquare", value: 5 },
	{ name: "yellowsquare", value: 4 },
	{ name: "greensquare", value: 3 },
	{ name: "orangesquare", value: 2 },
	{ name: "purplesquare", value: 0 },
];

const balls = [
	{ name: "addRedBall", class: ".addRedBall", position: 0 },
	{ name: "addBrownBall", class: ".addBrownBall", position: 0 },
	{ name: "addVioletBall", class: ".addVioletBall", position: 0 },
	{ name: "addBlackBall", class: ".addBlackBall", position: 0 },
];

function Ball () {
	this.name = "";
	this.class = "";
	this.position = 0;
}

function Player(id) {
	this.id = id
	this.nick = "";
	this.score = 0;
	this.position = 0;
	this.ball = {};
	this.currentDice = 0;
}

const createPlayers = (amount) => {

	for (let i = 0; i < amount; i++){
		let newPlayer = new Player(i);
		newPlayer.ball = balls[i];
		playersArray.push(newPlayer);
	}
	console.log(playersArray);
}

const getScore = (position) => {
	let className = document.getElementById(position).className;
	let currentSquare = squares.find(element => element.name === className);
	console.log("currentSquare",currentSquare);
	return currentSquare.value;
}

const moveBall = (ball, newPosition) => {
	//let child = document.querySelector(".addRedBall");
	let ballChild = document.querySelector(ball.class);
	document.getElementById(ball.position).removeChild(ballChild);

	let addBall = document.createElement("p");
	addBall.setAttribute("class", ball.name);
    document.getElementById(newPosition).appendChild(addBall);
    ball.position = newPosition;
}

const drawBalls = () => {
	for (let i = 0; i < playersArray.length; i++) {
		let addBall;
		addBall = document.createElement("p");
		addBall.setAttribute("class", playersArray[i].ball.name);
		document.getElementById('0').appendChild(addBall);
	}
}

const playTurn = (player) => {

	let diceRoll = getRandomNumber(1,playersArray.length);
	console.log("diceRoll", diceRoll);
	player.currentDice = diceRoll;
	player.position += diceRoll;
	moveBall(player.ball, player.position);
	player.score += getScore(player.position);
	console.log(player);
}

const play = () => {
	let index = 0;
	console.log("PLAY");
	/*while (index < playersArray.length){
		console.log("playerIndex",index);
		playTurn(playersArray[index]);
		index++;
	}*/
	playTurn(playersArray[0]);
	playTurn(playersArray[1]);
	playTurn(playersArray[2]);
	playTurn(playersArray[3]);
}

// start button
document.querySelector("#start").addEventListener("click", () => {
	let amountPeople = prompt("How many people are playing?", "1 to 4 players.");
	partyPeople.push(amountPeople);
	document.querySelector("#party-people").innerHTML = `There are ${amountPeople} people playing.`

	createPlayers(amountPeople);
	drawBalls();

	console.log(playersArray);
})

// roll dice button
document.querySelector("#dice").addEventListener("click", play);

document.querySelector("#reset").addEventListener("click", () =>{
	location.reload();
})

function rollDice() {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach(die => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
    });
  }
  
  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }
  
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.getElementById("dice").addEventListener("click", rollDice);