// generic functions
function merge<T, U>( objA: T, objB: U ) {
    return Object.assign( objA, objB );
}

// The intersection of objects are by default understood by typescript so we need not required to define :T&U
function merge1<T, U>( objA: T, objB: U ):T&U {
    return Object.assign( objA, objB );
}

// now after defining it with generic function we can access its values like
const merged = merge( { name: "Vikas" }, { id: 2 } );
const merged2 = merge( { name: "Vikas", role:["writer","coder","creator"] }, { id: 2 } );
console.log(merged.id);
console.log( merged2.role );

// we can also specifically set the object types explicitly
const merged3 = merge<{ Name: string }, { Age: number }>( { Name: "Bob" }, { Age: 18 } );
console.log( merged3 );
// doing it is obviously redundant
