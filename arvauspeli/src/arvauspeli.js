function guess(event) {
    const correct = Math.floor(Math.random() * 10) + 1;
    const maxGuesses = 3;
    let timesGuessed = 0;
    let wins = 0;
    let losses = 0;
    let guesses = [];
    const userGuess = event.target.value;
    if (userGuess == correct) {
        alert("Voitit pelin!");
        wins++;
    } else {
        guesses.push(userGuess);
        timesGuessed++;
        alert("Väärin! Yritä uudestaan.");
    } 
    guesses.push(userGuess);
    document.getElementById("voitot").innerText = "Voitot: " + wins;
    document.getElementById("tappiot").innerText = "Tappiot: " + losses;
    document.getElementById("arvatutNumerot").innerText = "Arvatut numerot: " + guesses.join(", ");
}