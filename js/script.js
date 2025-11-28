// Assignment-2

//OPERATORS

// Create two numbers and perform the following operations & log:
 let c = 10;
 let b = 3;
//  console.log(c+b);//13
//  console.log(c-b);//7
//  console.log(c/b);//3.33333333333333
//  console.log(c*b);//30
//  console.log(c%b);//1

//Write:
let x = 5;
// x = x + 3;// Rewrite this using +=
x += 3;
// console.log(x);//8
//Do the same for -=, *=, /=
x -= 3;
// console.log(x);//5
x *= 3;
// console.log(x);//15
x /= 3;
// console.log(x);//5

let count = 5;
// console.log(count);//5
// Use count++ and log value before and after
count++;
// console.log(count);//6
count--;
// console.log(count);//5

//Compare two values:
// console.log(5 == "5");//true
// not preferred as doesn't checks data type strictly
// console.log(5 === "5");//false
//checks the data type as well and is a strict operator

//Comparison operators
// console.log(10>5);// true
// console.log(10<20);//true
// console.log(10==10);//true

//Logical operators
// console.log(true&&false);//false
// console.log(true||false);//true
// console.log(!true);//false

//Predict the result
// console.log(5>3 && 10>8);//true
// console.log(5>3 || 10<8);//true

//Bitwise operator
// console.log(5&1);// 1(001)(& operator returns 1 only if both bits are one)
// console.log(5|1);// 5(101)(| operator returns 1 if at least one of the corresponding bits is 1)

//VARIABLE HOISTING

//Predict output of:
console.log(a);//undefined
var a = 10;
