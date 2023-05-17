function incrementString (strng) {
    let numberIndex = -1
    let number = -1
    let numSize = -1
    let word = ""
    let length = strng.length
    for (let letter of Array(length).keys()) {
        //console.log(letter)
        if (strng[letter].charCodeAt(0) < 64) {
            numberIndex = letter
            number = strng.slice(numberIndex, strng.length)
            if (!allNums(number)) {
                continue
            }
            numSize = strng.length - numberIndex
            number++
            word = strng.slice(0, numberIndex)
            return word+pad(number, numSize)
        }
    }
    return strng+"1"
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function allNums(numbers) {
    for (let number of numbers) {
        if (number.charCodeAt(0) > 60) {
            //console.log(number)
            return false
        }
    }
    return true
}

console.log(incrementString("fo99obar99"))