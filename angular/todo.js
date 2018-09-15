var student = /** @class */ (function () {
    function student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.password = 'haha';
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    student.prototype.getName = function () {
        alert(studentOb.password);
        return this.firstName + this.middleName + this.lastName;
    };
    return student;
}());
var studentOb = new student("smith", "bob", "johnson");
studentOb.getName();
alert(studentOb.fullName);
