async function fetchRandomUser() {
  const url = "https://randomuser.me/api/";
  try {
    const response = await fetch(url).then((res) => res.json());
    const result = response.results[0];
    console.log(result);

    const picture = document.querySelector("#userPicture");
    picture.src = result.picture.thumbnail;

    const name = document.querySelector("#name");
    name.innerText = `${result.name.first} ${result.name.last}`;

    const address = document.querySelector("#address");
    address.innerText = `${result.location.street.number} ${result.location.street.name}`;

    const postcodeAndCity = document.querySelector("#postcodeAndCity");
    postcodeAndCity.innerText = `${result.location.postcode} ${result.location.city}`;

    const stateAndCountry = document.querySelector("#stateAndCountry");
    stateAndCountry.innerText = `${result.location.state}, ${result.location.country}`;

    const email = document.querySelector("#email");
    email.innerText = result.email;

    const ssn = document.querySelector("#ssn");
    ssn.innerText = result.id.value;
  } catch (error) {
    console.error(error);
  }
}
