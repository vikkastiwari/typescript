// access modifiers
/*
- private
- public
- protected
*/
class Point{
    // method 1
    // private x: number;
    // private y: number;

    // constructor (x?:number,y?:number) {
    //     this.x = x;
    //     this.y = y;
    // }

    // method 2
    // we can direclty add access specifier in place where parameters are passed
    constructor (private x?:number,private y?:number) {
    // here we dont require to initialize and assign the variables it is taken care by tsc compiler
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
        
     }
    calculateDistance(anotherPoint: Point) {
        // code...
    }
}

// if we dont pass the parameter we get error
// but what if we dont want to pass the parameter and still want our code to compile without any error
// just make the parameters optional in constructor by adding '?'
// eg: constructor (x?:number,y?:number)
let pointObject = new Point( 1, 2 );
// pointObject.x = 3; // it will give you error as x is private
pointObject.draw();