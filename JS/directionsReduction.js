function dirReduc(arr){
    let neighbors = {"north": "south", "south": "north", "east": "west", "west": "east"}
    let changed = true
    while (changed === true) {
        changed = false
        for (let direction=0; direction < arr.length - 1; direction++) {
            if (arr[parseInt(direction)].toLowerCase() === neighbors[arr[parseInt(direction) + 1].toLowerCase()]) {
                // console.log(`STRIPPING ${arr[parseInt(direction)]} and ${arr[parseInt(direction) + 1]} to: `)
                arr.splice(direction, 2)
                changed = true
            }
        }
    }
    return arr
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
    ["WEST"]))