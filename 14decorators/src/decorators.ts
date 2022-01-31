// working with decorator factories - with the help of this we can pass arguments
// when we pass argument it is actually decorator factories
// and when we dont pass any argument it is just a decorator function
function Logger( message: string ) {
    console.log("creation of logger function..")
    return function ( construct: Function ) {
        console.log("execution of logger function..");
        console.log(message);
        console.log(construct);
    }
}

// demonstrating more functionality full decorator which is defined by us similar to what angular utilizes
// it helps us in a way that our functions can be exported and can be utilized by other peoples out there

function WithTemplate( template: string, hookId: string ) {
    console.log("creation of withTemplate function...");
    return function ( constructor: any ) {
    console.log("execution of withTemplate function...");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h3')!.textContent = p.name;
    }
  }
}

function Log( target: any, propertyName: string ) {
    console.log( "creation of Log function..." );
    console.log( target, propertyName );
}

// decorator
// @ is identifier
// we can define more than one decorator in one go
// while creation of decorators they follow top-down approach as like in vanilla js
// but during execution it follows bottom-up approach
@Logger("Executing")
@WithTemplate( '<h3>Welcome!<h3>', "appId" )
class Person{

    // decorator defined with property
    // here when instance property is called target will be the prototype of the object that was created
    // in case of static properties target refers to the constructor
    @Log // it takes two arguments
    name = "vikas";
    
    constructor () {
        console.log("Creating person object.");
    }
}

const person = new Person();
console.log(person);


