let arr =[ 14, 27, 48];

//  Array map method

let a = arr.map((value,index, array)=>{
    console.log(value,index,array);
    return value + index;
});

console.log(a);

//  array filter method

let aar2 = [12,16,24,38,4,5,6,9];
let a2 = aar2.filter((value)=>{
    return value < 10;
});

console.log(a2);

//  array reduce method

let aar3 = [12,16,24,38,4,5,6];
let a3 = aar3.reduce((a, b)=>{
    return a + b;
});

console.log(a3);