let riddles = [{
    riddle: "What has roots as nobody sees, is taller than trees, Up, up it goes, And yet never grows?",
    answer: "A mountain",
}, {
    riddle: "Thirty white horses on a red hill,First they champ,Then they stamp,Then they stand still.",
    answer: "Teeth",
}, {
    riddle: "Voiceless it cries,Wingless flutters,Toothless bites,Mouthless mutters.",
    answer: "Wind"
}, {
    riddle: "An eye in a blue face, Saw an eye in a green face. That eye is like to this eye. Said the first eye. But in low place,Not in high place.",
    answer: "The sun",
}, {
    riddle: "It cannot be seen, cannot be felt, Cannot be heard, cannot be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, kills laughter.",
    Answer: "Dark",
}, {
    riddle: "A box without hinges, key, or lid, Yet golden treasure inside is hid.",
    answer: "An egg",
}, {
    riddle: "Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking.",
    answer: "Fish",
}, {
    riddle: "This thing all things devours: Birds, beasts, trees, flowers; Gnaws iron, bites steel; Grinds hard stones to meal; Slays king, ruins town, And beats high mountain down.",
    answer: "Time",
}, {
    riddle: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    answer: "A candle",
}, {
    riddle: "What can you break, even if you never pick it up or touch it?",
    answer: "A promise",
}, {
    riddle: "I shave every day, but my beard stays the same. What am I?",
    answer: "A barber",
}, {
    riddle: "What can’t talk but will reply when spoken to?",
    answer: "An echo",
}, {
    riddle: "The more of this there is, the less you see. What is it?",
    answer: "Darkness",
},{ 
riddle: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
answer: "A map",
}, {
riddle: "What disappears as soon as you say its name?", 
answer: "Silence", 
}, { 
riddle: "I have keys, but no locks and space, and no rooms. You can enter, but you can’t go outside. What am I?",
Answer: "A keyboard",
}, {
riddle: "What gets wet while drying?",
answer: "A towel",
}, {
riddle: "This belongs to you, but everyone else uses it.",
answer: "Your name",
}, {
riddle: "First, think of the color of the clouds. Next, think of the color of snow. Now, think of the color of a bright full moon. Now answer quickly what do cows drink?",
answer: "Water",
}, {
riddle: "Which word in the dictionary is always spelled incorrectly?", 
answer: "Incorrectly",
}, {
riddle: "What can you hold in your right hand, but never in your left hand?",
answer: "Your left hand",
}, {
riddle: "What room do ghosts avoid?",
answer: "The living room",
}, {
riddle: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
answer: "Fire",
}, {
riddle: "What has six faces, but does not wear makeup, has twenty-one eyes, but cannot see? What is it?",
answer: "A dice",
}];

function getRandomRiddle (array) {
    let riddle = array[Math.floor(Math.random() * array.length)];
    document.getElementById("riddle-box").innerText = riddle.riddle;
    return riddle;
}
export { getRandomRiddle };





