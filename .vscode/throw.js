

//throw project

// function MyFun() {
//     let x = document.getElementById("demo")
//     let message = document.getElementById("ptag")
//     try{
//         if(x.trim() == "") throw  "input filed is empty";
//         else if(x < 6) throw "number is too low";
//         else if(x > 10) throw "number is too much big";
//         else{
//             throw "everything is okey"; 
//         }
//     }
//     catch(err){
//         message.innerHTML = err;
//     }
// }

// const clickMe = document.querySelector("#clickMe")
// clickMe.addEventListener("mousedown",()=>{
//     console.log("you have clicked")
// })

// clickMe.addEventListener("mouseup",()=>{
//     console.log("mouse button is released")
// })

// clickMe.addEventListener("click",()=>{
//     console.log("mouse button is click")
// })

// clickMe.addEventListener("dblclick",()=>{
//     console.log("mouse button is dblclick")
// })


// //mouse Event
// const clickMe = document.querySelector('#clickMe');
// const changecolor = document.querySelector("#changeColor");
// let body = document.querySelector("body");
// let Text = document.querySelector("#Text");

// clickMe.addEventListener('click',()=>{
//     body.style.backgroundColor = "red"

// })

// changecolor.addEventListener("click",()=>{
//     body.style.backgroundColor = "black"
// })


// Text.addEventListener("dblclick",()=>{
//     Text.style.color = "red"
// })

// //scroll Event
// let controler = document.querySelector("#controler");
// controler.addEventListener("click",(e)=>{
//     const scrollExample = document.querySelector("#scrollExample");
//     let event = e.target;
//     switch(event.id){
//         case "btnscrollLeft":
//             scrollExample.btnscrollLeft += 20;
//             break;
//         case "btnscrollTop":
//             scrollExample.btnscrollTop += 20;
//             break;    
//     }
// })

// //focus event
// const password = document.querySelector("#password");
// password.addEventListener("focus",(e)=>{
//     e.target.style.backgroundColor = "green"
// })


//hashchange
// const updateContent = ()=>{
//     const content = document.querySelector("#Content");
//     const hash = window.location.hash.substring(1);

//     switch(hash){
//         case "Home":
//             Content.innerHTML = "<h1>This is Home page</h1>"
//             break;

//         case "About":
//             Content.innerHTML = "<h2>This is About page </h2>"
//             break;

//         case "Contact":
//             Content.innerHTML = "<h3>This is contact page"
//             break;

//     }
// }
// window.addEventListener("hashChange",updateContent)

//Dom Radio button
// const btn = document.querySelector("#btn");
// const radioButton = document.querySelectorAll("input[type = 'radio']");
// const output = document.querySelector("#output");
// btn.addEventListener("click",()=>{
//     let selectedlanguage;
//     for(const RadioBTN of radioButton){
//         if(RadioBTN.checked){
//             selectedlanguage = RadioBTN.value;
//             break;
//         }
//     }
//     output.innerHTML = selectedlanguage;
// })


//JS Dom checkbox
// const accept = document.querySelector("#accept");
// accept.addEventListener("click",()=>{
//     accept.checked = true;
//     if(accept.checked){
//         alert("check mark succesfully")
//     }
// })

//dom selectbox
const languageName = document.querySelector("#languageName");
const btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    alert(languageName.value)
})
