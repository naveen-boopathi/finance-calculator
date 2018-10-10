console.log('starting');

function calculateAvgMonthlyPay() {
    var totalAmount = Number(document.getElementById("totalAmount").value);
    var commission = Number(document.getElementById("commission").value);
    var tenure = Number(document.getElementById("tenure").value);
    var expectedReturns = Number(document.getElementById("expectedReturns").value);

    var calulatedTotalAmountAfterCommision = totalAmount - (totalAmount * (commission/100));

    var amount = calulatedTotalAmountAfterCommision/(1 + (expectedReturns/100));
    console.log("Amount to pay = " + amount);
    document.getElementById('amountToPay').innerHTML = "Rs " + Math.round(amount);
    var perMonth = amount/tenure;
    console.log("Per Month = " + perMonth);
    document.getElementById('perMonth').innerHTML = "Rs " + Math.round(perMonth);
}