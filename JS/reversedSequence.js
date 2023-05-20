const reverseSeq = n => {
    return [...Array(n+1).keys()].slice(1).reverse()
};

console.log(reverseSeq(5))