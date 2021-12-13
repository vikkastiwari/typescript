import { Point } from "./point";

let pointObject = new Point( 1, 2 );
let x = pointObject.x; // getter
console.log(x);
pointObject.x = 19; // setter
console.log(pointObject.x);
pointObject.draw();