document.querySelector("#start").addEventListener("click", () => {
	let playerDotOne = document.createElement("p");
	playerDotOne.innerHTML =  '<span class="dot"></span>';
	document.getElementById("0").appendChild(playerDotOne);
})

let scorePlayerOne = 0;
document.querySelector("#dice").addEventListener("click", () => {
	if (scorePlayerOne !== 0){
		document.getElementById(`${scorePlayerOne}`).innerHTML = `${scorePlayerOne}`
		let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
		scorePlayerOne = scorePlayerOne + randomNumber;
		document.getElementById(`${scorePlayerOne}`).innerHTML =  '<span class="dot"></span>';
		const tileClass = document.getElementById(`${scorePlayerOne}`).className;
		console.log(tileClass);
	}
	else if(scorePlayerOne == 0){
		let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
		scorePlayerOne = scorePlayerOne + randomNumber;
		document.getElementById(`${scorePlayerOne}`).innerHTML =  '<span class="dot"></span>';
		const tileClass = document.getElementById(`${scorePlayerOne}`).className;
		console.log(tileClass);
	}
	else if(scorePlayerOne > 25){
		scorePlayerOne == 25;
		document.getElementById(`${scorePlayerOne}`).innerHTML =  '<span class="dot"></span>';
	}

})
