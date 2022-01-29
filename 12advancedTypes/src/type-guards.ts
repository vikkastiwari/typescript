type Combinable = string | number;
function add( a: Combinable, b: Combinable ) {
    if ( typeof a === "string" || typeof b === "string" ) { // it is type guard
        return a.toString() + b.toString();
    }
    return a + b;
}