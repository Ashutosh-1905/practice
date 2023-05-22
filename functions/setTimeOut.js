// console.log("Hello Ashu");
// setTimeout(function(){
//     console.log("this will execute later");
// }, 3000);

// console.log(" Hello world!");
// console.log("three");


//  Callback Hell function 

//  make cheese function

function getCheese(callback){

    setTimeout(()=>{
        const cheese ="🧀";
        console.log("here is a cheese",cheese);

        callback(cheese);
    }, 2000)
}

// make dough function

function makeDough(cheese, callback){
    setTimeout(() => {
        const dough = cheese + "🍩";
        console.log("Here is a dough",dough);
        callback(cheese);
    }, 2000);
}

// bake pizza

function bakePizza(dough, callback){
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("Here is a pizza",pizza);
        callback(pizza);
    }, 2000);
}

getCheese((cheese)=>{
    makeDough (cheese,(dough)=>{
        bakePizza (dough, (pizza)=>{
            console.log("got my pizza",pizza);
        });
    });
});