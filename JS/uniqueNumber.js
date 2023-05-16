function findUniq(arr) {
    console.log(arr.filter(i => i === arr[0]))
    return ((arr.filter(i => i === arr[0]).length > 1) ? arr.filter(i => i !== arr[0])[0] : arr[0])
}

console.log(findUniq([ 0, 0, 1 ]))