function duplicateEncode(word) {
    let list = []
    let final = []
    for (let x of word) {
        list.push(x)
    }
    let length = list.length
    for (let y of list) {
        list = list.filter(i => i === y)
        if (list.length - 1 !== length) {
            final.push()
        }
    }


}