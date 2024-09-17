const validate = {
    isRequired(inputCheck, index, container) {
        return isRequired(inputCheck, index, container)
    },

    onlyOne(firstElement, secondElement) {
        return onlyOne(firstElement, secondElement)
    },
    
    isRequiredCheckBox(firstElement, secondElement, index) {
        return isRequiredCheckBox(firstElement, secondElement, index)
    },

    isNumber(inputCheck, index, container) {
        return isNumber(inputCheck, index, container)
    },

    limitInput(inputValue, max) {
        return limitInput(inputValue, max)
    }
}

function isRequired(inputCheck, index, container) {    
    if (!inputCheck.value) {
        const span = document.querySelector(`span[data-require='${index}']`)
        span.classList.add('display-block')
        
        const containerRoot = document.querySelector(`.${container}`)
        containerRoot.classList.add('border__red')
        containerRoot.querySelector('i').classList.add('color__white', 'bg-color__red')

        document.addEventListener('click', (event) => {
            span.classList.remove('display-block')
            containerRoot.classList.remove('border__red')
            containerRoot.querySelector('i').classList.remove('color__white', 'bg-color__red')
        })
    }
    else
        return true
}

function onlyOne(firstElement, secondElement) {
    firstElement.onclick = function(event) {
        if (secondElement.checked)
            secondElement.checked = false
    }
    secondElement.onclick = function(event) {
        if (firstElement.checked)
            firstElement.checked = false
    }
}

function isRequiredCheckBox(firstElement, secondElement, index) {
    if (!(firstElement.checked || secondElement.checked)) {
        const span = document.querySelector(`span[data-require='${index}']`)
        span.classList.add('display-block')
        document.addEventListener('click', (event) => {
            span.classList.remove('display-block')
        })
    }
    else
        return true
}

function isNumber(inputCheck, index, container) {
    let value = inputCheck.replace(/[,.]/g, "")
    
    value = Number(value)

    if (isNaN(value)) {
        const span = document.querySelector(`span[data-require='${index}']`)
        span.innerHTML = "This field must be number"
        span.classList.add('display-block')
        
        const containerRoot = document.querySelector(`.${container}`)
        containerRoot.classList.add('border__red')
        containerRoot.querySelector('i').classList.add('color__white', 'bg-color__red')

        document.addEventListener('click', (event) => {
            span.classList.remove('display-block')
            span.innerHTML = "This field is required"
            containerRoot.classList.remove('border__red')
            containerRoot.querySelector('i').classList.remove('color__white', 'bg-color__red')
        })
    }
    else
        return true
}

function limitInput(inputValue, max) {
    let parts = inputValue.split('.')
    let integerPart = parts[0].slice(0, 2)
    let decimalPart = parts[1] !== undefined ? '.' + parts[1] : ""
    return integerPart + decimalPart
}

export default validate