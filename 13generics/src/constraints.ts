// To avoid silent errors and write code in optimal way we make use of constraints
// It is not required to specify each type, we can add it as per our need
function concat<T extends string, U extends number>( x: string, y: number ) {
    return x + y;
}

const c = concat( "IT", 1098 );
console.log(c);
