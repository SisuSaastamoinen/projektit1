let userData = {};
addListeners();

function clearUserData() {
  localStorage.clear();
}

function saveUserData() {
  //prettier-ignore
  userData = {
    firstName:	 document.getElementById("first-name").value,
    lastName:		 document.getElementById("last-name").value,
    address:		 document.getElementById("address").value,
    postinumero: document.getElementById("postcode").value,
    postArea:		 document.getElementById("post-area").value,
    phone:			 document.getElementById("phone").value,
    email:			 document.getElementById("email").value,
  };
  localStorage.setItem(
    document.getElementById("last-name").value,
    JSON.stringify(userData),
  );
  console.log(
    `User data-JS object: ${userData} userData as JSON: ${JSON.stringify(userData)}.`,
  );
  console.log("Data saved to localStorage");
}

function addListeners() {
  document
    .querySelector("#save-storage-button")
    .addEventListener("click", saveUserData);
  document
    .querySelector("#delete-specific-button")
    .addEventListener("click", removeSpecificItem);
  document
    .querySelector("#clear-storage-button")
    .addEventListener("click", clearUserData);
  document
    .querySelector("#load-storage-button")
    .addEventListener("click", loadUserData);
}

function removeSpecificItem() {
  localStorage.removeItem(document.querySelector("#input-delete-key").value);
}

function loadUserData() {
  const lUser = JSON.parse(
    localStorage.getItem(document.getElementById("input-search-query").value),
  );
  console.log(lUser);
}
