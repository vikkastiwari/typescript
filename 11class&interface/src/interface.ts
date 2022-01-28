//? An interface describes the structure of the object
// we can also inherit interface
interface Message{
    sendMessage( message: string ): void;
}

interface Person extends Message{
    readonly name?: string;
    age?: number;
}

// we can also write it using type
// type Persons = {
//     name?: string;
//     age?: number;
//     sendMessage( message: string ): void;
// }


// we can implement more than one interfaces
class Company implements Person{
    name: string;
    age: number;
    phone: number;
    constructor ( protected n: string, protected a: number , phone:number) {
        this.name = n;
        this.age = a;
        this.phone = phone;
    }

    sendMessage(message: string): void {
        console.log(`${message} - By ${this.name}, Phone: ${this.phone}`);
    }
}

let ITCompany = new Company( "Vikas", 123, 99999999 );
ITCompany.sendMessage("Come to the office.")

// we can define it as type
let user: Person;
user = {
    name: "Vikas",
    age: 20,
    sendMessage( message: string ) {
        console.log(`From ${this.name}:`+ message);
    }
}
// console.log(user);
user.sendMessage( "Keep going!" );

//! Intefaces as function types
// type AddFn = ( a: number, b: number ) => number; // define with type

// defined with interface
interface AddFn {
    ( a: number, b: number ): number;
}

let add: AddFn;
add = ( n1: number, n2: number ) => {
    return n1 + n2;
}

const a = add( 1, 2 );
console.log(a);
