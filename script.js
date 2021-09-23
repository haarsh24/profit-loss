var initialPrice = document.querySelector("#initial-price");
var quantityStock = document.querySelector("#quantity-stock");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


submitBtn.addEventListener('click', checkHandler)

function checkHandler() {
    var iniPrice = Number(initialPrice.value);
    var quanStock = Number(quantityStock.value);
    var currPrice = Number(currentPrice.value);
    if (!iniPrice || !quanStock || !currPrice) {
        outputBox.innerText = `Please enter all the fields`
        outputBox.style.color = `red`;
    } else if (iniPrice < 0 || quanStock < 0 || currPrice < 0) {
        outputBox.innerText = `The value should not be negative`
        outputBox.style.color = `red`;
    } else {
        stockProfitOrLoss(iniPrice, quanStock, currPrice);
        outputBox.style.color = `white`;
    }
}

function stockProfitOrLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = ((initial - current) * quantity).toFixed(2);
        var lossPercentage = ((loss / (initial * quantity)) * 100).toFixed(2);
        outputBox.innerText = `The loss is ${loss} and the loss percentage is ${lossPercentage}%`;
        if (lossPercentage > 50) {
            document.body.style.background = 'red';
        }


    } else if (current > initial) {
        var profit = ((current - initial) * quantity).toFixed(2);
        var profitPercentage = ((profit / (initial * quantity)) * 100).toFixed(2);
        outputBox.innerText = `The profit is ${profit} and the profit percentage is ${profitPercentage}%`;
        if (profitPercentage > 50) {
            document.body.style.background = 'green';
        }
    } else {
        outputBox.innerText = `No Profit No Loss`
        document.body.style.background = 'yellow';
    }
}