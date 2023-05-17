var uniqueInOrder=function(iterable){
    iterable = iterable.toString().split('')
    if (iterable.length === 0) {
        return []
    }
    for (let letter of Array(iterable.length).keys()) {
        if (iterable[letter] === iterable[letter + 1] || iterable[letter].charCodeAt(0) < 48 || iterable[letter].charCodeAt(0) > 123) {
            iterable.splice(letter, 1)
            console.log(iterable)
            return uniqueInOrder(iterable.join(''))
        }
    }
    if (iterable[0].charCodeAt(0) < 58 && iterable[0].charCodeAt(0) > 47){
        for (let number of Array(iterable.length).keys()) {
            iterable[number] = parseInt(iterable[number])
        }
    }
    return iterable
}

uniqueInOrder("AAAABBBCCDAABBB")