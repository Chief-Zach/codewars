function reverseWords(str) {
    str = str.split(" ")
    for (let word in str) {
        str[word] = str[word].split('').reverse().join('')
    }
    return str.join(' ')
}

console.log(reverseWords("Hello my name is Zach"))