// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var num = 8;
// document.write("<h3>Result</h3><br>The vale of a is "+ num+"<br> ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,<br><br>");
//  num = ++num;
// document.write("The value of is ++a: "+ num + "<br>now The value of is a: "+ num)
// num = num ++ ;
// document.write("<br><br>The value of is a++: "+ num + "<br>now The value of is a: "+ num)
// num = --num;
// document.write("<br><br>The value of is --a: "+ num + "<br>now The value of is a: "+ num)
// num = num--;
// document.write("<br><br>The value of is a--: "+ num + "<br>now The value of is a: "+ num--)

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;



// var a = 2, b = 1;
// document.write("a is "+ a+ "<br>b is "+ b)

// var result = --a ;
// document.write("<br>resul of --a ="+result)
// result = --a - --b;
// document.write("<br>resul of --a - --b =  "+result)
// result= --a - --b + ++b;
// document.write("<br>resul of --a - --b + ++b = "+result)
// result= --a - --b + ++b + b--;

// document.write("<br>resul of --a - --b + ++b + b-- = "+result)

// 3. Write a program that takes input a name from user & 
// greet the user.

// var user = prompt("Enter your name ");
// document.write("<h3>welcome " + user + "</h3>");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var input = +prompt("enter any number");
// var table = input;
// var deftab = 5;
// var a1 = 1;
// var a2 = 2;
// var a3 = 3;
// var a4 = 4;
// var a5 = 5;
// var a6 = 6;
// var a7 = 7;
// var a8 = 8;
// var a9 = 9;
// var a10 = 10;

// if (input !== 0) {
//     document.write(input + " * " + a1 + " = " +  input * a1 + "<br>");
//     document.write(input + " * " + a2 + " = " +  input * a2 + "<br>");
//     document.write(input + " * " + a3 + " = " +  input * a3 +"<br>");
//     document.write(input + " * " + a4 + " = " +  input * a4+"<br>");
//     document.write(input + " * " + a5 + " = " +  input * a5+"<br>");
//     document.write(input + " * " + a6 + " = " +  input * a6+"<br>"); 
//     document.write(input + " * " + a7 + " = " +  input * a7+"<br>"); 
//     document.write(input + " * " + a8 + " = " +  input * a8+"<br>");
//     document.write(input + " * " + a9 + " = " +  input * a9+"<br>");
//     document.write(input + " * " + a10 + " = " +  input * a10+"<br>");
// }else
// {
// for(var i=1; i<=10; i++){
//     document.write(5 + " * " + i + " = " +  5*i +"<br>" )
// }
// }
// Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


var subject1 = prompt("enter any subject1");
var subject2 = prompt("enter any subject2");
var subject3 = prompt("enter any subject3");
var subject1Num = +prompt("enter any number");
var subject2Num = +prompt("enter any number");
var subject3Num = +prompt("enter any number");
var totalMarks = 100;
var subject1Per = (subject1Num / totalMarks) * 100;
var subject2Per = (subject2Num / totalMarks) * 100;
var subject3Per = (subject3Num / totalMarks) * 100;
var totalPer = (subject1Per + subject2Per + subject3Per)/3;
document.write("<table><thead> <tr><th>Subjects</th> <th>Total Marks</th><th>Obtained Marks</th> <th>Percentage</th></tr></thead>"+"<br>");
document.write("<tbody> <tr><td>"+subject1+"</td>  <td>"+totalMarks+"</td>  <td>"+subject1Num+"</td>  <td>"+subject1Per+"</td></tr>"+"<br>" );
document.write(" <tr><td>"+subject2+"</td>  <td>"+totalMarks+"</td>  <td>"+subject2Num+"</td>  <td>"+subject2Per+"</td></tr>"+"<br>"  );
document.write("<tr><td>"+subject3+"</td>  <td>"+totalMarks+"</td>  <td>"+subject3Num+"</td>  <td>"+subject3Per+"</td></tr></tbody>"+"<br>");
// document.write("<tfoot>  <tr><td>Total</td>  <td>"+(totalMarks+totalMarks+totalMarks)+"</td>  <td>"+(subject1Num+subject2Num+subject3Num)+"</td>  <td>"+totalPer+"</td></tr> </tfoot>> </table>"+ "<br>");