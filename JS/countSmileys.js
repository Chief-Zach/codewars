//return the total number of smiling faces in the array
function countSmileys(arr) {
    let smile = {"eyes": [':', ';'], "nose": ['-', '~'], "mouth": [')', 'D']}
    let count = 0
    for (let face of arr) {
        if (face[0] !== smile.eyes[0]) {
            if (face[0] !== smile.eyes[1]) {
                continue
            }
        }
        if (face.length === 2) {
            if (face[1] !== smile.mouth[0]) {
                if (face[1] !== smile.mouth[1]) {
                    continue
                }
            }
        }
        else if (face.length === 3) {
            if (face[1] !== smile.nose[0]) {
                if (face[1] !== smile.nose[1]) {
                    continue
                }
            }
            if (face[2] !== smile.mouth[0]) {
                if (face[2] !== smile.mouth[1]) {
                    continue
                }
            }
        }
        else if (face.length > 3 || face.length < 2) {
            continue
        }
        count ++
    }
    return count;
}

console.log(countSmileys([':)',':(',':D',':O',':;']))