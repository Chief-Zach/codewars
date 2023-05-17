function order(words){
    let wordLocations = {}
    let finalWord = []
    for (let word of words.split(" ")) {
        for (let letter of word) {
            if (letter.charCodeAt(0) < 60) {
                wordLocations[word] = parseInt(letter) -1
            }
        }
    }
    let currentLocation = 0;
    while (Object.keys(wordLocations).length > finalWord.length) {
        for (let word of Object.keys(wordLocations)) {
            console.log(currentLocation)
            if (wordLocations[word] === currentLocation) {
                finalWord.push(word)
                console.log("PUSHING " + word)
                currentLocation ++
            }
        }
    }
    return finalWord.join(" ")
}

console.log(order("is2 Thi1s T4est 3a"))