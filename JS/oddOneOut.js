function findOdd(A) {
    let target = A[0]
    let length = A.length
    A = A.filter(i => i !== target)
    if ((length - A.length)%2===1) {
        return target
    }
    if (A.length > 0) {
        return findOdd(A)
    }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))