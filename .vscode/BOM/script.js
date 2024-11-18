let windowOBJ = document.querySelector("#openNewWindow");
let closeWindow = document.querySelector("#closeWindow");

let myWindow;


windowOBJ.addEventListener("click",()=>{
     myWindow = window.open("https://www.hablu-programmer.com/", "Hablu programmer","width=500","height=300");
})

closeWindow.addEventListener("click",()=>{
   myWindow.closeWindow()

})
let deleteMe = document.querySelector("#deleteMe");
deleteMe.addEventListener("click",()=>{
    let userConfirmation = confirm("Are you sure you want to delete the file");
    if(userConfirmation){
        alert("item deleted");
    }else{
        alert("item not deleted");
    };
});


//prompt()method
let askMe = document.querySelector("#askMe");
askMe.addEventListener("click",()=>{
    let username =prompt("please enter your name");
    if(username !== null && username !== ""){
        alert("Hello"  +  username  +  "welcome to Hablu programmer")
    }else{
        alert("na name enterd")
    }
})