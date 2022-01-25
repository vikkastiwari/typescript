var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// ! we write it when we are assure that the id's exists in html page
// by writing HTMLInputElement we are typecasting it
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    // + converts it to number
    console.log(add(+input1.value, +input2.value));
});
