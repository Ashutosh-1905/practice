// const input = document.getElementById("myInput");
// const btn = document.getElementById("myBtn");
// const deleteBtn = document.getElementById("delete");

// const btnClick =()=>{
//     // alert(input.value);
//     sessionStorage.setItem("key1", input.vlue);
// };

// btn.addEventListener("click", btnClick);

// deleteBtn.addEventListener("click",()=>{
//     // sessionStorage.removeItem("key1");
//     sessionStorage.clear();
// });

// if(sessionStorage.getItem("key1")){
//    alert(sessionStorage.getItem("key1"));
// }


const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const deleteBtn = document.getElementById("delete");

const btnClick =()=>{
    localStorage.setItem("key1", input.vlue);
};

btn.addEventListener("click", btnClick);

deleteBtn.addEventListener("click", ()=>{
    localStorage.removeItem("key1");
    // sessionStorage.clear();
});

if(localStorage.getItem("key1")){
   alert(localStorage.getItem("key1"));
}