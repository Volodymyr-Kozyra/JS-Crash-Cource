const MATH_PI = 3.14;
const radius = 10;

let result;

result = radius !== 0
    ? MATH_PI * (radius * radius)
    : "Radius can not be equal to zero";
console.log(result);

const userName = "Mark";
const discount  = userName === "Mark"
    ? '30%'
    : '0%';
    console.log("Gratz! Your discout is " + discount);
