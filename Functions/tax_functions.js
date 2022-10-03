function getSocSecTax(amount) {
    return amount * (6.2 / 100);
}

let grossPay = 50000;
let socialTax = getSocSecTax(grossPay);
console.log(socialTax);

function getMedicareTax(amount) {
    return amount *  (1.45 / 100);
}

let grossAmount = 50000;
let medicareTax = getMedicareTax(grossAmount);
console.log(medicareTax);
// if they wanted the monthly amount I would just divide medicareTax / 12 or socialTax / 12;
