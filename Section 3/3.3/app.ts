class Animal {
  animalName: string;

  constructor(name: string) {
    this.animalName = name;
  }

  DisplayAnimalName(): void {
    console.log(this.animalName);
  }

  MakeSound(): void {
    if(this.animalName === 'Dog') {
      console.log('Woof Woof');
    }
    if(this.animalName === 'White Tiger') {
      console.log('Rrrrr');
    }

    }
  }



let dog = new Animal('Dog');
dog.DisplayAnimalName();

let tiger = new Animal('White Tiger');
tiger.DisplayAnimalName();


dog.MakeSound();
tiger.MakeSound();
