function likes(names) {
    if (names.length === 0) {
        return "no one likes this"
    }
    else if (names.length === 1) {
        return names[0] + " likes this"
    }
    else if (names.length < 4){
        let inserted = 0
        for (let nameNum of Array(names.length - 1).keys()) {
            if (nameNum + inserted !== names.length - 2) {
                names.splice(nameNum + inserted + 1, 0, ", ")
            }
            else {
                names.splice(nameNum + inserted + 1, 0, " and ")
            }
            inserted ++

        }
        return names.join("") + " like this"
    }
    else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}



console.log(likes(['Max', 'John', 'Mark', 'Sam', 'Doug']))