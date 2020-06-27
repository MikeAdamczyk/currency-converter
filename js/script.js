{
    const amountToExchangeElement = document.querySelector(".js-amountToExchange");
    const currencyToExchangeElement = document.querySelector(".js-currencyToExchange");
    const exchangedAmountElement = document.querySelector(".js-exchangedAmount");
    const exchangedCurrencyElement = document.querySelector(".js-exchangedCurrency");


    const calculateExchangeValue = () => {

        const amountToExchange = amountToExchangeElement.value;
        const currencyToExchange = currencyToExchangeElement.value;
        const exchangedCurrency = exchangedCurrencyElement.value;

        let plnValue;
        const usdRate = 3.94;
        const eurRate = 4.45;
        const chfRate = 4.15;

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
                return plnValue;

            case "USD":
                return plnValue / usdRate;

            case "EUR":
                return plnValue / eurRate;

            case "CHF":
                return plnValue / chfRate;
        }
    }


    const updateExchangedAmountValue = () => {
        exchangedAmountElement.value = calculateExchangeValue().toFixed(2);
    }

    const calculationResultMessage = (amountToExchange, currencyToExchange, exchangedAmount, exchangedCurrency, exchangeRate) => {

        const message = document.querySelector(".js-message");

        message.innerHTML = `Gratulacje! Wymieniłeś <strong>${amountToExchange}&nbsp;${currencyToExchange}</strong> na <strong>${exchangedAmount}&nbsp;${exchangedCurrency}</strong> po kursie <strong>${exchangeRate}</strong>!`;
    }


    const onSubmit = (event) => {

        event.preventDefault();

        const amountToExchange = amountToExchangeElement.value;
        const currencyToExchange = currencyToExchangeElement.value;
        const exchangedAmount = exchangedAmountElement.value;
        const exchangedCurrency = exchangedCurrencyElement.value;
        const exchangeRate = (amountToExchange / exchangedAmount).toFixed(2);

        calculationResultMessage(amountToExchange, currencyToExchange, exchangedAmount, exchangedCurrency, exchangeRate);
    }


    const init = () => {

        const form = document.querySelector(".section__form");

        form.addEventListener("submit", onSubmit);
        amountToExchangeElement.addEventListener("input", updateExchangedAmountValue);
        currencyToExchangeElement.addEventListener("change", updateExchangedAmountValue);
        exchangedCurrencyElement.addEventListener("change", updateExchangedAmountValue);
    }

    init();
}