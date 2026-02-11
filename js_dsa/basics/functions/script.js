//Even or Odd function
function evenOrOdd(num){
    return ((num%2)==0)?console.log("even"):console.log("odd");
}
evenOrOdd(18);
//Area of circle
function areaOfCircle(radius){
    return console.log(3.14*(radius**2));
}
areaOfCircle(18);
//sum of an array
function sumOfAnArray(array) {
    console.log(array.reduce((sum,elem)=> sum + elem,0));
}
sumOfAnArray([1,2,3,4,5]);
//check if a string starts with a character
function checkForCharacter(str,char){
    return str.slice(0,1)===char ? console.log("true"):console.log("false");
}
checkForCharacter('navya','n');
checkForCharacter('navya','v');
//larger of two number
function largerOfTwoNumbers(num1,num2){
    return num1>num2?console.log(num1):console.log(num2);    
}
largerOfTwoNumbers(14,90);
//factorial of a number
function factorialOfANumber(num){
    if(num <=0 || num === 1) return 1;//base case
    return num*factorialOfANumber(num-1);
}
console.log(factorialOfANumber(5));
//Reversing a string
function reverseString(str){
    return str.split('').reverse().join("");//reverse returns an array so join function to be used to get the string
}
console.log(reverseString('navya'));
//Largest element in an array
function largestNumInAnArray(arr){
    let largest = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largestNumInAnArray([5,7,12,56,7]));
// convert a string to kebab case
function kebabCaseString(str){
    return str.toLowerCase().split(' ').join('-');
}
console.log(kebabCaseString('hello World'))
//function to print hello world 
function helloWorld(){
    return "hello world";
}
console.log(helloWorld());

// return positive , negative or zero for a number
let num = -5;
if(num < 0 ) console.log("negative");
else if(num === 0 ) console.log("zero");
else console.log("positive");

// celcius to fahrenheit
function celciusToFahrenheit(temp){
    return (temp*9/5)+32;
}
console.log(celciusToFahrenheit(50));

//average of numbers in an array
let array = [1,2,4,5,6];
