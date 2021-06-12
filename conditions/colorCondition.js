let random= Math.floor(Math.random()*10 + 1)
let phrase= ""

if (random === 1) {
    phrase= "stop"
} else if (random === 2) {
    phrase= "slow"
} else if (random === 3) {
    phrase= "go"
} else{
    phrase= "anything"
}

if (phrase === "stop") {
    console.log("red");
} else if (phrase === "slow") {
    console.log("yellow");
} else if (phrase === "go") {
    console.log("green");
} else{
    console.log("purple");
}