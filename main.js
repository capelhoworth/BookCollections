const bookstoreContainer = document.querySelector("#bookstores");

function collection(reference) {
  for (let bookstore of reference) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("medium");
    card.classList.add("col");
    card.classList.add("s12");
    card.classList.add("m9");
    card.classList.add("l4");

    let thumb = document.createElement("div");
    thumb.classList.add("card-image");
    let pic = document.createElement("img");
    pic.src = bookstore.thumbnail;

    thumb.appendChild(pic);
    card.appendChild(thumb);

    let name = document.createElement("div");
    name.classList.add("card-title");
    name.innerText = `${bookstore.name}`;
    card.appendChild(name);

    let website = document.createElement("a");
    website.classList.add("webLink");
    let webText = document.createTextNode(`${bookstore.website}`);
    website.appendChild(webText);
    website.href = `${bookstore.website}`;
    card.appendChild(website);

    let content = document.createElement("div");
    content.classList.add("card-content");

    let address = document.createElement("div");
    address.innerText = `${bookstore.location.street}
    ${bookstore.location.city}, ${nameToAbbr(bookstore.location.state)} ${
      bookstore.location.postcode
    }`;
    content.appendChild(address);

    let phone = document.createElement("div");
    phone.innerText = `${bookstore.phone}`;
    content.appendChild(phone);

    let founded = document.createElement("div");
    founded.innerText = `Founded: ${bookstore.founded}`;
    content.appendChild(founded);

    card.appendChild(content);
    bookstoreContainer.appendChild(card);
  }
}

collection(bookstores);
collection(bookstoresJerome);
