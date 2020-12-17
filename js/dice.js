const rollDice = (randomNumber) => {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    die.dataset.roll = randomNumber;
  });
}

const toggleClasses = (die) => {
die.classList.toggle("odd-roll");
die.classList.toggle("even-roll");
}

export { rollDice };
export { toggleClasses };  
  
