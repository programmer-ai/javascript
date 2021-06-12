let input= prompt("what to do")
let list= []

while (input !== "q") {
    if (input === "new") {
        input= prompt("enter new to do")
        list.push(input)
        console.log(`${input} addes to list`);
    } else if (input === "list") {
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }
    } else if (input === "delete") {
        input= parseInt(prompt("enter index to delete"))
        console.log(`${list.splice(input,1)} removed`);
    }
    input= prompt("what to do")
}