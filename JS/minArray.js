class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min.apply(Math, args)
    }
}

let sif = new SmallestIntegerFinder()