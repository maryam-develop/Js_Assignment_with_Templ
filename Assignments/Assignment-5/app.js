// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var x=3;
var y=5;

// document.write("Sum of "+x +" and "+ y +" is " + (x + y) );
// 2. Repeat task1 for subtraction, multiplication, division & modulus.
//  console.log("Substract of "+y +" and "+ x +" is " + ( y-x) ); 
// console.log("Multiplication of "+x +" and "+ y +" is " + (x * y) ); 
// console.log("Division of "+x +" and "+ y +" is " + (x / y) ); 
// console.log("Modulus of "+x +" and "+ y +" is " + (x % y) );

// 3 Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

var num ;
document.write("Value after variable declaration is: " + num)
num = 5;
document.write("<br>Initial value: " + num);
num ++;
document.write("<br>Value after increment is " + num);
num = num + 7;
document.write("<br>Value after addition is " + num);
num --;
document.write("<br>Value after decrement is " + num);
num = num % 3;
document.write("<br>The remainder is " + num);
