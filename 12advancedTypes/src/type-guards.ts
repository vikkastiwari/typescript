type Combinable = string | number;
function add( a: Combinable, b: Combinable ) {
    if ( typeof a === "string" || typeof b === "string" ) { // it is type guard
        return a.toString() + b.toString();
    }
    return a + b;
}

// custom types
type Emp = {
    name: string;
    startDate: string;
}
type Admin = {
    name: string;
    privilege: string;
}

// setting guard 
function print( user: Emp | Admin ) {
    console.log(user.name);
    
    if ( "startDate" in user )
        console.log( "Start Date: " + user.startDate);

    if ( "privilege" in user )
        console.log("Privileges:" + user.privilege);
}

const user: Admin = {
    name: "Vikas",
    privilege:"Host"
}

print( user );

// Type guard on class
class Car{
    drive() {
        console.log("Driving Car");
    }
}

class Truck{
    drive() {
        console.log("Driving Truck");
    }
    cargo(amount:number) {
        console.log("Loading cargo:"+amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle:Vehicle) {
    vehicle.drive();

    // type guard on class
    if ( vehicle instanceof Truck ) {
        vehicle.cargo( 100 );
    }
}

useVehicle(v2);