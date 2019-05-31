var Animal = /** @class */ (function () {
    function Animal(name) {
        this.animalName = name;
    }
    Animal.prototype.DisplayAnimalName = function () {
        console.log(this.animalName);
    };
    Animal.prototype.MakeSound = function () {
        if (this.animalName === 'Dog') {
            console.log('Woof Woof');
        }
        if (this.animalName === 'White Tiger') {
            console.log('Rrrrr');
        }
    };
    return Animal;
}());
var dog = new Animal('Dog');
dog.DisplayAnimalName();
var tiger = new Animal('White Tiger');
tiger.DisplayAnimalName();
dog.MakeSound();
tiger.MakeSound();
