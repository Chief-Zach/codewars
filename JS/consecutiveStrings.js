function longestConsec(strarr, k) {
    let currentIndex = 0
    let bestWord = ""
    let bestScore = 0
    let currentWord = ""
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return ""
    }
    while (currentIndex < strarr.length) {
        currentWord = ""
        for (let x of strarr.slice(currentIndex, currentIndex + k)) {
            currentWord += x
        }
        if (currentWord.length > bestScore) {
            bestScore = currentWord.length
            bestWord = currentWord
        }

        // console.log(currentWord)
        currentIndex ++
    }
    return bestWord
}

console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))
