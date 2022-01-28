// function return types

// specified type
function add(val:number): number | string{
    return val;
}

// undefined type
function sub(): undefined{
    return;
}

// void type
function print(): void{
    console.log("void type");
}

// function types

function combo( num1: number ) { console.log( num1 ); return 0; }

let callFunction:Function; // defining function type
callFunction = combo;

// other of defining return type using callback
// it takes a number and returns a number
let callFunction2: (a:number) => number;
callFunction2 = combo;


// CALLBACKS & FUNCTION TYPES
function addAndHandle( n1: number, n2: number, cb: ( num: number ) => void ) {
    const result = n1 + n2;
    cb( result );
}

addAndHandle( 1, 2, ( result ) => {
    console.log(result);
    
} )

// Unknown and Never types

let userInput: unknown;
userInput = 5;
userInput = 'vikas';

let user: string;
// if we assign userInput to user it gives error as unknown type is more stricter than unknown type.
// user = userInput;
