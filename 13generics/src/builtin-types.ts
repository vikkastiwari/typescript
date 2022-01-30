const names: Array<string> = [];
names[0].split( "" );

const promise: Promise<number> = new Promise ( (req,res) => {
    console.log( 10 );
} )
// as promise is of type number the below code will give error as the function we call is of string's function
// promise.split( " " );