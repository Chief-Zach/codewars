function productFib(prod){
    let first = 1
    let second = 1
    while ((first * second) < prod) {
        let next = first + second
        first = second
        second = next
    }
    return [first, second, first * second === prod]
}

console.log(productFib(5895))