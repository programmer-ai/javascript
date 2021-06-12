function capitalize(str) {
    let resault= str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        resault+= str[i]
    }
    return resault
}

capitalize("eggplant")
capitalize("pamplemousse")
capitalize("squid")