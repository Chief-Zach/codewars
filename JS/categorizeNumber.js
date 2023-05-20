function openOrSenior(data){
    let final = []
    for (let person of data) {
        if (person[0] >= 55 && person[1] > 7) {
            final.push("Senior")
        } else final.push("Open")
    }
    return final
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))