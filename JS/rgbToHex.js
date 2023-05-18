function rgb(r, g, b) {
    return componentToHex(r).toString() + componentToHex(g).toString() + componentToHex(b).toString();
}
function componentToHex(c) {
    console.log(c)
    if (c < 0) {
        return "00"
    }

    if (c > 255) {
        return "FF"
    }
    let hex = c.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
}

console.log(rgb(500, 0, -20))

