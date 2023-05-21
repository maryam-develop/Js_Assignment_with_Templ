// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var stdName = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
// var stdName = [];

// 3. Declare and initialize a strings array.
// var stdNam = ['John', 'Mary', 'Peter', 'Paul', 'Mary'];
// 4. Declare and initialize a number array.
// var stdNum = [1,2, 3, 4, 5, 6];
// 5. Declare and initialize a boolean array.
// var stdBool = [true, false];
// 6. Declare and initialize a mixed array.
// var stdMix = ['John', 1, true, 'Mary', 2, false];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like

// var eduPak = []
// var ed1 = "1) SSC";
// var ed2 = "2) HSC";
// var ed3 = "3) BCS";
// var ed4 = "4) BS";
// var ed5 = "5) BCOM";
// var ed6 = "6) MS";
// var ed7 = "7) M. Phil.";
// var ed8 = "8) PhD";

// document.write("<h3>Qualificatin</h3><br>"+ ed1 +"<br>"+ed2+"<br>"+ed3+"<br>"+ed4+"<br>"+ed5+"<br>"+ed6+"<br>"+ed7+"<br>"+ed8 )

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// var stdNam = ["john", "mary","joseph"]
// var stdSco = [320, 230, 480];
// var stdPer = [stdSco[0]/500*100,stdSco[1]/500*100,stdSco[2]/500*100];

// document.write("Score of " +stdNam[0]+" is" +stdSco[0]+". Percentage :"+ stdPer[0]+"%")
// document.write("<br>Score of " +stdNam[1]+" is" +stdSco[1]+". Percentage :"+ stdPer[1]+"%")
// document.write("<br>Score of " +stdNam[2]+" is" +stdSco[2]+". Percentage :"+ stdPer[2]+"%")

// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// var colorlist = ["red", "blue","pink","yellow","black"];
// var userColor = prompt("what color you want in begining"+"\n red, blue,pink,yellow,black");

// colorlist.unshift(userColor);
// document.write("<h3>Color List</h3><br>"+ colorlist )

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

// var userColor = prompt("what color you want in last"+"\n red, blue,pink,yellow,black");

// colorlist.push(userColor);
// document.write("<h3>Color List</h3><br>"+ colorlist )
// c. Add two more color to the beginning of the array.Display the updated array in your browser.
// colorlist.push("orange", "indigo");
// document.write("<h3>Color List</h3><br>"+ colorlist )

// d. Delete the first color in the array. Display the updated array in your browser.

// colorlist.shift();
// document.write("<h3>Color List</h3><br>"+ colorlist );

// e. Delete the last color in the array. Display the updated array in your browser.

// colorlist.pop();
// document.write("<h3>Color List</h3><br>"+ colorlist );

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser

// var userColor = prompt("which index you want to color add");
// var addColor = prompt("add color name ");

// colorlist.splice(userColor,0 , addColor);

// document.write("<h3>Color List</h3><br>"+ colorlist );

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
// var delColor = prompt("which index you want to color delete");
// var delColorNum = prompt("hoe many color you want to delete");
// colorlist.splice(delColor,delColorNum);
// document.write("<h3>Color List</h3><br>"+ colorlist );

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// var stdScr=[320,230,480,120];
// document.write("score of Student : "+stdScr );

// stdScr.sort();
// document.write("<br>Oedered Score Of Student: " + stdScr );

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var cities = ["karachi","lahore","Islamabad","Quetta","peshawar"];
var selectedCities= cities.slice(2,5);
document.write("<h3>Cities List:</h3> "+cities+"<br><h3>Selected Cities List: </h3>"+selectedCities );
