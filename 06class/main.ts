class Point{
    x: number;
    y: number;
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
        
     }
    calculateDistance(anotherPoint: Point) {
        // code...
    }
}

let pointObject = new Point();
pointObject.x = 1;
pointObject.y = 2;
pointObject.draw();