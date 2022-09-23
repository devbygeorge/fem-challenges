const pricingSwitch = document.querySelector("#js-pricing-switch");
const pricingSelector = document.querySelector("#js-pricing-selector");
const pricingProgressBar = document.querySelector("#js-pricing-progress-bar");
const pricingPageviews = document.querySelector("#js-pricing-pageviews");
const pricingFeeValue = document.querySelector("#js-pricing-fee-value");
const pricingBillingType = document.querySelector("#js-pricing-billing-type");
let isBillingSwitched = false;

/* things to happen when pricing switch is toggled */
pricingSwitch.onclick = () => {
  /* 1. toggle active class on the button */
  pricingSwitch.classList.toggle("active");

  /* 2. toggle year and month near pricing fee */
  isBillingSwitched = !isBillingSwitched;
  pricingBillingType.textContent = isBillingSwitched ? "/year" : "/month";

  /* 3. change price value according to billing type */
  changePrice();
};

/* things to happen when pricing slider is triggered */
pricingSelector.oninput = () => {
  /* 1. change progress bar width */
  pricingProgressBar.style.width = pricingSelector.value + "%";

  /* 2. change pageviews value */
  pricingPageviews.textContent = pricingSelector.value * 2 + "k pageviews";

  /* 2. change price value */
  changePrice();
};

const changePrice = () => {
  /* we need to get maximum $32 for month and $25 for year */
  let divideValue = isBillingSwitched ? 100 / 25 : 100 / 32;

  /* 1% - 100% / $0.25 - $25.00 or $0.32 - $32.00 */
  const changedPricingFeeValue = pricingSelector.value / divideValue;
  pricingFeeValue.textContent = "$" + changedPricingFeeValue.toFixed(2);
};
