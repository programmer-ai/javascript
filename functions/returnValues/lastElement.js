function lastElement(arr) {
    if (arr.length === 0) {
        return null
    }
    return arr[arr.length-1]
}

lastElement([3, 7, 5])
lastElement([1])
lastElement([])