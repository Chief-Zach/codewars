function highAndLow(numbers){
    numbers = numbers.split(' ')
    for (let x = 0; x < numbers.length; x++) {
        numbers[x] = parseInt(numbers[x])
    }
    return [Math.max.apply(Math, numbers), Math.min.apply(Math, numbers)]
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))