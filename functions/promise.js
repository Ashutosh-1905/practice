//  create a promise function

const  ticket = new  Promise(function (resolve, reject){
    const isBoarded = false;
    if(isBoarded){
        resolve ("your flight ticket is confirmed");
    }else{
        reject("your flight has been canceled")
    }
});

//  using promise here

ticket 
    .then((data)=>{
        console.log("wohoo",data);
    })
    .catch((data)=>{
        console.log("oh no ", data);
    })
    .finally(()=>{
        console.log("I will always be executed");
    })