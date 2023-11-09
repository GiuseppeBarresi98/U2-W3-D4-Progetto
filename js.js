const URL = "https://api.pexels.com/v1/search?query=tigers";
const API_KEY = "qkW2w9BPMBehNRr9rXUag3XMQdbuWF1G0bwIXJDzejzu8zEUpYYBxmOF";

window.onload = () => {
  fetch(URL, {
    method: "GET",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => response.json())
    .then((tigerArr) => {
      console.log(tigerArr);
      const main = document.getElementById("main");

      const row = document.createElement("div");
      row.className = "row";
      const anchor = document.getElementById("anchor");
      anchor.addEventListener("click", function () {
        main.innerHTML = "";
        tigerArr.photos.forEach((tigerObj) => {
          const col = document.createElement("div");
          col.className = "col-12 col-sm-6 col-md-4 col-lg-3 ";

          const card = document.createElement("div");
          card.className = "card h-75 gy-1";

          const cardImg = document.createElement("img");
          cardImg.className = "card-img-top h-50 object-fit-cover";
          cardImg.src = tigerObj.src.medium;

          const cardBody = document.createElement("div");
          cardBody.className = "card-body d-flex flex-column";

          const cardTitle = document.createElement("h6");
          cardTitle.className = "card-title";
          cardTitle.innerText = tigerObj.photographer;

          const cardText = document.createElement("p");
          cardText.className = "card-text";
          cardText.innerText = tigerObj.photographer_url;

          const cardid = document.createElement("h6");
          cardid.className = "card-text mt-4";
          cardid.innerText = "#" + tigerObj.id;

          const cardBtnRemove = document.createElement("button");
          cardBtnRemove.className = "btn btn-primary mt-3 w-100 h-25 ms-auto ";
          cardBtnRemove.innerText = "Hidden";

          cardBtnRemove.addEventListener("click", function (e) {
            e.target.closest(".col-12").remove();
          });

          card.appendChild(cardImg);
          card.appendChild(cardBody);

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
          cardBody.appendChild(cardBtnRemove);
          cardBody.appendChild(cardid);

          col.appendChild(card);
          row.appendChild(col);
        });

        main.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));

  anotherURL = "https://api.pexels.com/v1/search?query=dogs";
  fetch(anotherURL, {
    method: "GET",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => response.json())
    .then((tigerArr) => {
      console.log(tigerArr);
      const main = document.getElementById("main");
      const anchorTwo = document.getElementById("anchorTwo");

      const row = document.createElement("div");
      row.className = "row";
      const anchor = document.getElementById("anchor");
      anchorTwo.addEventListener("click", function () {
        main.innerHTML = "";
        tigerArr.photos.forEach((tigerObj) => {
          const col = document.createElement("div");
          col.className = "col-12 col-sm-6 col-md-4 col-lg-3 ";

          const card = document.createElement("div");
          card.className = "card h-75 gy-1";

          const cardImg = document.createElement("img");
          cardImg.className = "card-img-top h-50 object-fit-cover";
          cardImg.src = tigerObj.src.small;

          const cardBody = document.createElement("div");
          cardBody.className = "card-body d-flex flex-column";

          const cardTitle = document.createElement("h6");
          cardTitle.className = "card-title";
          cardTitle.innerText = tigerObj.photographer;

          const cardText = document.createElement("p");
          cardText.className = "card-text";
          cardText.innerText = tigerObj.photographer_url;

          const cardid = document.createElement("h6");
          cardid.className = "card-text mt-4";
          cardid.innerText = "#" + tigerObj.id;

          const cardBtnRemove = document.createElement("button");
          cardBtnRemove.className = "btn btn-primary mt-3 w-100 h-25 ms-auto ";
          cardBtnRemove.innerText = "Hidden";
          cardBtnRemove.addEventListener("click", function (e) {
            e.target.closest(".col-12").remove();
          });

          card.appendChild(cardImg);
          card.appendChild(cardBody);

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
          cardBody.appendChild(cardBtnRemove);
          cardBody.appendChild(cardid);

          col.appendChild(card);
          row.appendChild(col);
        });

        main.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));

  let input = document.getElementById("input");
  let button = document.getElementById("button");
  let form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    anotherURL = `https://api.pexels.com/v1/search?query=${input.value}`;

    fetch(anotherURL, {
      method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((tigerArr) => {
        const main = document.getElementById("main");
        const anchorTwo = document.getElementById("anchorTwo");

        const row = document.createElement("div");
        row.className = "row";
        const anchor = document.getElementById("anchor");

        main.innerHTML = "";
        tigerArr.photos.forEach((tigerObj) => {
          const col = document.createElement("div");
          col.className = "col-12 col-sm-6 col-md-4 col-lg-3 ";

          const card = document.createElement("div");
          card.className = "card h-75 gy-1";

          const cardImg = document.createElement("img");
          cardImg.className = "card-img-top h-50 object-fit-cover";
          cardImg.src = tigerObj.src.small;

          const cardBody = document.createElement("div");
          cardBody.className = "card-body d-flex flex-column";

          const cardTitle = document.createElement("h6");
          cardTitle.className = "card-title";
          cardTitle.innerText = tigerObj.photographer;

          const cardText = document.createElement("p");
          cardText.className = "card-text";
          cardText.innerText = tigerObj.photographer_url;

          const cardid = document.createElement("h6");
          cardid.className = "card-text mt-4";
          cardid.innerText = "#" + tigerObj.id;

          const cardBtnRemove = document.createElement("button");
          cardBtnRemove.className = "btn btn-primary mt-3 w-100 h-25 ms-auto ";
          cardBtnRemove.innerText = "Hidden";
          cardBtnRemove.addEventListener("click", function (e) {
            e.target.closest(".col-12").remove();
          });

          card.appendChild(cardImg);
          card.appendChild(cardBody);

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
          cardBody.appendChild(cardBtnRemove);
          cardBody.appendChild(cardid);

          col.appendChild(card);
          row.appendChild(col);
        });

        main.appendChild(row);
      });
  });
};
