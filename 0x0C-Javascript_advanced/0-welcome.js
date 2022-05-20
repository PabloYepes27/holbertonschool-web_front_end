function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;

    function displayFullName() {
        alert(`Welcome ${fullName}!`)
    }

    displayFullName()
}

// How to test

// welcome("Holberton", "School");
// alert(fullName);
// Uncaught ReferenceError: fullName is not defined at <anonymous>:10:7