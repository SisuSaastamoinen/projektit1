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
}