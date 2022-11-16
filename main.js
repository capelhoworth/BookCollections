const bookstoreContainer = document.querySelector("#bookstores");

// function collection(reference) {
for (let bookstore of bookstoresJerome) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("small");
  card.classList.add("col");
  card.classList.add("s12");
  card.classList.add("m9");
  card.classList.add("l4");

  // let thumb = document.createElement("div");
  // thumb.classList.add("card-image");
  // thumb.classList.add("circle");
  // let pic = document.createElement("img");
  // pic.src = customer.picture.large;

  // thumb.appendChild(pic);
  // card.appendChild(thumb);

  let nameBusiness = document.createElement("div");
  nameBusiness.classList.add("card-title");
  nameBusiness.innerText = `${bookstore.name}`;
  card.appendChild(nameBusiness);

  // let content = document.createElement("div");
  // content.classList.add("card-content");
  // content.classList.add("medium");

  // let email = document.createElement("a");
  // email.classList.add("emailLink");
  // let emailText = document.createTextNode(`${customer.email}`);
  // email.appendChild(emailText);
  // email.href = `mailto:${customer.email}`;
  // card.appendChild(email);

  // let address = document.createElement("div");
  // address.innerText = `${
  //   customer.location.street.number
  // } ${customer.location.street.name.trim()}
  // ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${
  //   customer.location.postcode
  // }`;
  // content.appendChild(address);

  // let birthday = document.createElement("div");
  // let date1 = dateConvert(customer.dob.date);
  // birthday.innerText = `DOB: ${date1}`;
  // content.appendChild(birthday);

  // let custDate = document.createElement("div");
  // let date2 = dateConvert(customer.registered.date);
  // custDate.innerText = `Customer since: ${date2}`;
  // content.appendChild(custDate);

  // card.appendChild(content);
  bookstoreContainer.appendChild(card);
}
// }

// collection(bookstores);
// collection(bookstoresJerome);
// <div class="flex flex-wrap">
