function duplicateCount(text){
    let duplicates = 0
    for (let letter of new Set(text.toLowerCase())) {
        if (text.length > text.toLowerCase().split('').filter(i => i !== letter).length + 1) {
            duplicates ++
        }
    }
    return duplicates
}

console.log(duplicateCount("aabBcde"))