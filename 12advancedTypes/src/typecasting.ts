// typecasting

// const userInputElement = document.getElementById( "user-input" )! as HTMLInputElement;

// alternative way

const userInputElement = <HTMLInputElement>document.getElementById( "user-input" )!;

console.log(userInputElement);

userInputElement.value = "Hello ji";