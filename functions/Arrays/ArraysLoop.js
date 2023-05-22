 let num = [3,4,5,6,7,8,9];

// forEach loop

num.forEach(element => {
    console.log(element * element);
});


// Array.from

let name = "Ashutosh";

let arr = Array.from(name);
console.log(arr);

//  for... of

for (let i of num){
    console.log(i);
}

//  for ... in 

for ( let i in num){
    console.log(i);
}