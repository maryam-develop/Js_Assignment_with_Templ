// 1. Write a program that displays current date and time in
// your browser.

// var current = new Date()
// console.log(current)

// 2. Write a program that alerts the current month in words.
// For example December.
var current = new Date()
var month = current.getMonth()
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log(monthName[month])


