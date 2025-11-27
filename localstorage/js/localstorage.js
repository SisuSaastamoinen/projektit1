let userData = {};
addListeners();

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
    document.getElementById("last-name").value,
    JSON.stringify(userData),
  );
  console.log(`User data-JS object: ${userData}
userData as JSON: ${JSON.stringify(userData)}.`);
  console.log("Data saved to localStorage");
}

function addListeners() {
  document
    .querySelector("#save-storage-button")
    .addEventListener("click", saveUserData);
  document
    .querySelector("#delete-specific-button")
    .addEventListener("click", removeSpecificItem);
}

function removeSpecificItem() {
  localStorage.removeItem(document.querySelector("#input-delete-key").value);
}

function loadUserData() {
  const lUser = JSON.parse(
    localStorage.getItem(document.getElementById("input-search-query")),
  );
  console.log(lUser);
}
