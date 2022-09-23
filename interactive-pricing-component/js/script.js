const pricingSwitch = document.querySelector("#js-pricing-switch");
const pricingSelector = document.querySelector("#js-pricing-selector");
const pricingProgressBar = document.querySelector("#js-pricing-progress-bar");
const pricingPageviews = document.querySelector("#js-pricing-pageviews");
const pricingFeeValue = document.querySelector("#js-pricing-fee-value");
const pricingBillingType = document.querySelector("#js-pricing-billing-type");
let isBillingSwitched = false;

/* change billing type when switch button clicked */
pricingSwitch.onclick = () => {
  /* set its class to active */
  pricingSwitch.classList.toggle("active");

  /* toggle year and month */
  isBillingSwitched = !isBillingSwitched;
  pricingBillingType.textContent = isBillingSwitched ? "/year" : "/month";

  /* change price simultaneously */
  changePrice();
};

pricingSelector.oninput = () => {
  pricingProgressBar.style.width = pricingSelector.value + "%";

  pricingPageviews.textContent = pricingSelector.value * 2 + "k pageviews";

  changePrice();
};

const changePrice = () => {
  const changedPricingFeeValue = isBillingSwitched
    ? pricingSelector.value / 4.15
    : pricingSelector.value / 3.125;
  pricingFeeValue.textContent = "$" + changedPricingFeeValue.toFixed(2);
};
