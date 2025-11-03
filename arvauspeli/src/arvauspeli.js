let correct = Math.floor(Math.random() * 10) + 1;
const maxGuesses = 3;
const GAME_END = 999;
let timesGuessed = 0;
let wins = 0;
let losses = 0;
let gameInfo = document.getElementById("gameInfo");
makeButtons();
let buttonArray = Array.from(document.getElementsByClassName("nappi"));
// ylläolevat muuttujat pelifunktion scopen ulkopuolella

function playGame(event) {
    const userGuess = parseInt(event.target.value);
    if (timesGuessed === GAME_END) {
        return; // jos peli on jo loppunut, niin ei muuteta gameInfoa, returnataan suoraan
    }
    if (timesGuessed === maxGuesses) {
        gameInfo.innerHTML = `Peli ohi! Oikea numero oli ${correct}. Aloita uusi peli.`;
        return; // jos arvausmäärä on täynnä, ei sallita uusia arvauksia, returnataan taas
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
        buttonArray.map((btn) => {
            if (parseInt(btn.value) !== correct) {
                btn.disabled = true;
            } else {
                btn.style.backgroundColor = "green";
            }
        });
        timesGuessed = GAME_END; // asetetaan peli päättyneeksi 
        return; // return pois funktiosta jälleen kerran
    } else {
        if (timesGuessed === maxGuesses) {
            losses++;
            document.getElementById("tappiot").innerHTML = `Tappiot: ${losses}`;
            gameInfo.innerHTML = `Peli ohi! Oikea numero oli ${correct}.`;
            buttonArray.forEach((btn) => btn.disabled = true);
            timesGuessed = GAME_END; // asetetaan peli päättyneeksi
        } else if (userGuess > correct) {
            gameInfo.innerHTML = `Väärin! Arvauksesi ${userGuess} on liian suuri.`;
            buttonArray.map((btn) => {
                if (parseInt(btn.value) >= userGuess) {
                    btn.disabled = true;
                }
            });
        } else {
            gameInfo.innerHTML = `Väärin! Arvauksesi ${userGuess} on liian pieni.`;
            buttonArray.map((btn) => {
                if (parseInt(btn.value) <= userGuess) {
                    btn.disabled = true;
                }
            });
        }
    }
}

function resetGame() {
    gameInfo.innerHTML = "Uusi peli aloitettu! Arvaa numero väliltä 1-10.";
    correct = Math.floor(Math.random() * 10) + 1;
    timesGuessed = 0;
    document.getElementById("arvaukset").innerHTML = `Arvausten lukumäärä: ${timesGuessed}`;
    document.getElementById("arvatutNumerot").innerHTML = "Arvatut numerot: ";
    buttonArray = Array.from(document.getElementsByClassName("nappi"));
    buttonArray.map((btn) => {
        btn.style.backgroundColor = "";
        btn.disabled = false;
    });
}

function makeButtons() { // tehdään napit dynaamisesti, jottei html-koodissa olisi niin paljon toistoa
    const buttonWrapper = document.getElementById("buttonWrapper");
    for (let i = 1; i <= 10; i++) {
        if (i == 6) {
            const br = document.createElement("br");
            buttonWrapper.appendChild(br);
        }
        const button = document.createElement("button");
        button.innerText = i;
        button.value = i;
        button.onclick = playGame;
        button.className = "nappi";
        buttonWrapper.appendChild(button);
    }
}