function getMiddle(s)
{
    let word = s.split('')
    let length = word.length
    if (length % 2 === 0) {
        // Middle Two
        return [word[(length/2) - 1], word[(length/2)]].join('')
    }
    else {
        return word[(length - 1)/2]
    }
}

console.log(getMiddle("testing"))