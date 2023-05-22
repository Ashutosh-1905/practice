// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// var today = new Date();
// var day = today.getDay();
// var dayList = ["sunday", "monday", "tuesday", "wednesday", "thursday","friday","saturday"];

// console.log("today is = "+ dayList[day]);

// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();

// var prepand=(hour>=12) ? "PM": "AM";
// hour = (hour >= 12) ? hour - 12 : hour;
// console.log("current time is ="+ hour + prepand + ":" + minute + ":" + second);

// 2. Write a JavaScript program to print the current window contents.

// function printCureentWindow(){
//     return window.print();
// }

// 3 Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth()+1;
// let yyyy = today.getFullYear();

// today = `${mm}-${dd}-${yyyy}`;
// console.log(today);

// today = `${dd}-${mm}-${yyyy}`;
// console.log(today);

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

// let a = 5;
// let b = 6;
// let c = 7;

// let side = (a+b+c) /2;

// let arrea = Math.sqrt(side*(side-a)*(side-b)*+(side -c));
// console.log(arrea);

// ternary operator

// let age = 20;
// const vote = age >= 18 ? "You can vote" : "You can not vote";
// console.log(vote);

// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

