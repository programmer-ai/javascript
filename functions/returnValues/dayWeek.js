function returnDay(num) {
    if (num > 7 || num < 1) {
        return null
    }
    let week= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return week[num - 1]
}

returnDay(1)
returnDay(7)
returnDay(4)
returnDay(0)