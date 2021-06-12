const num = Math.floor(Math.random()*102 + 1);

if(num <= 100) {
    if(num >= 50) {
        console.log("HEY");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT it");
        }
    }
}