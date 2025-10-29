function validateForm() {
    let userNameInput = document.getElementById("username").value;
    console.log(userNameInput);
    if (userNameInput == "") {
        alert("Nimi ei voi olla tyhjä.")
    }
    let y = document.getElementById["password"].value;
    if (y == "") {
        alert("Salasana ei voi olla tyhjä.")
    }
    let a1 = document.getElementById["userOptionRadio1a"].value;
    let a2 = document.getElementById["userOptionRadio2a"].value;
    let a3 = document.getElementById["userOptionRadio3a"].value;
    console.log(a1, a2, a3);
    if (a1 == unchecked && a2 == unchecked && a3 == unchecked) {
        alert("Valitse käyttäjä tyyppi.")
    }
    let b1 = document.getElementById["userOptionCheckbox1b"].value;
    let b2 = document.getElementById["userOptionCheckbox2b"].value;
    let b3 = document.getElementById["userOptionCheckbox3b"].value;
    if (b1 == unchecked && b2 == unchecked && b3 == unchecked) {
        alert("Täytä mielipide.")
    }
    let q = document.getElementById["parannusehdotukset"].value;
    if (q == "") {
        alert("Kirjoitsa parannusehdotus.")
    }
    let w = document.getElementById["lempiaine"].value;
    if (w == "eiValintaa") {
        alert("Valitse lempi aine.")
    }
}