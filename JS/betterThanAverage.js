function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a,b) => a+b, 0)  /classPoints.length < yourPoints ? "true" : "false"
}

console.log(betterThanAverage([2,3], 5))