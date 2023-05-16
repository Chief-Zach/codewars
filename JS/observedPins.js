function getPINs(observed) {
    let cipher = {'1': ['2', '4'], '2': ['1', '3', '5'], '3': ['2', '6'],
        '4': ['1', '5', '7'], '5': ['2', '4', '6', '8'],
        '6': ['3', '5', '9'], '7': ['4', '8'], '8': ['5', '7', '9', '0'], '9': ['6', '8'], '0': ['8']}
    let combos = []
    for (let x of observed) {
        combos.push(cipher[x])
    }
    console.log(combos)
    bruteForce(combos)
}

function bruteForce(combos) {
    let numCombos = combos.length
    console.log(numCombos)
    for (let combo of combos) {
        console.log(combo[0])
    }
}
getPINs("814")