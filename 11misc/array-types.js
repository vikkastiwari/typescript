var values = ["value1", "value2"]; // const values: string[]
var value1 = [1, 2, 3]; // const value1: number[]
var specifiedArrayType = ["hi", "okay", 'bye'];
console.log(specifiedArrayType);
// for... in we get index over iteration
// for... of we get values over iteration
for (var _i = 0, specifiedArrayType_1 = specifiedArrayType; _i < specifiedArrayType_1.length; _i++) {
    var key = specifiedArrayType_1[_i];
    console.log(key.toUpperCase());
}
