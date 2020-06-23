let form = document.querySelector(".section__form");
let amountToExchangeElement = document.querySelector(".js-amountToExchange");
let currencyToExchangeElement = document.querySelector(".js-currencyToExchange");
let exchangedAmountElement = document.querySelector(".js-exchangedAmount");
let exchangedCurrencyElement = document.querySelector(".js-exchangedCurrency");
let message = document.querySelector(".js-message");

function exchange(event) {
    event.preventDefault();

    let amountToExchange = amountToExchangeElement.value;
    let currencyToExchange = currencyToExchangeElement.value;
    let exchangedCurrency = exchangedCurrencyElement.value;
    let exchangeResult;

    let plnValue;
    let usdRate = 3.94;
    let eurRate = 4.45;
    let chfRate = 4.15;

    switch (currencyToExchange) {
        case "PLN":
            plnValue = +amountToExchange;
            break;

        case "USD":
            plnValue = amountToExchange * usdRate;
            break;

        case "EUR":
            plnValue = amountToExchange * eurRate;
            break;

        case "CHF":
            plnValue = amountToExchange * chfRate;
            break;
    }

    switch (exchangedCurrency) {
        case "PLN":
            exchangeResult = plnValue;
            break;

        case "USD":
            exchangeResult = plnValue / usdRate;
            exchangeRate = usdRate;
            break;

        case "EUR":
            exchangeResult = plnValue / eurRate;
            exchangeRate = eurRate;
            break;

        case "CHF":
            exchangeResult = plnValue / chfRate;
            exchangeRate = chfRate;
            break;
    }

    exchangedAmountElement.value = exchangeResult.toFixed(2);
}

amountToExchangeElement.addEventListener("input", exchange);
currencyToExchangeElement.addEventListener("change", exchange);
exchangedCurrencyElement.addEventListener("change", exchange);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let amountToExchange = amountToExchangeElement.value;
    let currencyToExchange = currencyToExchangeElement.value;
    let exchangedCurrency = exchangedCurrencyElement.value;
    let exchangedAmount = exchangedAmountElement.value;

    let exchangeRate = (amountToExchange / exchangedAmount).toFixed(2);

    message.innerHTML = `Gratulacje! Wymieniłeś <strong>${amountToExchange}&nbsp;${currencyToExchange}</strong> na <strong>${exchangedAmount}&nbsp${exchangedCurrency}</strong> po kursie <strong>${exchangeRate}</strong>!`;
});