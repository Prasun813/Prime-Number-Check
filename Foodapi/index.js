let button = document.getElementById("btn");
let inputBox = document.getElementById("searchBox");
let page = document.getElementById("content");

let getApi = async (query) => {
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  let res = await data.json();
  console.log(res);
  res.meals.forEach((food) => {
    let searchCard = document.createElement("a");
    searchCard.classList.add("searchCard");
    searchCard.innerHTML = `
                <img src="${food.strMealThumb}" alt="">
                    <h6>${food.strMeal}</h6>
                   <h3>${food.strArea}</h3>
                   <p>${food.strCategory}</p> 
`;
    page.append(searchCard);
  });
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  const search = inputBox.value.trim();
  getApi(search);
  inputBox.value = "";
});
