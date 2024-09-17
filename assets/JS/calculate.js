import storage from "./localStorage.js"
import autoFortmat from "./autoFortmat.js"

export default function calculate() {
    const data = storage.get()
    var result
    var totalPayment
    let integerPart
    let decimalPart

    let pData = data.amountInput.split('.')
    integerPart = pData[0]
    integerPart = integerPart.split(',')
    integerPart = integerPart.join("")
    decimalPart = pData[1] !== undefined ? '.' + pData[1] : ""
    const p = Number(integerPart + decimalPart)

    let rData = data.rateInput.split('.')
    integerPart = rData[0]
    decimalPart = rData[1] !== undefined ? '.' + rData[1] : ""
    const r = (Number(integerPart + decimalPart) / 12) / 100
    
    let nData = data.termInput.split('.')
    integerPart = nData[0]
    decimalPart = nData[1] !== undefined ? '.' + nData[1] : ""
    const n = Number(integerPart + decimalPart) * 12

    const repayment = data.repaymentType

    if (repayment) {
        result = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        totalPayment = result * n
    } 
    else {
        result = p * r
        totalPayment = (result * n) + p
    }

    const monthlyRepayment = document.querySelector(".monthly-repayments__result");
    const total = document.querySelector(".total-repayments__result");

    // Function to format numbers with commas for thousands separators
    function formatNumber(num) {
        return num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    // Assuming result and totalPayment hold the correct values for monthly and total repayments
    monthlyRepayment.innerHTML = '£' + formatNumber(result);
    total.innerHTML = '£' + formatNumber(totalPayment);

}