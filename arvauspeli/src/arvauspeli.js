let correct = Math.floor(Math.random() * 10) + 1;
const maxGuesses = 3;
let timesGuessed = 0;
let wins = 0;
let losses = 0;

function guess(event) {
    const userGuess = parseInt(event.target.value);
    if (timesGuessed >= maxGuesses) {
        alert("Peli on jo päättynyt! Aloita uusi peli.");
        return;
    }
    timesGuessed++;
    document.getElementById("arvaukset").innerHTML = "Arvausten lukumäärä: " + timesGuessed;
    let guessedNumbers = document.getElementById("arvatutNumerot").innerHTML;
    guessedNumbers += userGuess + " ";
    document.getElementById("arvatutNumerot").innerHTML = guessedNumbers;
    if (userGuess === correct) {
        wins++;
        document.getElementById("voitot").innerHTML = "Voitot: " + wins;
        alert("Arvasit oikein! Oikea numero oli " + correct + ".");
        resetGame();
    } else {
        if (timesGuessed === maxGuesses) {
            losses++;
            document.getElementById("tappiot").innerHTML = "Tappiot: " + losses;
            alert("Peli päättyi! Oikea numero oli " + correct + ".");
            resetGame();
        } else {
            alert("Väärin! Yritä uudelleen. Sinulla on " + (maxGuesses - timesGuessed) + " arvausta jäljellä.");
        }
    }
}

function resetGame() {
    correct = Math.floor(Math.random() * 10) + 1;
    timesGuessed = 0;
    document.getElementById("arvaukset").innerHTML = "Arvausten lukumäärä: " + timesGuessed;
    document.getElementById("arvatutNumerot").innerHTML = "Arvatut numerot: ";
}