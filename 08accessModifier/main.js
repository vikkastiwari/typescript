// access modifiers
/*
- private
- public
- protected
*/
var Point = /** @class */ (function () {
    // method 1
    // private x: number;
    // private y: number;
    // constructor (x?:number,y?:number) {
    //     this.x = x;
    //     this.y = y;
    // }
    // method 2
    // we can direclty add access specifier in place where parameters are passed
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // here we dont require to initialize and assign the variables it is taken care by tsc compiler
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
var pointObject = new Point(1, 2);
// pointObject.x = 3; // it will give you error as x is private
pointObject.draw();
