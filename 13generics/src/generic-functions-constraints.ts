// another example of generic functions with constraints

interface Length{
    length: number;
}

// our type extends interface
// we dont care about specific type that we return
// we have generic type
function countAndDescribe<T extends Length>( element: T ):[T,string] { 
    let description = "No data found.";
    if ( element.length === 1 ) {
        description = "1 data is found.";
    } else {
        description = element.length + " " + "data is found.";
    }
    return [element, description];
}

const ans = countAndDescribe( "Hello ji" );
console.log(ans);
