// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var x=3;
// var y=5;

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

// var num ;
// document.write("Value after variable declaration is: " + num)
// num = 5;
// document.write("<br>Initial value: " + num);
// num ++;
// document.write("<br>Value after increment is " + num);
// num = num + 7;
// document.write("<br>Value after addition is " + num);
// num --;
// document.write("<br>Value after decrement is " + num);
// num = num % 3;
// document.write("<br>The remainder is " + num);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// var mov_ticket = 600 ;
// var mov_ticket_5 = 5;
// console.log("Total cost to buy " +mov_ticket_5+"tickets to a movie is "+ mov_ticket_5 * mov_ticket+" PKR");

// 5. Write a script to display multiplication table of any number in your browser. 

// var table = 4 ;
// var a1 =  4*1;
// var a2 =  4*2;
// var a3 =  4*3;
// var a4 =  4*4;
// var a5 =  4*5;
// var a6 =  4*6;
// var a7 =  4*7;
// var a8 =  4*8;
// var a9 =  4*9;
// var a10 =  4*10;

// console.log("Table of 4");
// console.log(table +" x 1 = " +a1);
// console.log(table +" x 2 = " +a2);
// console.log(table +" x 3 = " +a3);
// console.log(table +" x 4 = " +a4);
// console.log(table +" x 5 = " +a5);
// console.log(table +" x 6 = " +a6);
// console.log(table +" x 7 = " +a7);
// console.log(table +" x 8 = " +a8);
// console.log(table +" x 9 = " +a9);
// console.log(table +" x 10 = " +a10);

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

// var C = 36;
// var convert_C = (C * 9/5)+32;
// document.write(C+"<sup>0</sup> C is " + convert_C+"<sup>0</sup> F");
// var F = 101;
// var convert_F = (F -32)*5/9;
// document.write("<br>"+F+"<sup>0</sup> F is "+convert_F+ "<sup>0</sup> C ")

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var item1 = 650;
// var item2 = 100;
// var item1_quantity = 3;
// var item2_quantity = 7;
// var shipping_charges = 100;
// var total_cost = item1*item1_quantity + item2*item2_quantity + shipping_charges;
// document.write("<h1>Shopping Cart</h1>" +"<br>")
// document.write("Price of item 1 is " + item1 +"<br>")
// document.write("Quantity of item 1 is " + item1_quantity +"<br>")
// document.write("Price of item 2 is " + item2 +"<br>")
// document.write("Quantity of item 2 is " + item2_quantity +"<br>")
// document.write("Shipping Charges is " + shipping_charges +"<br><br>")
// document.write("Total Cost of your order is " + total_cost );

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// var total_marks = 980;
// var marks_obtained = 804;
// var percentage = (marks_obtained / total_marks)*100;
// document.write("Total Mrks: "+ total_marks+ "<br>"+ "Marks obtained: "+marks_obtained+"<br>" +"Percentage: " + percentage +"%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


// document.write("Total Currency in PKR : "+ (10*104.80 + 25*28));
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


// var num = 12;
// console.log((num+12*10)/2);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.


//  var currentYear = 2016;
//  var birthYear = 1992;
//  var age = currentYear - birthYear;
//  document.write("<h1>Age Calculator </h1><br>"+"Current Year: "+currentYear+"<br>Birth Year"+birthYear+"<br>They are either "+ age +" or "+ (age-1)+" years old")

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.14

document.write("<h1>THe Geometriz</h1><br>")
var radius =  20;
var circumference = 2 * 3.142 * radius;
var area = 3.14 * radius * radius;
document.write("The Radius is: "+ radius +"<br>The circumference is: "+ circumference +"<br>The area is: "+ area)