function digitize(n) {
    n = n.toString().split('').reverse()
    for (let number of Array(n.length).keys()) {
        n[number] = parseInt(n[number])
    }
    return n
}

console.log(digitize([234511]))