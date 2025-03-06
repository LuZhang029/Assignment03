let num = parseInt(prompt("Enter a number to start the countdown from:"));
if (!isNaN(num) && num >= 0) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("Please enter a valid non-negative number.");
}