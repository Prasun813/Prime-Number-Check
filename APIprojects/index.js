let button = document.getElementById("btn");
let body = document.querySelector("body");
let mainHeading = document.getElementById("mainHeading");
let searchbox = document.getElementById("searchbox");
let btn2 = document.getElementById("btn2");
let flag1 = document.querySelector(".flag1");

let getApi = async () => {
  let res = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags`);
  let data = await res.json();
  console.log(data);
  data.forEach((country) => {
    console.log(country.name.common);
    
    let countryCard = document.createElement("countyCard");
    countryCard.classList.add("countryCard");
    countryCard.innerHTML = `
 <img      
                id="Image1"
                src="${country.flags.svg}"
                alt=""
              />
              <h3 id="CountryName">${country.name.common}</h3>
              <p id="p1">population:81,1770,900</p>
              <p id="p2">Region: Europe</p>
              <p id="p3">Capital: Berlin</p>
`;

    flag1.append(countryCard);
  });
};

btn2.addEventListener("click", function (f) {
  f.preventDefault();
  const searchInput = searchbox.value.trim();
  getApi(searchInput);
  searchbox.value = "";
});

button.addEventListener("click", function (e) {
  e.preventDefault();
  body.style.backgroundColor = "black";
  body.style.color = "white";
  mainHeading.style.color = "black";
});
