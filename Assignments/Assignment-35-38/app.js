//  1 Write a function that displays current date & time in your
// browser.

// function CurrentDateTime() {
//     var current = new Date();
//     console.log(current);
// }
// CurrentDateTime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name
// function greeting(first, last) {
//     var fullname = first + " " + last;
//     console.log("Assalam O alikum " + fullname);
//     }
//     greeting("Ibrahi","Adnan");

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// function addNum() {
// var num1 = +prompt("enter 1st number");
// var num2 = +prompt("enter 2nd number");
// var sum = num1 + num2;
// return sum;
// }
//  var res =addNum();
//  console.log(res);
// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function addNum(num1,num2,operator) {
//     var num1 = +prompt("enter 1st number");
//     var num2 = +prompt("enter 2nd number");
//     var operator = prompt("Enter the operator (+, -, *, /):");
//     var res ;
//     if (operator == "+") {
//         res = num1 + num2;

//        if (operator == "-") {
//          res = num1 - num2;
//        }
// if (condition) {
//             res = num1 * num2;

// }
// } else {
//     res = num1 / num2;
// }        

//     return res;
//     }
//      var res1 =addNum();
//      console.log(res1);

// 5. Write a function that squares its argument

// function squrNum(num) {
//     var num1 = num ** 2;
//     console.log(num1);
// }

// squrNum(3);

// 6. Write a function that computes factorial of a number
// function factorial(num) {
//     if (num === 0) {
//         return 1;
//       }
//       return num * factorial(num - 1);
//     }
// var fac = factorial(5);
// console.log(fac);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser

// function numBer(start, end){
// for (var i = start; i <= end; i++) {

//     console.log(i);
// }


// }

// numBer(1,10);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(base, perp){
//     function calculateSquare(side){
//     return side*side;
//     }
//     base_square = calculateSquare(base)
//     perp_square = calculateSquare(perp)
//     hypo_square = base_square + perp_square
//     hypo = Math.sqrt(hypo_square)
//      console.log(base_square);
//      console.log(perp_square);
//      return hypo;


// }
// var hypo = calculateHypotenuse(2,3);
// console.log(hypo);

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function calculateArea(width, height){
//     var area = width * height;
//     // console.log(area);//Arguments as value
// return area; //Arguments as variables
// }
// // calculateArea(2,3);//Arguments as value
// var area1 = calculateArea(2,4) //Arguments as variables
// console.log(area1);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function check(palindrome) {
// var reverse = palindrome.split('').reverse().join('');
// if (palindrome == reverse) {
//     return true;
//     }
//     return false;
// // return reverse;
// }

// var reverse1 = check("maham");
// console.log(reverse1);

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function str(){
//     var arr = arguments[0].split(' ');
//     var arr2 = [];
//     for (var i = 0; i < arr.length; i++) {
//         arr2[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//         }
//         return arr2.join(' ');

//         }
//         var sas =  str('the quick brown fox')
//         console.log(sas);
// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// function LongestWord(str) {
//      var  arr = str.split(' ');  
//       var  Word = '';  
//     for (let i = 0; i < arr.length; i++) {
//        var  word = arr[i];  
//       if (word.length >Word.length) {
//         Word = word;
//       }
//     }

//     return Word;
//   }

//     var sas = LongestWord('Web Development Tutorial ')
//     console.log(sas);

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// function countLetter(word , letter) {
//   var lett = 0;
//   for (var i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       lett++;
//     }
//   }
//   return lett;
// }

// document.write(countLetter("JSResourceS.com","o")); 

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// document.write("<b>The Geometrizer</b><br>");
// function calcCircumference(radius){
//   var cuircum= 2* Math.PI*radius;
// console.log("The circumference is "+cuircum);
// }
// calcCircumference(3)

// function calcArea(radius){
//     var area= Math.PI * radius**2;
//   console.log("The Area is "+ area);
//   } 
// calcArea(2)
