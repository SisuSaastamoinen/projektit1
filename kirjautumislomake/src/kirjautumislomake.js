function validateForm() {
    let x = document.getElementById("username").value;
    if (x == "") {
        alert("Nimi ei voi olla tyhjä.")
    
    }
    let y = document.getElementById("password").value;
    if (y == "") {
        alert("Salasana ei voi olla tyhjä.")
    
    }
    let a1 = document.getElementById("userOptionRadio1a").checked;
    let a2 = document.getElementById("userOptionRadio2a").checked;
    let a3 = document.getElementById("userOptionRadio3a").checked;
    if (!a1 && !a2 && !a3) {
        alert("Valitse käyttäjä tyyppi.")
     
    }
    let b1 = document.getElementById("userOptionCheckbox1b").checked;
    let b2 = document.getElementById("userOptionCheckbox2b").checked;
    let b3 = document.getElementById("userOptionCheckbox3b").checked;
    if (!b1 && !b2 && !b3) {
        alert("Täytä mielipide.")
    
    }
    let q = document.getElementById("parannusehdotukset").value;
    if (q == "") {
        alert("Kirjoita parannusehdotus.")
    
    }
    let w = document.getElementById("lempiaine").value;
    if (w == "eiValintaa") {
        alert("Valitse lempi aine.")
    
    }
}