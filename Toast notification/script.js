let icon = {
  success: '<span class="material-symbols-outlined">task_alt</span>',
  danger: '<span class="material-symbols-outlined">error</span>',
  warning: '<span class="material-symbols-outlined">warning</span>',
  info: '<span class="material-symbols-outlined">info</span>',
};

function showToast(
  message = "Default  Message",
  toastType = "info",
  duration = 5000
) {
  let box = document.createElement("div");
  box.classList.add("toast", `toast- ${toastType}`);
  box.innerHTML = `
   <div class="toast-content-wrapper">
    <div class="toast-icon">
         ${icon[toastType]}
    </div>
    <div class="toast-massage">${message}</div>
    <div class="toast-progress"></div>
</div>
   `;
  box.querySelector(".toast-progress").computedStyleMap.animationDuration = `${
    duration / 1000
  }s`;

  let toastAlready = document.body.querySelector(".toast");
  if (toastAlready) {
    toastAlready.remove();
  }
  document.body.appendChild(box);
}

let submitBtn = document.querySelector(".custom-toast success-toast");
let dangerBtn = document.querySelector(".custom-toast danger-toast");
let infoBtn = document.querySelector(".custom-toast info-toast");
let warningBtn = document.querySelector(".custom-toast warning-toast");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showToast("Article submitted successfully!", "success", 5000);
});

dangerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showToast("Its so much danger here", "danger", 5000);
});

infoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showToast("Do POTD and earn coins!", "info", 5000);
});

warningBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showToast("Server error!", "warning", 5000);
});
