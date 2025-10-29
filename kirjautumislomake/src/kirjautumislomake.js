function validateForm() {
    let x = document.forms["username"].value;
    if (x == "") {
        alert("Nimi ei voi olla tyhjä.")
        return false;
    }
    let y = document.forms["password"].value;
    if (y == "") {
        alert("Salasana ei voi olla tyhjä.")
        return false;
    }
    let a1 = document.forms["userOptionRadio1a"].value;
    let a2 = document.forms["userOptionRadio2a"].value;
    let a3 = document.forms["userOptionRadio3a"].value;
    if (a1 == unchecked && a2 == unchecked && a3 == unchecked) {
        alert("Valitse käyttäjä tyyppi.")
        return false;
    }
    let b1 = document.forms["userOptionCheckbox1b"].value;
    let b2 = document.forms["userOptionCheckbox2b"].value;
    let b3 = document.forms["userOptionCheckbox3b"].value;
    if (b1 == unchecked && b2 == unchecked && b3 == unchecked) {
        alert("Täytä mielipide.")
        return false;
    }
}