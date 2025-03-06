let coinFlip;
let streak = 0;

do {
    coinFlip = Math.floor(Math.random() * 2);

    if (coinFlip === 0) {
        console.log("Heads");
        streak++; 
    } else {
        console.log("Tails");
        console.log(`Your streak of consecutive Heads was: ${streak}`);
    }

} while (coinFlip === 0); 