var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 0; }
        console.log(this.name + " move the " + distanceInMeter + " meters");
    };
    return Animal;
}());
var snake = /** @class */ (function (_super) {
    __extends(snake, _super);
    function snake(name) {
        return _super.call(this, name) || this;
    }
    snake.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 5; }
        console.log("slithering....");
        _super.prototype.move.call(this, distanceInMeter);
    };
    return snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 45; }
        console.log("galloping....");
        _super.prototype.move.call(this, distanceInMeter);
    };
    return Horse;
}(Animal));
var sam = new snake("Sammy the Python");
var tom = new Horse("Tommy the paloomina");
sam.move();
