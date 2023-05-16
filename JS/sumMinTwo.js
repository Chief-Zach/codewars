function sumTwoSmallestNumbers(numbers) {
    let minOne = Math.min.apply(Math, numbers)

    const idx = numbers.indexOf(minOne);
    numbers.splice(idx, idx !== -1 ? 1 : 0);

    let minTwo = Math.min.apply(Math, numbers)

    return minOne + minTwo
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 2]))