var Human = /** @class */ (function () {
    function Human(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Human.prototype.sayAge = function () {
        console.log("this agen is " + this.name);
    };
    Human.prototype.showhobbies = function () {
        console.log("this is may hobbies " + this.hobbies);
    };
    return Human;
}());
var HumanOb = new Human('Approve', 22, ["crickter", "reading", "travelling"]);
HumanOb.sayAge();
HumanOb.showhobbies();
