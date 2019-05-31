var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        console.log(name);
    }
    Animal.prototype.move = function (distance) {
        console.log("Parent | Animal moved " + distance + " Meters");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof Woof');
    };
    return Dog;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name) {
        return _super.call(this, name) || this;
    }
    Fish.prototype.move = function (distance) {
        console.log("Child | Swam " + distance);
    };
    return Fish;
}(Animal));
var germanShepherd = new Dog('Max');
germanShepherd.move(10);
germanShepherd.bark();
var fish = new Fish('Nemo');
fish.move(10);
