function getSocSecTax(amount) {
    return amount * (6.2 / 100);
}

let grossPay = 1042;
let socialTax = getSocSecTax(grossPay);
console.log(socialTax.toFixed(2));

function getMedicareTax(amount) {
    return amount *  (1.45 / 100);
}

let grossAmount = 1042;
let medicareTax = getMedicareTax(grossAmount);
console.log(medicareTax.toFixed(2));

function getFederalTax(amount, code) {
    if (code == 0) {
        return amount * (23 / 100)
    } else if (code == 1) {
        return amount * (21 / 100)
    } else if (code == 2) {
        return amount * (19.5 / 100) 
    } else if (code == 3) {
        return amount * (18.5 / 100)
    } else {
        return amount * .18 - (2 * .005)
    }
}


console.log(getFederalTax(1042, 2))