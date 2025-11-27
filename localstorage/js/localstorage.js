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
    Puhelin: document.getElementById("phone").value,
    Email: document.getElementById("email").value,
  };
  localStorage.setItem(
    document.getElementById("last-name"),
    JSON.stringify(userData),
  );
}

function onClick(event) {
  saveUserData();
}

function saveUserData() {
  //TODO
}

function addListeners() {
  document.querySelectorAll(".storage-button").forEach((button) => {
    button.addEventListener("click", onClick);
  });
}

function loadUserData() {
  const lUser = JSON.parse(
    localStorage.getItem(document.getElementById("input-search-query")),
  );
  console.log(lUser);
}

