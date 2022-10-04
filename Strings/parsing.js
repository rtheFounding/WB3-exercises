function parseAndDisplayName(myName) {
    let spaces = myName.indexOf(" ");
    let firstName = myName.substring(0, spaces);
    let lastName = myName.substring(spaces + 1);
    console.log("Name: " + myName)
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");