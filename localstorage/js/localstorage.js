function clearUserData() {
  localStorage.clear();
}

function saveUserData() {
  const userData = {};
  localStorage.setItem(
    document.getElementById("last-name"),
    JSON.stringify(userData),
  );
}

function loadUserData() {
  const lUser = JSON.parse(
    localStorage.getItem(document.getElementById("input-search-query")),
  );
  console.log(lUser);
}

