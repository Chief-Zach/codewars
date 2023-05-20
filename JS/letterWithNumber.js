function high(text) {
    let bestCode = 0
    let bestWord = ""
    let currentWord = 0
    for (let word of text.split(' ')) {
        currentWord = 0
        for (let x of word) {
            currentWord += x.charCodeAt(0) - 99
        }
        if (currentWord > bestCode) {
            bestCode = currentWord
            bestWord = word
        }
    }
    console.log(bestCode)
    return bestWord
}

console.log(high("i ahve two bintangs"))