function tribonacci(signature,n){
    if (n <= 0) {
        return []
    }
    length = signature.length
    for (x of Array(n)) {
        let sum = 0
        let arraySlice = signature.slice((signature.length - 3), signature.length)
        for (const value of arraySlice) {
            sum += value;
        }
        signature.push(sum)
    }
    console.log(signature.slice(0, n))
    return signature.slice(0, n)
}

tribonacci([1,1,1], 4)