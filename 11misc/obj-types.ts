const person = {
    name: "vikas",
    age:20
}

//! when you hover person.age you get something like
//?  const person: {
//?     name: string;
//?     age: number;
//?  }
//* It is the object type infered by ts
console.log(person.age);

// so with this we can define object in more specific way but this is not recommended
const person1: {
    name: string; // this is not compiled to js as js doesn't supports types
    age: number;
} = {
    name: "vikas",
    age: 20
}
