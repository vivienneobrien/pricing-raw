let yearly = false;

document
  .getElementById("toggle-checkbox")
  .addEventListener("click", function checked() {
    yearly = !yearly;
    const prices = document.getElementsByClassName("price");
    const pricesDuration = document.getElementsByClassName("price-duration");
    for (let i = 0; i < prices.length; i++) {
      const price = prices[i];
      price.innerText = yearly ? price.dataset.yearly : price.dataset.monthly;
      const priceDuration = pricesDuration[i];
      priceDuration.innerText = yearly
        ? priceDuration.dataset.yearly
        : priceDuration.dataset.monthly;
    }
  });
