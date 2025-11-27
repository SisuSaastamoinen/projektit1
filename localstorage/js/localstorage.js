function clearUserData() {
  localStorage.clear();
}

function saveUserData() {
    const userData = {
        Etunimi: document.getElementById("first-name").value,
        Sukunimi: document.getElementById("last-name").value,
        Osoite: document.getElementById("address").value,
        Postinumero: document.getElementById("postcode").value,
        Toimipaikka: document.getElementById("post-area").value,
        Puhelin: 

    }
    localStorage.setItem(document.getElementById("last-name"), JSON.stringify(userData));
};

function loadUserData() {
   const lUser = JSON.parse(localStorage.getItem(document.getElementById("input-search-query")));
    console.log(lUser);
};