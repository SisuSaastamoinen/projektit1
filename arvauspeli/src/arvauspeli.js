function guess(event) {
    const userGuess = event.target.value;
    console.log(userGuess);
    const correct = Math.floor(Math.random() * 10) + 1;
    console.log(correct);
    let guesses = [];
    let wins = 0;
    let losses = 0;
}