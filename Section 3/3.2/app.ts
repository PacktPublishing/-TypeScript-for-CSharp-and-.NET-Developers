function WelcomeUser(userName: string) {
  console.log('Hello ' + userName);
}

WelcomeUser('Tom');

function AddTwoNumbers(numberOne: number, numberTwo: number) {
  return numberOne + numberTwo;
}


console.log(AddTwoNumbers(30, 5));

function AddNumbers(array: number[]) {
  let total = 0;
  for(let n of array) {
    total = total + n;
  }
  return total;
}

let arrayNumbers = [1, 2, 6, 10, 1, 10, 20];
console.log(AddNumbers(arrayNumbers));


function WelcomeUserFullName(firstName: string,
  lastName?: string) {
    if(lastName == null) {lastName = '';}
console.log('Hello ' + firstName +' '+ lastName);
}

WelcomeUserFullName('Adam');
WelcomeUserFullName('Ahmad','Mohey');

let message = function(userName: string) {
  console.log('Hello ' + userName);
}

message('Bill Gates');
