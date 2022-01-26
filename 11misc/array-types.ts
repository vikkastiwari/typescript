const value = ["value1", "value2"]; // const values: string[]
const value1 = [1, 2, 3]; // const value1: number[]
const value2 = [1, "value2", 3]; // const value2: (string | number)[]

const specifiedArrayType1: number[] = [1,2,3];
console.log( specifiedArrayType1 );

const specifiedArrayType2: string[] = ["hi", "okay", 'bye'];
console.log( specifiedArrayType2 );

//* for... in we get index over iteration
for ( let key of specifiedArrayType2 ) {
    console.log( key.toUpperCase() );
}
//? o/p: 0,1,2 

//* for... of we get values over iteration
for ( let key of specifiedArrayType2 ) {
    console.log( key.toUpperCase() );
}
//? o/p: HI, OKAY, BYE