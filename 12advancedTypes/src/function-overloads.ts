type Combo = string | number;

function operation( x: string, y: string ):string;
function operation( x: number, y: number ):number; 
function operation( x: Combo, y: Combo ) {
    if ( typeof x === "string" || typeof y === "string" ) { 
        return x.toString() + y.toString();
    }
    return x + y;
}

const val = operation( "1", "2" );
// As the return type of val is union of number and string
// we cannot use any string method on val - we know it will return string still typescript knows it as union of string and number

// to make it work we can typecast the val variable then we can use split on val
// const val = operation( "1", "2" ) as string;
val.split( " " );