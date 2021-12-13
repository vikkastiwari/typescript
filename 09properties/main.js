// access modifiers
/*
- private
- public
- protected
*/
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // here we dont require to initialize and assign the variables it is taken care by tsc compiler
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        // code...
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Invalid Value: Value cannot be negative.");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var pointObject = new Point(1, 2);
var x = pointObject.x; // getter
console.log(x);
pointObject.x = 19; // setter
console.log(pointObject.x);
pointObject.draw();
