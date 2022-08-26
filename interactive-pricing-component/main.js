const price = document.getElementById("price-value");
const propose = document.getElementById("propose-value");

const slideContainer = document.querySelector(".slidecontainer");
const slider = document.querySelector("#slider");
const progress = document.querySelector(".progress");

const switchBtn = document.getElementById("switchBtn");

const bilingType = document.getElementById("bilingtype");
let bilingSwitched = false;

slider.oninput = () => {
  setProgress();
  setPropose();
  setPrice();
};

function setProgress() {
  const progressWidth = (slider.value / 100) * 90 + "%";
  progress.style.width = progressWidth;
}

function setPropose() {
  const proposeValue = slider.value * 2 + "K";
  propose.textContent = proposeValue;
}

function setPrice() {
  const priceValue = bilingSwitched
    ? "$" + (slider.value / 4.15).toFixed(2)
    : "$" + slider.value / 3.125;
  price.textContent = priceValue;
}

switchBtn.onclick = () => {
  switchBtn.classList.toggle("switched");
  bilingSwitched = !bilingSwitched;
  setPrice();
  bilingType.textContent = bilingSwitched ? "year" : "month";
};
