// test 1 

// let num = [ 10,20,30,40,50,60];

// let a = prompt("Enter a number");

// a = Number.parseInt(a);
// num.push(a);
// console.log(num);


// test 2

// let arr = [10,20,30,40,50,60];

// let a;
// do {
//     a = prompt ("enter a number ");
//     a = Number.parseInt(a);
//     arr.push(a);
// }
// while (a != 0);
// console.log(arr)


// test 3

let arr = [34, 80, 56, 60,78,97,95,90];

let n = arr.filter((x)=>{
    return x%10 == 0;
});

console.log(n);

//  test 4 

let arr1 =[34,820, 56, 60,78,97,95,90]; 

let b = arr1.map((x)=>{
    return x*x;
})
console.log(b);

// test 5 

let arr2 =[1,2,3,4,5];
let c = arr2.reduce((x,y)=>{
    return x*y;
})
console.log(c);