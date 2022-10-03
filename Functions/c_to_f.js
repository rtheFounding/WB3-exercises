function convertCtoF(randomTemp) {
    return ( randomTemp * 9/5) + 32;
}

let currentTemp = 92;
let fahrenheitTemp = convertCtoF(currentTemp);
console.log(fahrenheitTemp)