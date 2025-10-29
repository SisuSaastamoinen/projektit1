function guess() {
    const userInput = document.getElementsByName("button");
    console.log(userInput);
    const correct = Math.floor(Math.random() * 10) + 1;
    let guesses = [];
    let wins = 0;
    let losses = 0;
}