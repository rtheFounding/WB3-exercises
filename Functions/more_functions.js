function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city + ", " + state + " " + zip);
}

let myName = "Randy";
let myAddress = "23423 Disney Land";
let myCity = "Atlanta";
let myState = "Georgia";
let myZip = 32345; 

/*displayMailingLabel("Randy", "23423 Disney Land", "Atlanta, Georgia 32345"); */

displayMailingLabel(myName, myAddress, myCity, myState, myZip);

function addNumbers(num1, num2) {
    let answer = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + answer)
}

addNumbers(2, 2);

function displayReceipt(totalDue, amountPaid) {
    if (amountPaid > totalDue) {
        let changeDue = Math.abs(totalDue - amountPaid);
        console.log("Total Due: " + totalDue);
        console.log("Amount Paid: " + amountPaid);
        console.log("Change Due: " + changeDue);
    } else if (amountPaid < totalDue) {
        let answer = totalDue - amountPaid;
        console.log("Total Due: " + totalDue);
        console.log("Amount Paid: " + amountPaid);
        console.log("Amount needed: " + answer);
    } else 
    console.log("Have a good day! Come back again!");
}

displayReceipt(200, 200)