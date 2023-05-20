// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var userInput= prompt("Enter your city name ?");
// if (userInput=="Karachi"||"karachi"){
//     alert("Welcome to city of lights");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("write your gender");

// if (gender=="male"){
//     alert("Good Morning Sir");
//     }
//     if (gender=="female"){
//         alert("Good Morning Ma’am");
//         }
   
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var inputColor = prompt("Color of road traffic signal");
// if (inputColor==  "Red"){
//     alert("Must Stop");
//     } if (inputColor=="Yellow"){
//         alert("Ready to Move");
//     }if (inputColor=="Green") {
//         alert("Move now");

//     }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// var fuel = Number(prompt("remaining fuel in car?"));

// if (fuel <=0.25 ) {                  
//     alert("Please refill the fuel in your car");
    
// }

//     alert("You are alright");
    // 5. Run this script, & check whether alert message would be
    // displayed or not. Record the outputs.
//      var a = 4;
//     if (++a === 5){
//     alert("given condition for variable a is true");
//     }// this message displaye
//      var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }//this message not displayed
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }//this message not displayed
// if (c === 13){
// alert("condition 2 is true");
// }//this message displayed
// if (++c < 14){
// alert("condition 3 is true");
// }//this message not displayed
// if(c === 14){
// alert("condition 4 is true");
// }//this message displayed
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");//this message displayed
// }
//  if (true){
// alert("True");//this message displayed
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }//this message displayed

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

//  var markObtain1 = +prompt("enter Eng subject marks ")
//  var markObtain2 = +prompt("Enter Math marks");
//  var markObtain3 = +prompt("Enter Urdu marks");
//  var totalMarks  = +prompt("Enter total marks");


//  var total_marksobtain = markObtain1 +markObtain2+ markObtain3;
//  var percentage = total_marksobtain / totalMarks *100;
//  if(percentage >= 80 ){
//    document.write("<h1>Marks Sheet</h1><br><br>"+"Total marks : "+totalMarks +"<br>"+"Marks obtained : "+ total_marksobtain+"<br>Percentage : "+percentage+"%<br>Grade : A-one"+"<br>Remarks : Excellent");

// }
//   if (percentage >= 70 && percentage<= 79.99) {

//      document.write("<h1>Marks Sheet</h1><br><br>"+"Total marks : "+totalMarks +"<br>"+"Marks obtained : "+ total_marksobtain+"<br>Percentage : "+percentage+"%<br>Grade : A"+"<br>Remarks : Good");
   

//    } if (percentage >= 60 && percentage<= 69.99) {
 
//      document.write("<h1>Marks Sheet</h1><br><br>"+"Total marks : "+totalMarks +"<br>"+"Marks obtained : "+ total_marksobtain+"<br>Percentage : "+percentage+"%<br>Grade : B"+"<br>Remarks : You need to improvement");

//    }if (percentage < 60) {
  
//     document.write("<h1>Marks Sheet</h1><br><br>"+"Total marks : "+totalMarks +"<br>"+"Marks obtained : "+ total_marksobtain+"<br>Percentage : "+percentage+"%<br>Grade : Fail"+"<br>Remarks : Sorry");
//    }

// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// document.write("Guess Game")
// var secNum = 6;
// var guess = +prompt(" guess the secret number between 1 to 10");
// if (guess==secNum){
//    alert("Bingo! Correct answer");
// }
// if (guess == secNum+1){
//    alert("Close enough to the correct answer");
// }
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3

// var userInput= +prompt("Enter a num ");

// if (userInput%3 == 0 ){
//    alert("The number is divisible by 3");
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var userInput= +prompt("Enter a num ");

if (userInput %2 == 0){
   alert("The number is EVEN");
}
if (userInput %2 != 0){
   alert("The number is ODD");
}


