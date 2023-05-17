function nbYear(p0, percent, aug, p) {
    let count = 0
    recursiveYear(p0, percent, aug, p)
    function recursiveYear(p0, percent, aug, p) {
        if (p0 <= p) {
            count ++
            console.log(p0)
            return recursiveYear(Math.floor(p0 * (1 + percent/100) + aug), percent, aug, p)
        }
    }
    return count
}

console.log(nbYear(1500, 5, 100, 5000))