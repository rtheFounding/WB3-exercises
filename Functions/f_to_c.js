function convertFtoC(currentTemp) {
    return (5 / 9) * (currentTemp - 32);
}

let currentTemp = 212;
let celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp)