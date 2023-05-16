function getSum(a, b) {
    if (b < a) {
        let temp = a
        a = b
        b = temp
    }
    let sum = a
    while (a < b) {
        a++
        sum += a
    }
    console.log(sum)
}

getSum(0, -1)