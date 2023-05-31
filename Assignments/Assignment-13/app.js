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

