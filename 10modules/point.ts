export class Point{
    constructor (private _x?:number,private _y?:number) {}

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
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