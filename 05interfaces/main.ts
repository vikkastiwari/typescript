interface Point{ // always write interface name in pascal
    x: number,
    y: number
}

/*
point is object
Point is interface
*/

let drawPoint = ( point: Point ) => {
    // .. code
}

// function call where object is passed as an argument
drawPoint( {
    x: 1,
    y:2
})