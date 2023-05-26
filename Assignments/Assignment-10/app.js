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

// var userNum = +prompt("Enter a number to show its multiplications table");
//  var userleng = +prompt("Enter length multiplications table");
// document.write("Multiplication table of "+ userNum+ " Length of " +userleng +"<br>");

//  for (var i = 1; i<= userleng; i++ ){
// document.write(userNum + " * " + i + " = " +  userNum*i +"<br>" )

//  }

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
//  for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i]+"<br>");   
//     }
//     for (var i = 0; i < fruits.length; i++) {   
//         console.log("Element at index "+ i + " is "+ fruits[i]);
//        }

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<h3>Counting:</h3>")
// for (let index = 1; index <= 15; index++) {
//     document.write([index] + ",");

// }
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<h3>Reverse Counting:</h3>")
// for (let index = 10; index >= 1; index--) {
//     document.write([index] + ",");

// }
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<h3>EVEN:</h3>")
// for (let index = 1; index <= 15; index++){
//     if (index % 2 == 0) {
//         document.write(index + ",");
//         }
// }
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<h3>ODD:</h3>")
// for (let index = 1; index <= 15; index++){
//     if (index % 2 == 1) {
//         document.write(index + ",");
//     }}

// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<h3>Series: </h3>")
// for (let index = 1; index <= 15; index++){
//     if (index % 2 == 0) {
//         document.write(index + "k,");
//     }}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("welcome to ABC Bakery. What do you want to order sir/ma'am");
// var matchfound = false;
// for (var index = 0; index < A.length; index++) {
//     if (A[index] == userInput) {
//         matchfound = true
// document.write(userInput+" is <b>available</b> at index "+index+" in our bakery");
//     }
// }
// if (matchfound === false) {
//          document.write("We are Sorry. "+userInput+ " is <b>not available</b> in our bakery"); }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// var largest = A[0];
// for (var index = 0; index < A.length; index++) {
//     if (A[index] > largest) {
//         largest = A[index];
//     }
// }
// document.write("Array items: " + A);
// document.write("<br>The largest number is " + largest);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// var smallest = A[0];
// for (var index = 0; index < A.length; index++) {
//     if (A[index] < smallest) {
//         smallest = A[index];
//         }
//         }
//         document.write("Array items: " + A);
//         document.write("<br>The smallest number is " + smallest);
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

//  for (var index = 1; index <= 100; index++) {
//     if (index % 5 == 0) {
//    document.write(index + ", ");}
//  }