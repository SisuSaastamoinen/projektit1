const userData = {};

function clearUserData() {
  localStorage.clear();
}

function saveUserData() {
  userData = {
    etunimi: document.getElementById("first-name").value,
    sukunimi: document.getElementById("last-name").value,
    osoite: document.getElementById("address").value,
    postinumero: document.getElementById("postcode").value,
    toimipaikka: document.getElementById("post-area").value,
    puhelin: document.getElementById("phone").value,
    email: document.getElementById("email").value,
  };
  localStorage.setItem(
    document.getElementById("last-name"),
    JSON.stringify(userData),
  );
}

function addListeners() {
  document
    .querySelector("#save-storage-button")
    .addEventListener("click", saveUserData);
}

function loadUserData() {
  const lUser = JSON.parse(
    localStorage.getItem(document.getElementById("input-search-query")),
  );
  console.log(lUser);
}

