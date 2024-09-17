export default function autoFortmat(input) {
    let value = input.replace(/,/g, '')

    if (!isNaN(value) && value !== "") {
        let parts = value.split('.')
        let integerPart = parts[0]
        let decimalPart = parts[1] !== undefined ? '.' + parts[1].slice(0, 3) : ""

        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return integerPart + decimalPart
    } 

    else
        return input
}