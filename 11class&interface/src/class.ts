abstract class Department{

    // we have readonly modifier as well
    // private readonly id: string;

    // name: string;
    // shorthand initialization
    constructor ( protected name: string ) {
        // this.name=n;
    }
    // with the help of this we can access variables inside the class else it will refer to global name if defined
    // adding `this:Department` restricts calling member to use outer this
    // here it refers to this of Department class
    describe(this:Department) {
        console.log("Department: " + this.name);
    }

    // static method
    static justPrint() {
        console.log("Static Call:" + this.name);
    }

    abstract dummy( this: Department ): void;
}

// const accounting = new Department( "Accounting" );
// console.log(accounting);
// accounting.describe();

// if we dont pass name parameter, it will give error as we are violating this:Department in describe method
// const account = { name:"Vikas",describe: accounting.describe }
// account.describe();

//? INHERITANCE
class ITDept extends Department{
    constructor (public readonly name:string, private admins:string[]) {
        super( "Vikas" );
        // only after defining super, we can make use of this keyword
        this.admins = admins;
    }
    dummy(){
        console.log( "Abstract method implemented:" + this.name );
    }
}

const it = new ITDept( "Vikas", ["Vikas-IT07"] );
console.log( it );

// Static method call
Department.justPrint();