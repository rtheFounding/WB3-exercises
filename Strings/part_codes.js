let codeWithNum = "DI:12345-M";
let supplierCode = getSupplier(codeWithNum);
let productNumber = getProductNumber(codeWithNum);
let sizeOf = getSize(codeWithNum);

function getSupplier(code) {
    let colonPos = code.indexOf(":")
    partNum = code.substring(0, colonPos);
    return partNum;
}
function getProductNumber(code) {
    let colonPos = code.indexOf(":")
    let dashPos = code.indexOf("-");
    let numbersOfCode = code.substring(colonPos + 1, dashPos)
    return numbersOfCode;
}
function getSize(code) {
    let dashPos = code.indexOf("-");
    let afterDash = code.substring(dashPos + 1);
    return afterDash;
}

console.log(supplierCode);
console.log(productNumber);
console.log(sizeOf);
