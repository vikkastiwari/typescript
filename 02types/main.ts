let a1; // if not specified any type then it by default becomes "any" - hover on variable to see
a1 = 1;

// in this way we can specify the type of each variable
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3, 4];
let f: any[] = [1, 1.0, "vikas", true];

const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;

// JS follows complex defination which is defined under with the help of enum in ts in simplified manner - refer main.js
enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };
let bgColor = Color.Blue;
