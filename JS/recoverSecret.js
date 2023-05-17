var recoverSecret = function(triplets) {
    let letters = getLetters(triplets)
    let swaps = true
    let count = 0
    while (swaps) {
        count ++
        swaps = false
        for (let triplet of triplets) {
            if (letters.indexOf(triplet[0]) > letters.indexOf(triplet[1])) {
                swaps = true
                let temp = [letters[letters.indexOf(triplet[0])], letters.indexOf(triplet[0])]
                letters[letters.indexOf(triplet[0])] = letters[letters.indexOf(triplet[1])]
                letters[letters.indexOf(triplet[1])] = temp[0]
            }
        }
        for (let triplet of triplets) {
            if (letters.indexOf(triplet[1]) > letters.indexOf(triplet[2])) {
                swaps = true
                let temp = [letters[letters.indexOf(triplet[1])], letters.indexOf(triplet[1])]
                letters[letters.indexOf(triplet[1])] = letters[letters.indexOf(triplet[2])]
                letters[letters.indexOf(triplet[2])] = temp[0]
            }
        }
    }
    console.log("COUNT: " + count)
    return letters.join('')
}
function getLetters(triplets) {
    let set1 = new Set()
    for (let triplet of triplets) {
        for (let letter of triplet) {
            set1.add(letter)
        }
    }
    return Array.from(set1)
}
let triplets1 = [
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
]
console.log(recoverSecret(triplets1))