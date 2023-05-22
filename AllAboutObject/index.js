// let lecture =10;
// let section = 3;
// let title = "Javascript";

// const course ={
//   lecture:10,
//   section:3,
//   title:"Javascript",
//   notes:{
//     introduction: "Welcome to Js course"
//   },
//   enroll(){
//     console.log("you are successfully Enrolled ");
//   }
// }
// course.enroll();


// factory function

// function createCourse(title){
//     const course ={
//         // lecture:10,
//         // section:3,
//         title:title,
//         // notes:{
//         //   introduction: "Welcome to Js course"
//         // },
//         enroll(){
//           console.log("you are successfully Enrolled ");
//         }
//       } 
//       return course;
// }

// const create = createCourse();

// create.enroll();
// // console.log(create);


let product = {
  ItemName : "Flower",
  price : 50,
  discount : 10,
  itemCode : "A252"
}

//  factory function

function createProduct(name,price,discount,itemCode){
  return {
    ItemName : name,
    price: price,
    discount: discount,
    itemCode: itemCode
  }
}

const foodBall = createProduct("foodBall",100, 20, "f30");

function Product(name,price,discount,itemCode){
  this.ItemName = name,
  this.price = price,
  this.discount =discount,
  this.itemCode = itemCode,
  this.discountValue =  db(price, discount)
  function db(x, y){
    return (x*y)/100; 
  }
 
}

const mobile = new Product("One Pluse", 30000, 10, "9R");

// console.log(mobile);