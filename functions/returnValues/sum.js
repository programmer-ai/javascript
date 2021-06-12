function sum(arr) {
    let resault= 0
    for (let i = 0; i < arr.length; i++) {
        resault+= arr[i]
    }
    return resault
}

sum([1, 2, 3])
sum([2, 2, 2, 2])
sum([50, 50, 1])