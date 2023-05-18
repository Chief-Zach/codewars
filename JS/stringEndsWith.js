function solution(str, ending){
    console.log(ending.length)
    if (ending.length < 1) {
        return true
    }
    let reversePosition = 1
    while (reversePosition <= str.length) {
        if (str.slice(str.split('').length - reversePosition) === ending) {
            return true
        }
        reversePosition ++
    } return false
}

console.log(solution("Hello", "ello"))