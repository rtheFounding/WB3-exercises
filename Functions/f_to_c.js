function convertFtoC(randomTemp) {
    return (5 / 9) * (randomTemp - 32);
}

let currentTemp = 212;
let celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp)