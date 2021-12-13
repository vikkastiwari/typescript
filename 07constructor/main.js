var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        // code...
    };
    return Point;
}());
// if we dont pass the parameter we get error
// but what if we dont want to pass the parameter and still want our code to compile without any error
// just make the parameters optional in constructor by adding '?'
// eg: constructor (x?:number,y?:number)
var pointObject = new Point();
pointObject.draw();
