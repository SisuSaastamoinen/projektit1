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
        document.getElementById("voitot").innerText = "Voitot: " + wins;
        return;
    } else if (timesGuessed < 3) {
        guesses.push(userGuess);
        timesGuessed++;
        alert("Väärin! Yritä uudestaan.");
    } else {
        alert("Hävisit pelin! Oikea numero oli " + correct + ".");
    } 
    losses++;
    document.getElementById("tappiot").innerText = "Tappiot: " + losses;
}