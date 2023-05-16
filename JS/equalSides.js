function findEvenIndex(arr) {
    for (let x=0; x<arr.length; x++) {
        let sideOne = arr.slice(0, x)
        let sideTwo = arr.slice(x + 1, arr.length)
        if (listSum(sideOne) === listSum(sideTwo)) {
            return x
        }
    }
    return -1
}

function listSum(list) {
    let sum = 0
    for (let x of list) {
        sum += x
    }
    return sum
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))