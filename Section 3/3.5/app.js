var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.DisplayName = function () {
        console.log('Employee Class');
        console.log("Captain " + this.firstName + " " + this.lastName);
    };
    return Employee;
}());
var emp = new Employee('Jack', 'Sparrow');
emp.DisplayName();
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.DisplayName = function () {
        console.log('Customer Class');
        // console.log(`Customer : ${this.firstName} ${this.lastName}`);
    };
    return Customer;
}());
var customer = new Customer('Jackie', 'Chan');
customer.DisplayName();
