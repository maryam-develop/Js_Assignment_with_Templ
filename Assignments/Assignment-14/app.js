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

function numBer(start, end){
for (var i = start; i <= end; i++) {
 
    console.log(i);
}


}

numBer(1,10);

