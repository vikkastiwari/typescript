var a1; // if not specified any type then it by default becomes "any" - hover on variable to see
a1 = 1;
// in this way we can specify the type of each variable
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4];
var f = [1, false, 1.0, "vikas", true];
var ColorRed = 0;
var ColorBlue = 1;
var ColorGreen = 2;
// JS follows complex defination which is defined under with the help of enum in ts in simplified manner - refer main.js
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var bgColor = Color.Blue;
