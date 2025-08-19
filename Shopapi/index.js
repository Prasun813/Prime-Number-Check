let body = document.querySelector("body");
let SearchInput = document.getElementById("SearchInput");
let button = document.getElementById("btn");
let containerItem = document.getElementById("container-Item");

let getApi = async () => {
  let data = await fetch(`https://dummyjson.com/products`);
  let res = await data.json();
  console.log(res.products);
  res.products.forEach((items) => {
    let searchCard = document.createElement("div");
    searchCard.classList.add("searchCard");
    searchCard.innerHTML = `
        <img src="${items.thumbnail}" alt="">
              <h1>${items.tags}</h1>
              <p> price: ${items.price}</p>
              <p>${items.category}</p>
              <p>${items.title}</p>
       `;
    containerItem.append(searchCard);
  });
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  const search = SearchInput.value.trim();
  getApi(search);
  SearchInput.value = "";
});

body.style.backgroundColor = "black";
body.style.color = "white";
