import validate from "./rulesValidate.js"
import storage from './localStorage.js'
import autoFortmat from "./autoFortmat.js"
import calculate from "./calculate.js"

const form = document.querySelector('.input-container')
const clearAll = document.querySelector('.clear-input')
const amountInput = document.getElementById('mortgage-amount-input')
const termInput = document.getElementById('mortgage-term-input')
const rateInput = document.getElementById('mortgage-rate-input')
const repaymentType = document.getElementById('repayment-type')
const interestOnlyType = document.getElementById('interest-only-type')
const emptyResult = document.querySelector(".empty-result")
const viewReslt = document.querySelector(".display-result")

validate.onlyOne(repaymentType, interestOnlyType)

form.addEventListener('submit', function(event) {
    event.preventDefault()

    let test1 = validate.isRequired(amountInput, 1, 'sub-input-container')
    let test2 = validate.isRequired(termInput, 2, 'mortgage-term-container')
    let test3 = validate.isRequired(rateInput, 3, 'mortgage-rate-container')
    let test4 = validate.isRequiredCheckBox(repaymentType, interestOnlyType, 4)

    let test5 = validate.isNumber(amountInput.value, 1, 'sub-input-container')
    let test6 = validate.isNumber(termInput.value, 2, 'mortgage-term-container')
    let test7 = validate.isNumber(rateInput.value, 3, 'mortgage-rate-container')

    if (test1 && test2 && test3 && test4 && test5 && test6 && test7) {
        storage.set({
            amountInput: amountInput.value,
            termInput: termInput.value,
            rateInput: rateInput.value,
            repaymentType: repaymentType.checked,
            interestOnlyType: interestOnlyType.checked
        })
        emptyResult.classList.add("display-none")
        viewReslt.classList.add("display-flex")
        calculate()
    }
    else {
        emptyResult.classList.remove("display-none")
        viewReslt.classList.remove("display-flex")
    }
})

document.onkeyup = (event) => {
    if (event.key === 'Enter') {
        let test1 = validate.isRequired(amountInput, 1, 'sub-input-container')
        let test2 = validate.isRequired(termInput, 2, 'mortgage-term-container')
        let test3 = validate.isRequired(rateInput, 3, 'mortgage-rate-container')
        let test4 = validate.isRequiredCheckBox(repaymentType, interestOnlyType, 4)
    
        let test5 = validate.isNumber(amountInput.value, 1, 'sub-input-container')
        let test6 = validate.isNumber(termInput.value, 2, 'mortgage-term-container')
        let test7 = validate.isNumber(rateInput.value, 3, 'mortgage-rate-container')

        if (test1 && test2 && test3 && test4 && test5 && test6 && test7) {
            storage.set({
                amountInput: amountInput.value,
                termInput: termInput.value,
                rateInput: rateInput.value,
                repaymentType: repaymentType.checked,
                interestOnlyType: interestOnlyType.checked
            })
            emptyResult.classList.add("display-none")
            viewReslt.classList.add("display-flex")
            calculate()
        }
        else {
            emptyResult.classList.remove("display-none")
            viewReslt.classList.remove("display-flex")
        }
    }
}

form.addEventListener('input', (event) => {
    amountInput.value = autoFortmat(amountInput.value)
    termInput.value = autoFortmat(termInput.value)
    rateInput.value = autoFortmat(rateInput.value)

    termInput.value = validate.limitInput(termInput.value, 2)
    rateInput.value = validate.limitInput(rateInput.value, 2)
})

clearAll.onclick = function(event) {
    storage.set({
        amountInput: null,
        termInput: null,
        rateInput: null,
        repaymentType: repaymentType.false,
        interestOnlyType: interestOnlyType.false
    })
    
    amountInput.value = null
    termInput.value = null
    rateInput.value = null
    repaymentType.checked = false
    interestOnlyType.checked = false

    emptyResult.classList.remove("display-none")
    viewReslt.classList.remove("display-flex")
}