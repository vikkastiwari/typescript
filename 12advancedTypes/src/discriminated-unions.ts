// This is a special type of guard that helps you with implementing guards and are available when working with objects

interface Bird {
    type: "bird"; // it is not type type, it is a literal type - the discriminated property that every defined interface will have in common
    flyingSpeed: number;
}

interface Horse {
    type: "horse";
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal( animal: Animal ) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
    
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving speed of animal: "+speed);
}

moveAnimal( { type: "horse", runningSpeed: 100 } );

// It is useful for union types and objects