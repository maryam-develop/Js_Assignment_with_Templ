// 1. Write a program that displays current date and time in
// your browser.

// var current = new Date()
// console.log(current)

// 2. Write a program that alerts the current month in words.
// For example December.
// var current = new Date()
// var month = current.getMonth()
// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// console.log(monthName[month])

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// var current = new Date()
// var day = current.getDay()
// var days=["Sunday","Saturday", "Monday", "Tuesday", "wednesday"," thursday","friday"]
// console.log("Today is "days[day]);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var current = new Date()
// var day = current.getDay()
// var days=["Sunday","Saturday", "Monday", "Tuesday", "wednesday"," thursday","friday"]
// if (current == "Sunday" || current == "Saturday") {
//     console.log("its a Funday");
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16 th of the month
// else shows “Last days of the month”

// var current = new Date()
// var day = current.getDate()
// console.log(day);
// if (day < 16) {
//         console.log("First fifteen days of the month");
//     } else {
//             console.log("Last days of the month");
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var todayMin1 = (Todaymilli - todayMin)/(1000*60*60)

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + todayMin1)

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
 
// var current = new Date()
// var hour = current.getTime()
// var hour1 = hour/(1000*60*60)
// if (hour1 > 12) {
//     console.log("Its PM");
    
// }else{
//     console.log("Its AM");
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date(2023, 3, 30);
// var lastday = laterDate.getDay()
// console.log( laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1 st Ramadan?
// Note: 1 st Ramadan was on June 18, 2015

// var current = new Date(2024, 2, 10)
// var lastRamd = current.getDate(2023, 2, 23)
// var diff = (current- lastRamd)/(1000*60*60*24*365.25)
// var diff1 = parseInt(diff)
// alert(diff1 + " days have passed since 1st Ramadan, 2024");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015
// var refDate = new Date(2023, 0, 1)
// var refSec = refDate.getTime()
// var current = new Date()
// var currentSec = current.getTime()
// var diff = (currentSec - refSec)/(1000*60)
// var diff1 = parseInt(diff)
// console.log("On reference date "+current)
// console.log(diff1 + " seconds have elapsed since January 1, 2015");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var current = new Date()
// console.log(current);
// var currHour = current.getHours();
//  current.setHours(currHour + 1);

// console.log("1 hour ago, it was "+current);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var current = new Date()
// console.log("Curreny date: "+current);
// var currYear = current.getFullYear()
//  current.setFullYear(currYear-100)

// console.log("100 years back, it was "+ current);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
//  var age = +prompt("Your age please");
//  console.log("Your age is "+age);
//  var birthYear = (new Date()).getFullYear() - age;
//  console.log("Your birth year is: " + birthYear);
