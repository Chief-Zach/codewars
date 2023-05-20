String.prototype.toJadenCase = function () {
    let wordList = this.split(' ')
    for (let word in wordList) {
        let currentWord = wordList[word]
        word[0] = word[0].toUpperCase()
        console.log(word)
    }
    return wordList.join(' ')
};

console.log("for each of the people say hello".toJadenCase())