function validateForm() {
    let x = document.getElementById("username").value;
    if (x == "") {
        alert("Nimi ei voi olla tyhjä.")
        return; 
    }
    let y = document.getElementById("password").value;
    if (y == "") {
        alert("Salasana ei voi olla tyhjä.")
        return; 
    }
    let a1 = document.getElementById("userOptionRadio1a").checked;
    let a2 = document.getElementById("userOptionRadio2a").checked;
    let a3 = document.getElementById("userOptionRadio3a").checked;
    if (!a1 && !a2 && !a3) {
        alert("Valitse käyttäjä tyyppi.")
        return;
    }
    let b1 = document.getElementById("userOptionCheckbox1b").checked;
    let b2 = document.getElementById("userOptionCheckbox2b").checked;
    let b3 = document.getElementById("userOptionCheckbox3b").checked;
    if (!b1 && !b2 && !b3) {
        alert("Täytä mielipide.")
        return;
    }
    let q = document.getElementById("parannusehdotukset").value;
    if (q == "") {
        alert("Kirjoita parannusehdotus.")
        return;
    }
    let w = document.getElementById("lempiaine").value;
    if (w == "eiValintaa") {
        alert("Valitse lempi aine.")
        return;
    }
}
function emailIsValid(email) { return/^[^\s@]+@[^\s@]+$/.test(email)}

function validateForm1() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
  
    if (!emailIsValid(email)) {
      alert("Anna kelvollinen sähköpostiosoite.");
      emailInput.focus();
      return false;
    }
    return true;
}
