function isIsogram(str){
    return new Set(str.toLowerCase().split('')).size === str.split('').length;
}

console.log(isIsogram("helLo"))