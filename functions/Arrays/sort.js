let number = [2,5,7,100,6,5,1];

// let number2 = number.sort();
// console.log(number2);

let compare = ( a, b)=>{
    return a - b;
}
 let number2 = number.sort(compare);
 console.log(number2);