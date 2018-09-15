var Collage = /** @class */ (function () {
    function Collage(collName, colllocation) {
        this.name = collName;
        this.location = colllocation;
    }
    return Collage;
}());
var ob = new Collage("asif", "chennai");
console.log(ob.name);
console.log(ob.location);
// the line below will not let progaram compline.remove the line below to compile.
ob.location = "banglore";
