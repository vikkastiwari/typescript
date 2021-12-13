// in this case the type of message variable is string
let message = 'Demo';
let res = message.endsWith( 'o' );
console.log( res );

// in this case the type of message variable is any as we initialized the string to message1 variable in next line

// here type assertion comes into picture - with the help of type assertion we bind the specific type such that we can use appropriate methods.
let message1;
message1 = 'Demo';
// type assertion methods
let res1 = (<string>message).endsWith( 'o' );
let alternativeWay = ( message as string ).endsWith( 'o' );

console.log( res1 );
console.log( alternativeWay );

