function friend(friends){
    for (let friend of friends) {
        if (friend.length !== 4) {
            friends = friends.filter(i => i !== friend)
        }
    }
    return friends
}

console.log(friend(["Ryan", "Kieran", "Mark"]))