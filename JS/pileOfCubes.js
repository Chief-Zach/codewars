function findNb(m) {
    for (let x=0;;x++) {
        if (m > 0) {
            let currentVol = Math.pow(x + 1, 3)
            m -= currentVol
        } else if(m===0) {
            return x
        } else return -1
    }
}

console.log(findNb(135440716410000))