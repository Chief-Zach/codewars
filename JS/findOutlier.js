function findOutlier(integers){
    let lists = {"even": [], "odd": []}
    for (let x of integers) {
        if (x % 2 === 0) {
            lists["even"].push(x)
        }
        else {
            lists["odd"].push(x)
        }
    }
    if (lists["even"].length > 1) {
        return lists["odd"][0]
    }
    return lists["even"][0]
}

console.log(findOutlier([2,6,8,10,3]))