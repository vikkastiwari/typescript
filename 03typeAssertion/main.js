// in this case the type of message variable is string
var message = 'Demo';
var res = message.endsWith('o');
console.log(res);
// in this case the type of message variable is any as we initialized the string to message1 variable in next line
// here type assertion comes into picture - with the help of type assertion we bind the specific type such that we can use appropriate methods.
var message1;
message1 = 'Demo';
// type assertion methods
var res1 = message.endsWith('o');
var alternativeWay = message.endsWith('o');
console.log(res1);
console.log(alternativeWay);
