function parseAndDisplayName(myName) {
    if (myName.indexOf(" ") == -1) { // no space
        console.log("Name: " + myName)
        console.log("Only name: " + myName)
    } else if (myName.indexOf(" ") == myName.lastIndexOf(" ")) {
        let spaces = myName.indexOf(" ");
        let firstName = myName.substring(0, spaces);
        let lastName = myName.substring(spaces + 1);
        console.log("Name: " + myName)
        console.log("First name: " + firstName);
        console.log("Last name: " + lastName);
    } else {
        let spaces = myName.indexOf(" "); 
        let firstName = myName.substring(0, spaces);
        let rightName = myName.substring(spaces + 1);
        let secondSpace = rightName.indexOf(" ");
        let middleName = rightName.substring(0, secondSpace);
        let lastName = rightName.substring(secondSpace + 1)
        console.log("Name: " + myName)
        console.log("First name: " + firstName);
        console.log("Middle name: " + middleName)
        console.log("Last name: " + lastName);
    }
}
parseAndDisplayName("Randy Rivera")
parseAndDisplayName("Alan Japan Solis");
parseAndDisplayName("Cher");