//  we define index based fields when we dont know how many fields are to be defined
interface ErrorContainer {
    [prop: string]: string;
}

// we can add  multiple fields here
const errorBag: ErrorContainer = {
    email: "Email not found",
    username:"Invalid username"
}

console.log(errorBag);
