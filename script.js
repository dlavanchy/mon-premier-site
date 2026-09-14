const clickButton = document.querySelector("#click-button");
const clickCount = document.querySelector("#click-count");

let count = 0;

clickButton.addEventListener("click", () => {
  count += 1;
  clickCount.textContent = String(count);
});
