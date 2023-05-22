// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

// var arr = [];

// 2. Declare and initialize a multidimensional array representing the following matrix:

// arr[0]=[0,1,2,3];
// arr[1]=[1,0,1,2];
// arr[2]=[2,1,0,1];
// document.write(arr[0]+"<br>"+arr[1]+"<br>"+arr[2]);

// 3 Write a program to print numeric counting from 1 to 10.

// for (var index = 1; index <= 10; index++) {
//      console.log(index);
    
//}

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user
 
var userNum = +prompt("Enter a number to show its multiplications table");
 var userleng = +prompt("Enter length multiplications table");
document.write("Multiplication table of "+ userNum+ " Length of " +userleng +"<br>");

 for (var i = 1; i<= userleng; i++ ){
document.write(userNum + " * " + i + " = " +  userNum*i +"<br>" )

 }










