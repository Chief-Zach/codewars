function isValidWalk(walk) {
    if (walk.length < 10 || walk.length > 10) {
        return false
    }
    return walk.filter(i => i !== 'n').length === walk.filter(i => i !== 's').length && walk.filter(i => i !== 'w').length === walk.filter(i => i !== 'e').length;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','w','e']))