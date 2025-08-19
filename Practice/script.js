let inputBox = document.getElementById("inputBox");
let ContentContainer = document.getElementById("ContentContainer");

const user = [
  {
    ProfileUrl:
      "https://imgs.search.brave.com/Yb01bn1A2i7E-aNghSb7aGtQBhS8GSbD0Vldwtd0thY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdHls/ZXNhdGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzAzL1JvYmVydC1E/b3duZXktSnIuanBn",
    name: "Prasun Thapa magar",
    email: "PrasunMagar99@gmail.com",
  },
  {
    ProfileUrl:
      "https://imgs.search.brave.com/Yb01bn1A2i7E-aNghSb7aGtQBhS8GSbD0Vldwtd0thY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdHls/ZXNhdGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzAzL1JvYmVydC1E/b3duZXktSnIuanBn",
    name: "Ram",
    email: "Ram123@gmail.com",
  },
  {
    ProfileUrl:
      "https://imgs.search.brave.com/Yb01bn1A2i7E-aNghSb7aGtQBhS8GSbD0Vldwtd0thY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdHls/ZXNhdGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzAzL1JvYmVydC1E/b3duZXktSnIuanBn",
    name: "sham",
    email: "sham45@gmail.com",
  },
];

function renderInput(arr){
  ContentContainer.innerHTML = '';
  arr.map((obj)=> {
    let {ProfileUrl,name,email} = obj;
    let divElem = document.createElement('div');
    divElem.className = "innerContentContainer";
    divElem.innerHTML = `
    <div class="innerContentContainer">
                    <img src="${ProfileUrl}" alt="error Loading..." />
                    <div class="name">
                        <h3>${name}</h3>
                        <p>${email}</p>
                    </div>
    `;
    ContentContainer.append(divElem);
  });
}
renderInput(user);

function handleInputSearch(e){
  let search = e.target.value;
  const filterInput = user.filter(info=> {
    return(
      info.name.toLowerCase().includes(search.toLowerCase())|| info.email.toLowerCase().includes(search.toLowerCase())
    );
  });
renderInput(filterInput);
}

inputBox.addEventListener('input',handleInputSearch);