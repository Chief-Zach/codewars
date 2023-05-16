function disemvowel(str) {
    let vowels = ['a','e','i','o','u']
    let string = str.split('')
    let newStr = string.filter(checkVowel)
    function checkVowel(letter) {
        for (let x of vowels) {
            if (x === letter.toLowerCase())
                return false
        }
        return true
    }
    return newStr.join('');
}

console.log(disemvowel("This website is for losers LOL!"))