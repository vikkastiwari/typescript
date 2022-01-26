const button = document.querySelector( "button" )!;
const input1 = document.getElementById( "num1" )! as HTMLInputElement;
const input2 = document.getElementById( "num2" )! as HTMLInputElement;
// ! we write it when we are assure that the id's exists in html page
// by writing HTMLInputElement we are typecasting it
function add( num1:number, num2:number ) {
    return num1 + num2;
}
button.addEventListener( "click", () => {
    // + converts it to number
    console.log( add( +input1.value, +input2.value ) );
})