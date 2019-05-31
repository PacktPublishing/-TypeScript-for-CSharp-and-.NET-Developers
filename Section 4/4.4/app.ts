function WalkIntoClass(constructorFunction: Function) {
  console.log('> Decorator invoked');
  constructorFunction.prototype.selfDrivable = true;
}

//@WalkIntoClass
class Teacher {
  private teacherName: string;
  constructor(teacherName: string) {
    console.log('> Constructor invoked');
    this.teacherName = teacherName;
  }
}

console.log('> Creating an instance of Teacher class');
let martin = new Teacher('Martin');
