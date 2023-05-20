function sumArray(array) {
    let minMax = [0, 0]
    let sum = 0
      for (let number in array)  {
        if (array[number] > array[minMax[1]]) {
            minMax[1] = number
        }
        if (array[number] < array[minMax[0]]) {
            minMax[0] = number
        }
    }
    console.log(minMax)
    for (let number in array) {
        if (number !== minMax[0] && number !== minMax[1]) {
            sum += array[number]
        }
    }
    return sum
}

console.log(sumArray([ 0, 1, 6, 10, 10, -1 ]))