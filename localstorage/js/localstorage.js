<<<<<<< HEAD
function clearStorage() {
    localStorage.clear();
};
=======
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
>>>>>>> 48f46cabe409bb27df24c7b299c4c87373c1c759
