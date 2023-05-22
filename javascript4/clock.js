// let a = new Date();
// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();
// let d = a.getDate();

// console.log(h,m,s,d);

// function isPalindrome(str) {
//   let newStr = str.toLowerCase();

//   let left = 0;
//   let right = newStr.lentgh - 1;

//   for (let i = left; i <= right; i++) {
//     for (j = right; j >= left; j--) {
//       if (newStr[left] !== newStr[right]) {
//         console.log("false");
//       } else {
//         console.log("true");
//       }
//     }
//   }
  // console.log(isPalindrome("ashu"));
// }
// console.log(isPalindrome("ashu"));



// palindrome without using function

// let x = "madam";
// let y = x.length;   // checking string length
// var z = "it is a palindrome";  

// for( i = 0; i < y/2; i++){                // for checking half length 
//     if(x [i] !== x[y - 1 - i]){           //  substract index of a string using like a array
//          var z = "it is not a Palindrome";
//     } 
// }
// // console.log (`${x} = ${z}`);

// function isPalindrome(str){

//     let newStr = str.toLowerCase();
//     console.log(newStr.split("").reverse().join(""));
//     let reverse = newStr.split("").reverse().join("");
//     return newStr === reverse;
// }
// console.log(isPalindrome("Sore was I ere I saw Eros"));

// let arr = [[10,20,30,[1,2,3,4,[11,12,13]]],[40,50,60],[70,80,90,[1,2,3,4]]];

// let arr1 = arr.flat(Infinity);

// console.log(arr1);

typeof [1,2,3,4]