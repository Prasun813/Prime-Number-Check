let userContainer = document.querySelector(".userContainer");
let searchInput = document.getElementById("searchInput");

const users = [
  {
    profileUrl:
      "https://imgs.search.brave.com/7ILoHLpVl3ArFgBIAzMfHvVB21aafCiwTu7k5N9yjT4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/Njg2NDRlYzVlMjg5/MjBmY2QxYmFlYWUv/NjdiNWYxM2U2Yzc5/ZjBlMzE0MzI4NTcz/XzAxNDkxZjczYTNm/MzY3Nzk0Mzk3MGRj/OWY2NDI5Njg0X0dy/b3VwJTIwNDI3MzIw/ODE0LmF2aWY",
    name: "Sunita thapa magar",
    email: "Sunita123@gamil.com",
  },
  {
    profileUrl:
      "https://imgs.search.brave.com/u3B5iJ46FRYn6d7LwtYvzxSDYNgWonooM0UrbL1Xw40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzllL2Jm/L2E5LzllYmZhOTll/ZTc2NmJkNjdmNmQz/MTAxNzc4NzQ4NTA0/LmpwZw",
    name: "Prasun Thapa Magar",
    email: "Prasun9@gamil.com",
  },
  {
    profileUrl:
      "https://imgs.search.brave.com/Wu5uNS8_19M4ZlZwPkZzK_k5kFo8aPnzjDJ_wvpeSLA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bmFtZS10aGlzLWNo/YXJhY3Rlci12MC1r/a3FmejUxaTl6N2Yx/LmpwZz93aWR0aD02/NDAmY3JvcD1zbWFy/dCZhdXRvPXdlYnAm/cz1iOTAzYmE1NjRi/OWU2NzkyZGEyYTU5/NGNjNjVmNWQxMTM2/YmM5ZTMw",
    name: "Harish Thapa magar",
    email: "Harish83274@gamil.com",
  },
];

function renderUsers(arr) {
  userContainer.innerHTML = "";
  arr.map((obj) => {
    let { profileUrl, name, email } = obj;

    let DivElem = document.createElement("div");
    DivElem.className = "userItem";
    DivElem.innerHTML = `<div class="userItem">
                    <div class="image">
                        <img src="${profileUrl}"
                            alt="error loading..." />
                    </div>
                    <div class="userDetails">
                        <h1>${name}</h1>
                        <p>${email}</p>
                    </div>
                </div>`;
    userContainer.append(DivElem);
  });
}
renderUsers(users);

function handleSearch(e) {
  let searchValue = e.target.value;
  let filterUsers = users.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      obj.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  renderUsers(filterUsers);
}

searchInput.addEventListener("input", handleSearch);
