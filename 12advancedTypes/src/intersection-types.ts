type Person = {
    id: number;
    name: string;
}

type Position = {
    role: string;
}

// intersection type
type Employee = Person & Position;

// we can also achieve the same using interface
// and then we can simply extend the interfaces

// interface Employee extends Person, Position{} // It will work just fine

const e1: Employee ={
    id: 12,
    name: "Broono",
    role:"Manager"
}
