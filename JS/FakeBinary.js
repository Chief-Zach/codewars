function fakeBin(x){
    let endList = []
    for (let number of Array(x.split('').length).keys()) {
        if (parseInt(x[number]) < 5) {
            endList.push('0')
            continue
        } endList.push('1')
            }
    return endList.join('')
}

console.log(fakeBin('45385593107843568'))