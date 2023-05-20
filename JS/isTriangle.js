function isTriangle(a,b,c) {
    let hyp = Math.max(a,b,c) * Math.max(a,b,c)
    if (hyp === [a,b,c].filter(i => i !== Math.sqrt(Math.max(a,b,c))).reduce((accumulator, currentValue) => accumulator + Math.pow(currentValue, 2))) {
        return false;
    } return true;
}

console.log(isTriangle(7,2,2))