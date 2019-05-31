function WelcomeUser(userName) {
    console.log('Hello ' + userName);
}
WelcomeUser('Tom');
function AddTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(AddTwoNumbers(30, 5));
function AddNumbers(array) {
    var total = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var n = array_1[_i];
        total = total + n;
    }
    return total;
}
var arrayNumbers = [1, 2, 6, 10, 1, 10, 20];
console.log(AddNumbers(arrayNumbers));
function WelcomeUserFullName(firstName, lastName) {
    if (lastName == null) {
        lastName = '';
    }
    console.log('Hello ' + firstName + ' ' + lastName);
}
WelcomeUserFullName('Adam');
WelcomeUserFullName('Ahmad', 'Mohey');
var message = function (userName) {
    console.log('Hello ' + userName);
};
message('Bill Gates');
