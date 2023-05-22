// let  i, j;

// for(i = 1; i<=5; i++){
//     for(j= 1; j<=i; j++){
//         document.write(j);
//     }
//     document.write("<br/>");
// }

// document.write("<br/>");
// document.write("<br/>");

// for (let i =1; i <=5; i++){
//     for(let j=1; j<=i ; j++){
//        document.write(i);
//     }
//     document.write("<br/>");
// }

// document.write("<br/>");
// document.write("<br/>");

// for (let i = 5; i >= 1; i--){
//     for( let j =1; j<=i; j++){
//         document.write(j);
//     }
//     document.write("<br/>");
// }

// document.write("<br/>");
// document.write("<br/>");

// for (let i = 5; i>=1; i--){
//     for(let j = 1; j<=i; j++){
//     document.write(i);
//     }
//     document.write("<br/>");
// }

// document.write("<br/>");
// document.write("<br/>");

// for (let i =5; i>=1; i--){
//     for(let j =i; j>=1; j--){
//         document.write(j);
//     }
//     document.write("<br/>");
// }

// for(let i= 5; i >=1; i--){
//     for(j=i; j>=1; j--){
//         document.write(j);
//     }
//     document.write("<br/>")
// }

// for(let i =1; i<=5; i++){
//     for(let j =1; j<=i; j++){
//         document.write(j)
//     }
//     document.write("<br/>")
// }

// let i, j, k,l;

// for( i =1; i<=5; i++){
//     for(k = 1; k<=5-i; k++){
//         document.write("&nbsp;&nbsp;");
//     }
//         for(j=1; j<=i; j++){
//             document.write("*")

//     } for(l=1;l<=i-1;l++){
//         document.write("*")
//     }
//     document.write("<br/>")
// }

// let i,j,k,l;

// for( i=1; i<=5; i++){

//     for(k =1; k<=5-i; k++){
//         document.write("&nbsp; ");
//     }

//     for(j=1; j<=i; j++){
//         document.write("*");
//     }

//     for(l=1; l<=i-1; l++){
//         document.write("*");
//     }
//     document.write("<br/>")
// // }


// Sorting without using sort method  

let arr = [10, 6, 72, 64, 31, 70, 9, 5, 34];

for( let i = 1; i <= arr.length; i++){
    for(let j = 0; j<i; j++){
        if(arr[j] > arr[i]){
            let x = arr[j];
            arr[j] = arr[i];
            arr[i]= x
        }
    }
}
console.log(arr);


// Sorting without using sort method 

let a = [12,9,46,73,8,61];

for(let i = 0; i <= arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if (a[j] > a[j+1] ){
            let b = a[j];
            a[j] =  a[j +1];
            a[j+1] = b;
        }
    }
}
console.log(a);
