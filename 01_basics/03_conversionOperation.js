let score = 33;

console.log(typeof score);
console.log(typeof(score)); // Two different ways of using typeof operator.

score = '33';
let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

score = '33a';
let valueInNumber1 = Number(score);
console.log(valueInNumber1); // NaN => Not a Number
console.log(typeof valueInNumber1); // NaN is also type of number

// Number Conversion
// '33' => 33
// '33abc' => NaM
// true => 1 & false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// Boolean conversion
// 1 => true & 0 => false
// '' => false
// 'Vinayak' => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);