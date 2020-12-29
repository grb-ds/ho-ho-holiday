function getRandomRiddle (array) {
    
    let riddle = array[Math.floor(Math.random() * array.length)];
    document.getElementById("riddle-box").innerText = riddle.riddle;
    return riddle;
}
export { getRandomRiddle };