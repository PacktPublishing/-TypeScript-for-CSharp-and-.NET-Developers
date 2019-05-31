class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
    console.log(name);
  }
  move(distance: number) {
    console.log(`Parent | Animal moved ${distance} Meters`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof Woof');
  }
}

class Fish extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance: number) {
    console.log(`Child | Swam ${distance}`);
  }
}

let germanShepherd = new Dog('Max');
germanShepherd.move(10);
germanShepherd.bark();

let fish = new Fish('Nemo');
fish.move(10);
