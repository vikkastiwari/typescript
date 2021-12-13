// access modifiers
/*
- private
- public
- protected
*/
class Point{
    constructor (private _x?:number,private _y?:number) {
    // here we dont require to initialize and assign the variables it is taken care by tsc compiler
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
        
     }
    calculateDistance(anotherPoint: Point) {
        // code...
    }

    get x() {
        return this._x;
    }

    set x( value ) {
        if ( value < 0 ) {
            throw new Error("Invalid Value: Value cannot be negative.");
            
        }
        this._x = value;
    }
}
let pointObject = new Point( 1, 2 );
let x = pointObject.x; // getter
console.log(x);
pointObject.x = 19; // setter
console.log(pointObject.x);
pointObject.draw();