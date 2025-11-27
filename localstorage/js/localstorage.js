function clearStorage() {
  localStorage.clear();
}
function addItem() {
  const userData = {
    first_name: "",
    last_name: "",
  };
  const firstNameValue = document.querySelector("#first-name").value;
  const firstNameKey = "first_name";
  userData[firstNameKey] = firstNameValue;
  const userStringified = JSON.stringify(userData);
  JSON.parse(userStringified);
}
