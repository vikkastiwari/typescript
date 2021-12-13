class Point{
    x: number;
    y: number;

    constructor (x?:number,y?:number) {
        this.x = x;
        this.y = y;
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
let pointObject = new Point();
pointObject.draw();