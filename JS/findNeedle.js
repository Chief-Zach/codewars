function findNeedle(haystack) {
    for (let word of haystack) {
        if (word === "needle") {
            return `found the needle at position ${haystack.indexOf(word)}`
        }
    }
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))