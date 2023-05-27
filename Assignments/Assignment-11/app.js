// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// var firstName = prompt("enter your First Name");
// var lastName = prompt("enter your Last Name");

// var fullName = firstName +" "+ lastName;
// document.write("Hi "+ fullName );

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// var phone = prompt("enter your phone model");
// document.write(phone + " Length of string: " + phone.length);

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser
// var Name = "Pakistani";
// document.write("String: "+ Name+"<br>Index of 'n': "+Name.indexOf("n") );

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser
// var word = "Hello World";
// document.write("String: "+ word+"<br>Index of 'l': "+word.lastIndexOf("l") );

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// var Name = "Pakistani";
// document.write("String: "+ Name+"<br>Character at index 3: "+Name.charAt(3) );
// 6. Repeat Q1 using string concat() method.
// var firstName = prompt("enter your First Name");
// var lastName = prompt("enter your Last Name");

// document.write("Hi "+ firstName.concat(" "+lastName) );

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var Name= "Hyderabad";
// document.write("City: "+Name+"<br>After replacement: "+Name.replace("Hyder","Islam"))

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//  var message = “Ali and Sami are best friends. They play cricket and football together.”;
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g,"&"))

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var Number = "472";
// var parNumber= +(Number)
// document.write("Value: "+ Number + "<br> Type: " + typeof Number + "<br> Value: " + parNumber +"<br> Type: " + typeof parNumber);

// 10. Write a program that takes user input. Convert and show the input in capital letters.
// var user=prompt("enter Some thing");
// var userChang = user.toUpperCase();
// document.write("user input: "+user+"<br>Upper case: "+userChang);

// 11 Write a program that takes user input. Convert and show the input in title case
// var user=prompt("enter Some thing");
// var user1 = user.toLowerCase();

// var userChang = user1.charAt(0).toUpperCase()+user1.slice(1, user1.length)

// document.write("user input: "+user+"<br>Title Case: "+userChang);

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var num = 35.36 ;
// var num1 = num.toString().replace(".","")
// document.write("Number "+num+"<br>Result "+num1);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ Note:
//     ASCII code of ! is 33
//     ASCII code of , is 44
//     ASCII code of . is 46
//     ASCII code of @ is 64

// var username = prompt("enter user Name ");
// if (username.match(/[@.,!]/g)) {
//     alert("Please enter a valid username");
//     }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// A = ["cake", "apple pie", "cooki","chips", "patties"]
// var userInput = prompt("welcome to ABC Bakery. What do you want to order sir/ma'am");
// userInput = userInput.toLowerCase();
// var matchfound = false;
// for (var index = 0; index < A.length; index++) {
//     if (A[index] == userInput) {
//         matchfound = true
// document.write(userInput+" is <b>available</b> at index "+index+" in our bakery");
//     }
// }
// if (matchfound === false) {
//          document.write("We are Sorry. "+userInput+ " is <b>not available</b> in our bakery"); }

// 15 Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var pass = prompt("enter Password");
// var pass1 = pass.charAt[0]
// for (let i = 65; i <= 90; i++){
//     for (let i = "A"; i <= "Z"; i++){
//         document.write("your password is " + pass)
//         break;
//     }
// }




// for (let i = 65; i <= 90; i++) {
//     for (let i = 97; i <= 122; i++) {
//         for (let p = 0; p <= 9; p++) {
//             if (pass.length >= 6) {
//                 document.write("your password is " + pass)

//             } else if (pass1 = p) {
//                 document.write("password should not start with a num ");
//                 break;
//             } else {
//                 document.write("password should not less than 6 ");
//                 break;
//             }

//         }
//         break;
//     }
//     break;
// }





// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser
// var university = "University of Karachi";
// var arr = university.split("");
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i]+"<br>");
//     }

// 17. Write a program to display the last character of a user input.
// var userInput = prompt("enter somde thing");
// var userr=userInput.charAt(userInput.length-1)
// document.write("User Input: "+userInput+"<br>last Character of input: " + userr );

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var word = "The quick brown fox jumps over the lazy dog";

console.log("Text: "+ word+"<br>Index of 'the': "+(Count("The quick brown fox jumps over the lazy dog","The") ));
