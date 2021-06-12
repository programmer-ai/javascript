function allEvens(numbers) {
    return numbers.every(number => number % 2 === 0)
}

allEvens([2, 4, 6, 8])
allEvens([1, 4, 6, 8])
allEvens([1, 2, 3])

function someEvens(numbers) {
    return numbers.some(number => number % 2 === 0)
}

someEvens([2, 4, 6, 8])
someEvens([1, 4, 6, 8])
someEvens([1, 2, 3])