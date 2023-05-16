function alphabetPosition(text) {
    let list = []
    for (let x of text) {
        if (64 < x.charCodeAt(0) && x.charCodeAt(0) < 123) {
            if (!(90 < x.charCodeAt(0) && x.charCodeAt(0) < 97)) {
                // list.push((x.charCodeAt(0) < 91) ? x.charCodeAt(0) - 64 : x.charCodeAt(0) - 96)
                list.push(x.charCodeAt(0))
            }
        }
    }
    return list.join(' ');
}

console.log(alphabetPosition("A"))