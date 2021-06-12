let input= prompt("guess a number ")
let random= Math.floor(Math.random() *100 + 1)
let guesses= 1

while (input !== "q" || parseInt(input) !== random) {
    if (input < random) {
        input= prompt("Higher");
        guesses++
    } else if (input > random) {
        input= prompt("Lower");
        guesses++
    } else{
        console.log("it took you " + guesses + "guesses");
        break
    }
}