// 1. Write a program that displays current date and time in
// your browser.

// var current = new Date()
// console.log(current)

// 2. Write a program that alerts the current month in words.
// For example December.
var current = new Date()
// var month = current.getMonth()
// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// console.log(monthName[month])

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var day = current.getDay()
var days=["Sunday","Saturday", "Monday", "Tuesday", "wednesday"," thursday","friday"]
console.log(days[day]);