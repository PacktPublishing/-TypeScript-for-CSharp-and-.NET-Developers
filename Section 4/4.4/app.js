function WalkIntoClass(constructorFunction) {
    console.log('> Decorator invoked');
    constructorFunction.prototype.selfDrivable = true;
}
//@WalkIntoClass
var Teacher = /** @class */ (function () {
    function Teacher(teacherName) {
        console.log('> Constructor invoked');
        this.teacherName = teacherName;
    }
    return Teacher;
}());
console.log('> Creating an instance of Teacher class');
var martin = new Teacher('Martin');
