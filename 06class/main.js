var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        // code...
    };
    return Point;
}());
var pointObject = new Point();
pointObject.x = 1;
pointObject.y = 2;
pointObject.draw();
