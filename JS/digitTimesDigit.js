function squareDigits(num){
    num = num.toString().split('')
    for (let number in num) {
        num[number] = parseInt(num[number])*parseInt(num[number])
    }
    return parseInt(num.join(''))
}

console.log(squareDigits(4267))