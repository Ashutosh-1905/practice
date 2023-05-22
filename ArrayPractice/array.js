// 1. Write a JavaScript function to check whether an `input` is an array or not.

// let a = "Ashutosh";
// let b = [10,20,30,40,50];

// var isArray = function(input){
//     if(toString.call(input)=== "[object Array]")
//     return true;
//     return false;
// }
// console.log(isArray(a));
// console.log(isArray(b));

// filter method

// const items = [
//     {name:"bike", price: 100},
//     {name:"tv", price: 20},
//     {name:"book", price: 300},
//     {name:"albumb", price:400},
//     {name:"phone", price:50},
//     {name:"computer", price:600},
//     {name:"keyBoard", price:700}
// ];

// const filteredItems = items.filter((item)=>{
//     return item.price <= 100
// })
// console.log(items);
// console.log(filteredItems);

// map method

// const items = [
//     {name:"bike", price: 100},
//     {name:"tv", price: 20},
//     {name:"book", price: 300},
//     {name:"albumb", price:400},
//     {name:"phone", price:50},
//     {name:"computer", price:600},
//     {name:"keyBoard", price:700}
// ];
// const itemPrice = items.map((item)=>{
//     return item.price
// });
// console.log(itemPrice);

// find method

// const items = [
//     {name:"bike", price: 100},
//     {name:"tv", price: 20},
//     {name:"book", price: 300},
//     {name:"albumb", price:400},
//     {name:"phone", price:50},
//     {name:"computer", price:600},
//     {name:"keyBoard", price:700}
// ];

// const foundItem = items.find((item)=>{
//     return item.name === "book"
// })
// console.log(foundItem);

// forEach method

// const items = [
//     {name:"bike", price: 100},
//     {name:"tv", price: 20},
//     {name:"book", price: 300},
//     {name:"albumb", price:400},
//     {name:"phone", price:50},
//     {name:"computer", price:600},
//     {name:"keyBoard", price:700}
// ];

// items.forEach((item)=>{
//     console.log(item.name);
//     console.log(item.price);
// })

// some method

// const items = [
//     {name:"bike", price: 100},
//     {name:"tv", price: 20},
//     {name:"book", price: 300},
//     {name:"albumb", price:400},
//     {name:"phone", price:50},
//     {name:"computer", price:600},
//     {name:"keyBoard", price:700}
// ];

// const hasExpansiveItem = items.some((item)=>{
//     return item.price <= 20
// })
// console.log(hasExpansiveItem);

// every method

// const items = [
//     {name:"bike", price: 100},
//     {name:"tv", price: 20},
//     {name:"book", price: 300},
//     {name:"albumb", price:400},
//     {name:"phone", price:50},
//     {name:"computer", price:600},
//     {name:"keyBoard", price:700}
// ];

// const total = items.every((item)=>{
//     return item.price <= 1000
// })

// console.log(total);

//  splice method

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit =fruits.splice(2, 0, "Lemon", "Kiwi");

//  console.log(fruits);

// slice method

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit =fruits.splice(1,3);
// console.log(fruits);

//  prime number

// let num = prompt("Enter Number");
// var isPrimeNumber = true;
// for ( let i = 2; i < num ; i++){
//     if ( num %i == 0){
//         isPrimeNumber = false;
// }
// if (isPrimeNumber == true){
//     console.log("Prime number")
// }else{
//     console.log(" not prime number")
// }
// }

// let x = prompt("Enter Number");

// var isPrimeNumber = true;

// for(let i = 2; i < x; i++){
//     if(x%i ==0){
//         isPrimeNumber = false;
//     }

// if(isPrimeNumber == true){
//     console.log("prime number");
// }else{
//     console.log("not a prime number");
// }
// }

// star pettern

// for (let i = 0; i <= 5; i++){
//     for(let j = 0; j<=i; j++){
//         document.write("*");
//     }
//     document.write("<br/>");
// }

let i, j, k;

for (i = 1; i <= 5; i++) {
  for (k = 1; k <= 5 - i; k++) {
    document.write("&nbsp;&nbsp;");
}
    for (j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br/>");
}
