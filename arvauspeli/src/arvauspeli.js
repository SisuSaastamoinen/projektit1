let correct = Math.floor(Math.random() * 10) + 1;
const maxGuesses = 3;
const GAME_END = 999;
let timesGuessed = 0;
let wins = 0;
let losses = 0;
let gameInfo = document.getElementById("gameInfo");

function guess(event) {
    const userGuess = parseInt(event.target.value);
    if (timesGuessed === GAME_END) {
        return;
    }
    if (timesGuessed === maxGuesses) {
        gameInfo.innerHTML = `Peli ohi! Oikea numero oli ${correct}. Aloita uusi peli.`;
        return;
    }
    timesGuessed++;
    document.getElementById("arvaukset").innerHTML = `Arvausten lukumäärä: ${timesGuessed}`;
    let guessedNumbers = document.getElementById("arvatutNumerot").innerHTML;
    guessedNumbers += userGuess + " ";
    document.getElementById("arvatutNumerot").innerHTML = guessedNumbers;
    if (userGuess === correct) {
        wins++;
        document.getElementById("voitot").innerHTML = `Voitot: ${wins}`;
        gameInfo.innerHTML = `Arvasit oikein! Oikea numero oli ${correct}.`;
        timesGuessed = GAME_END; 
        return;
    } else {
        if (timesGuessed === maxGuesses) {
            losses++;
            document.getElementById("tappiot").innerHTML = `Tappiot: ${losses}`;
            gameInfo.innerHTML = `Peli ohi! Oikea numero oli ${correct}.`;
        } else {
            gameInfo.innerHTML = `Väärin! Yritä uudelleen. Sinulla on ${maxGuesses - timesGuessed} arvausta jäljellä.`;
        }
    }
}

function resetGame() {
    gameInfo.innerHTML = "Uusi peli aloitettu! Arvaa numero väliltä 1-10.";
    correct = Math.floor(Math.random() * 10) + 1;
    timesGuessed = 0;
    document.getElementById("arvaukset").innerHTML = `Arvausten lukumäärä: ${timesGuessed}`;
    document.getElementById("arvatutNumerot").innerHTML = "Arvatut numerot: ";
}