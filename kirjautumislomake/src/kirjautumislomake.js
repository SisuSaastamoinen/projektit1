function validateForm() {
    let x = document.getElementById["username"].value;
    if (x == "") {
        alert("Nimi ei voi olla tyhjä.")
        return false;
    }
    let y = document.getElementById["password"].value;
    if (y == "") {
        alert("Salasana ei voi olla tyhjä.")
        return false;
    }
    let a1 = document.getElementById["userOptionRadio1a"].value;
    let a2 = document.getElementById["userOptionRadio2a"].value;
    let a3 = document.getElementById["userOptionRadio3a"].value;
    if (a1 == unchecked && a2 == unchecked && a3 == unchecked) {
        alert("Valitse käyttäjä tyyppi.")
        return false;
    }
    let b1 = document.getElementById["userOptionCheckbox1b"].value;
    let b2 = document.getElementById["userOptionCheckbox2b"].value;
    let b3 = document.getElementById["userOptionCheckbox3b"].value;
    if (b1 == unchecked && b2 == unchecked && b3 == unchecked) {
        alert("Täytä mielipide.")
        return false;
    }
    let q = document.getElementById["parannusehdotukset"].value;
    if (q == "") {
        alert("Kirjoitsa parannusehdotus.")
        return false;
    }
    let w = document.getElementById["lempiaine"].value;
    if (w == "eiValintaa") {
        alert("Valitse lempi aine.")
        return false;
    }
}