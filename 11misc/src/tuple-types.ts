const person: {
    name: string;
    age: number;
    role: [number, string];
    // tuple - it follows defination striclty role[0] should be number & role[1] should be string.
} = {
    name: "vikas",
    age: 20,
    role: [1, 'author']
}

// it gives error when try to do
// person.role[1] = 2;
// person.role = [1,'val','admin']

// but when we try to push the element in role it is executed and it dont gives error - so take care of it, it is exception
person.role.push( 'admin' );