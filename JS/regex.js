function validatePIN (pin) {
    return pin.match(/^\d{4}$|^\d{6}$/) !== null
}

console.log(validatePIN("1234"))