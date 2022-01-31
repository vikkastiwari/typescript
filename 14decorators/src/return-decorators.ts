// Here we will tweak code in a way that when we instantiate then only the decorator's code should be executed

function WithTemplate1( template: string, hookId: string ) {
    console.log( "Template Factory" );
    
    // here we add return to the return of decorator function 
    return function<T extends{new (...args:any[]):{name:string}}> ( originalConstructor: T ) {
        return class extends originalConstructor{
            constructor ( ..._: any[] ) {
                super();
                console.log("execution of withTemplate function...");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h3')!.textContent = this.name;
                }   
            }
        }
  }
}

// here we are chaining a class with a class
@WithTemplate1( '<h3>Welcome!<h3>', "appId1" )
class Person1{
    name = "vikas";
    Id = "hello";
    
    constructor () {
        console.log("Creating person object.");
    }
}

const person1 = new Person1();
console.log(person1);